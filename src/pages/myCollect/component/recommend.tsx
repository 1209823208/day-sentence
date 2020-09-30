import React from 'react';
import recommendImg from '@/assets/recommend.jpg';
import styles from './recommend.less';

const RecommendComponent = () => {
  return (
    <div className={styles.recommendContent}>
      <img className={styles.recommendImg} src={recommendImg} alt="" />
      <p className={styles.recommendText}>
        世界上最远的距离，不是爱，不是恨，而是熟悉的人，渐渐变得陌生
      </p>
    </div>
  );
};
export default RecommendComponent;
