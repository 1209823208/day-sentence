import React, { FC } from 'react';
import { connect, ConnectProps, MyCollectModelState } from 'umi';
import styles from './index.less';
import ListComponent from './component/list';
import RecommendComponent from './component/recommend';

interface PageProps extends ConnectProps {
  MyCollect: MyCollectModelState;
}
const MyCollectPage: FC<PageProps> = ({ dispatch }) => {
  return (
    <div className={styles.myCollectContent}>
      <p>我的收藏</p>
      <div style={{ display: 'flex' }}>
        <ListComponent dispatch={dispatch} />
        <RecommendComponent />
      </div>
    </div>
  );
};
export default connect(({ MyCollect }: { MyCollect: MyCollectModelState }) => ({
  MyCollect,
}))(MyCollectPage);
