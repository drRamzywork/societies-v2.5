import Navbar from '@/components/Navbar'
import React, { useEffect, useState } from 'react'
import styles from '@/styles/landing.module.scss';


// import required modules
import { motion } from 'framer-motion';
import UserIcon from '@/components/Icons/UserIcon';
import dynamic from 'next/dynamic';
import CloudAnimation from '@/components/Hooks/CloudAnimation';

const TypingAnimation = dynamic(() => import('@/components/Hooks/TypingAnimation'), { ssr: false });

const LandingV1 = () => {

  return (
    <>
      <Navbar />
      <section id='landing' className={styles.landing}>
        <CloudAnimation />

        <div className="container  mx-auto px-4">

          <div className={`${styles.sec_container} container  mx-auto px-4"`}>

            <motion.div initial={{ opacity: 0, }}
              whileInView={{ opacity: 1, }}
              transition={{ duration: 1.5, type: "tween" }} className={styles.text_container}>

              <div className={styles.title}>
                <span>
                  <div className={styles.blue}></div>
                </span>
                <motion.h1 initial={{ opacity: 0, }}
                  whileInView={{ opacity: 1, }}
                  transition={{ duration: 1.5, type: "tween" }}>
                  جمعية الشرق

                </motion.h1>
              </div>


              <div className={styles.desc} dir='rtl'>
                <p>

                  <TypingAnimation text="فازت اليوم جمعية الشرق " />

                  <TypingAnimation text="    بعديد من الجوائز المستحقة." />

                </p>
              </div>
              <div className={styles.btn_container}>
                <UserIcon text="تسجيل الدخول" bgColor="bg-color-green" iconSrc={'/imgs/newsArrow.svg'} />
              </div>
            </motion.div>




            <motion.div initial={{ opacity: 0, }}
              whileInView={{ opacity: 1, }}
              transition={{ duration: 1.5, type: "tween" }} className={styles.contacts}>
              <div className={styles.text}>
                <p>تواصل معنا</p>

                <div className={styles.icons_container}>
                  <img src="/imgs/twitter.svg" alt="" />
                  <img src="/imgs/youtube.svg" alt="" />
                  <img src="/imgs/instagram.svg" alt="" />
                  <img src="/imgs/facebook2.svg" alt="" />
                </div>
              </div>

            </motion.div>


          </div>

        </div>

        <div className={styles.img_bg_container}>
          <div className={styles.imgs_container}>
            <motion.img initial={{ opacity: 0, y: 0 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.5, type: "tween" }} src={"/imgs/bg/1.png"} alt="" />

          </div>


          <motion.div initial={{ opacity: 0, }}
            whileInView={{ opacity: 1, }}
            transition={{ duration: 1.5, type: "tween" }} className={styles.map_container}>
            <a href="https://societies-web3.vercel.app/">
              <img src="/imgs/map.svg" alt="" />
            </a>
            {/* <Map /> */}
          </motion.div>


          <div className={styles.layer} />



        </div>
      </section>
    </>
  )
}

export default LandingV1