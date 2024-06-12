import React from 'react';
import styles from './index.module.scss';

const UserIcon = ({ text, bgColor, iconSrc }) => {
  return (
    <>
      <button className={`${styles.btn_container} ${bgColor}`}>
        <div className={styles.icon_container}>
          <img
            className="h-boundvariablesdata relative overflow-hidden shrink-0"
            loading="lazy"
            alt=""
            src={iconSrc}
          />
        </div>
        <p>{text}</p>
      </button>
    </>
  );
};

export default UserIcon;
