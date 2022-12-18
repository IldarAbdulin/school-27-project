import React from 'react';
import { MySwiper } from '../../UI/MySwiper';
import styles from './Main.module.scss';

export const Main = () => {
  return (
    <div className={styles.main}>
      <MySwiper />
    </div>
  );
};
