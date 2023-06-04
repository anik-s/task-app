import React from 'react';
import bg from '../../assets/images/blackbg.png';
import elips1 from '../../assets/images/elps1.png';
import elips2 from '../../assets/images/elips2.png';
import elips3 from '../../assets/images/elips3.png';
import elips4 from '../../assets/images/elips4.png';
import Image from 'next/image';
import styles from './BlackHeader.module.css';

const BlackHeader = ({pageName, backPage}) => {
  return (
    <div className={styles.blackheader}>
      <Image src={bg} alt="" />
      <div className={`${styles.elps} ${styles.elps1}`}>
        <Image src={elips1} alt=""  />
      </div>
      <div className={`${styles.elps} ${styles.elps2}`}>
        <Image src={elips2} alt=""  />
      </div>
      <div className={`${styles.elps} ${styles.elps3}`}>
        <Image src={elips3} alt=""  />
      </div>
      <div className={`${styles.elps} ${styles.elps4}`}>
        <Image src={elips4} alt=""  />
      </div>
      <div className={styles.textBlackheader}>
          <span className={styles.titleTextBlackheader}>{pageName}</span>
          <span className={styles.subTitleTextBlackheader}>Build High Technology {'>'} <a href="http://" className={styles.link}>{backPage}</a></span>
      </div>
    </div>
  )
}

export default BlackHeader
