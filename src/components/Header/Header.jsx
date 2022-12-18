import React from 'react';
import styles from './Header.module.scss';

export const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.container}>
        <div className={styles.logo__content}>
          <div className={styles.logo}>
            <img
              src="	https://27.edubish.kg/wp-content/uploads/sites/188/2018/08/logotip-250x214.png"
              alt="logo"
            />
          </div>
          <div className={styles.sosh}>
            <h1>СОШ №27</h1>
            <p>Средняя общеобразовательная школа №27</p>
          </div>
        </div>
      </div>
    </div>
  );
};
