import { Layout } from 'antd';
import React, { useState, useEffect } from 'react';

import { showTimeFormat } from './time';
import { allBackgroundImgs } from './backgroundImg';
import styles from './index.less';

const { Header, Content, Footer } = Layout;

function BasicLayout(props: { children: any }) {
  const { children } = props;
  const [currentTime, setCurrentTime] = useState<string>();
  const [currentBgImgIndex, setCurrentBgImgIndex] = useState<number>(0);

  // 当前时间
  useEffect(() => {
    const intervalTime = setInterval(
      () => setCurrentTime(showTimeFormat()),
      1000,
    );
    return () => {
      clearInterval(intervalTime);
    };
  }, [currentTime]);

  // 轮番修改背景图
  useEffect(() => {
    const len = allBackgroundImgs.length;
    const intervalBgImg = setInterval(() => {
      if (currentBgImgIndex >= len) {
        setCurrentBgImgIndex(0);
      } else {
        setCurrentBgImgIndex(currentBgImgIndex + 1);
      }
    }, 1000 * 60 * 20);

    return () => {
      clearInterval(intervalBgImg);
    };
  }, [currentBgImgIndex]);

  const currentBgImg = allBackgroundImgs[currentBgImgIndex];

  return (
    <Layout>
      <Header className={styles.header}>
        <div className={styles.headerTitle}>每日一句</div>
        <div className={styles.headerTime}>{currentTime}</div>
      </Header>
      <Content
        style={{ padding: '0 50px', backgroundImage: `url(${currentBgImg})` }}
      >
        <div className={styles.content}>{children}</div>
      </Content>
      <Footer style={{ textAlign: 'center' }}>
        {' '}
        累了，倦了，快撑不下去了，给自己一点掌声{' '}
      </Footer>
    </Layout>
  );
}

export default BasicLayout;
