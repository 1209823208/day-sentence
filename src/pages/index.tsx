import React from 'react';
import { Row, Col, Button } from 'antd';
import {
  HeartOutlined,
  FolderAddOutlined,
  CopyOutlined,
  ShareAltOutlined,
} from '@ant-design/icons';

import logo from '@/assets/forrest-gump.jpg';
import styles from './index.less';

export default () => {
  return (
    <div className={styles.indexContent}>
      <Row gutter={[16, 24]}>
        <Col span="10">
          <img className={styles.logo} src={logo} alt="" />
          <div className={styles.buttonList}>
            <Button icon={<HeartOutlined />}>喜欢</Button>
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
