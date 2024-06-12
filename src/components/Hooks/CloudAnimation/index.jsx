import React from 'react';
import { motion } from 'framer-motion';
import styles from './index.module.scss';

const CloudAnimation = () => {
  return (
    <div className={styles.cloudContainer}>
      <motion.img
        src="/imgs/Cloud.png"
        alt="Cloud 1"
        className={styles.cloud}
        initial={{ x: '-0%', opacity: 0.7 }}
        animate={{ x: '100vw' }}
        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
      />
      <motion.img
        src="/imgs/Cloud.png"
        alt="Cloud 2"
        className={styles.cloud}
        initial={{ x: '0%', opacity: 0.7 }}
        animate={{ x: '-100vw' }}
        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
      />
    </div>
  );
};

export default CloudAnimation;
