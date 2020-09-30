import React, { FC } from 'react';
import { IndexModelState, ConnectProps, Loading, connect } from 'umi';
import { Row, Col, Button } from 'antd';
import {
  HeartTwoTone,
  FolderAddOutlined,
  CopyOutlined,
  ShareAltOutlined,
} from '@ant-design/icons';

import logo from '@/assets/forrest-gump.jpg';
import styles from './index.less';

interface PageProps extends ConnectProps {
  index: IndexModelState;
  loading: boolean;
}

const IndexPage: FC<PageProps> = ({ index, dispatch }) => {
  const { isLove } = index;

  const handleLoveEvent = () => {
    dispatch?.({
      type: 'index/updateLove',
      payload: {
        isLove: !isLove,
      },
    });
  };

  return (
    <div className={styles.indexContent}>
      <Row gutter={[16, 24]}>
        <Col span="10">
          <img className={styles.logo} src={logo} alt="" />
          <div className={styles.buttonList}>
            <Button
              icon={
                <HeartTwoTone twoToneColor={isLove ? '#eb2f96' : 'black'} />
              }
              onClick={handleLoveEvent}
            >
              喜欢
            </Button>
            <Button icon={<FolderAddOutlined />}>收藏</Button>
            <Button icon={<CopyOutlined />}>复制</Button>
            <Button icon={<ShareAltOutlined />}>分享</Button>
          </div>
        </Col>
        <Col className={styles.content}>
          <div>生活就像一盒巧克力，你永远不知道你会得到什么。</div>
          <div>
            life was like a box of chocolates.you never know what you are going
            to get.
          </div>
          <div className={styles.formSource}>——《阿甘正传》</div>
        </Col>
      </Row>
    </div>
  );
};

export default connect(
  ({ index, loading }: { index: IndexModelState; loading: Loading }) => ({
    index,
    loading: loading.models.index,
  }),
)(IndexPage);
