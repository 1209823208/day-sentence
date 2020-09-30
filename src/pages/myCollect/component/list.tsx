import React, { useState, useEffect } from 'react';
import { List } from 'antd';
import InfiniteScroll from 'react-infinite-scroller';
import styles from './list.less';

interface ListType {
  title: string;
  content: string;
}
const PAGESIZE = 10;

const ListComponent = (props: { dispatch: any }) => {
  const { dispatch } = props;
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const [dataList, setDataList] = useState<ListType[]>([]);
  const [currentPage, setCurrentPage] = useState(1);

  const getList = () => {
    setLoading(true);
    dispatch?.({
      type: 'MyCollect/fetchList',
      payload: {
        page: currentPage,
      },
      callback: (res: any) => {
        const newList = [...dataList, ...res.list];
        const totalPage = res.total;
        if (currentPage * PAGESIZE > totalPage) {
          setHasMore(false);
        }
        setLoading(false);
        setDataList(newList);
      },
    });
  };

  const handleInfiniteOnLoad = (page: number) => {
    if (!loading && hasMore) {
      setCurrentPage(() => 1 + page);
    }
  };
  useEffect(() => {
    getList();
    document.getElementsByTagName('body')[0].style.overflow = 'hidden';
    return () => {
      document.getElementsByTagName('body')[0].style.overflow = 'inherit';
    };
  }, [currentPage]);

  return (
    <div className={styles.listScrolll}>
      <InfiniteScroll
        initialLoad={false}
        pageStart={0}
        loadMore={handleInfiniteOnLoad}
        hasMore={!loading && hasMore}
        useWindow={false}
        loader={
          <div className="loader" key={0}>
            Loading ...
          </div>
        }
      >
        <List
          className={styles.myCollectContentList}
          itemLayout="horizontal"
          dataSource={dataList}
          renderItem={item => (
            <List.Item>
              <div className={styles.listItem}>
                <p className={styles.listItemTitle}>{item.title}</p>
                <div className={styles.listItemContent}>{item.content}</div>
              </div>
            </List.Item>
          )}
        />
      </InfiniteScroll>
    </div>
  );
};
export default ListComponent;
