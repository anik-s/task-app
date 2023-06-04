import React from 'react';
import homeheaderimg from '../../assets/images/home_banier.png';
import playimg from '../../assets/images/play.png';
import himg from '../../assets/images/job-banier.jpg';
import face from '../../assets/icons/face.png';
import you from '../../assets/icons/youtube Youtube.png';
import twi from '../../assets/icons/twitter Twitter.png';
import link from '../../assets/icons/linkedin linkedin.png';
import Link from "next/link";
import styles from './HomeHeader.module.css';
import Image from 'next/image';

const HomeHeader = () => {
    return (
        <div className={styles.hHeader}>
            <Image className={styles.bgImg} src={homeheaderimg} alt="" />
            <div className={styles.hContent}>
                <span className={styles.hTitle}>Professional IT for private  individuals and  companies</span>
                <div className={styles.hBtns}>
                    <Link href="/services/[idService]"><div className={styles.hBtn}>Our Service</div></Link>
                    <a href="https://www.youtube.com/watch?v=Lk7EH2PhQWI" target="_blank" rel="noopener noreferrer">
                        <div className={styles.playBtn}>
                            <Image src={playimg} alt="" width={0} height={0} />
                        </div>
                    </a>
                </div>
                <div className={styles.socialNet}>
                    <ul>
                        <li><a target="_blank" href="https://www.facebook.com/Bhitechgn?mibextid=LQQJ4d"><Image src={face} alt=""  /></a></li>
                        <li><a target="_blank" href="https://www.youtube.com/watch?v=aOIXNLiyddc"><Image src={you} alt=""  /></a></li>
                        {/* <li><a target="_blank" href="https://instagram.com/bhitechinc?igshid=YmMyMTA2M2Y="><Image src={you} alt="" srcset="" /></a></li> */}
                        <li><a target="_blank" href="https://twitter.com/buil_hitech/"><Image src={twi} alt=""  /></a></li>
                        <li><a target="_blank" href="https://www.linkedin.com/company/b-hitech/"><Image src={link} alt=""  /></a></li>
                    </ul>
                </div>
            </div>
            {/* <img className='h-img' src={himg} alt="" srcset="" /> */}
        </div>
    )
}

export default HomeHeader
