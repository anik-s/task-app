import React from 'react';
import './Partenaires.module.css';
import part1 from '../../assets/images/partenaires/logo_final_education_for_all.png';
import part2 from '../../assets/images/partenaires//unc.jpeg';
import part3 from '../../assets/images/partenaires/unipro.png';
import styles from './Partenaires.module.css';
import Image from 'next/image';

const Partenaires = () => {
    return (
        <div className={styles.partenaires}>
            <div className={styles.pagesTechs}>
                <h4 className={styles.h4}>OURS PARTENAIRES</h4>
                <h1 className={styles.h1}>All these great companies accompany us</h1>
                <div className={styles.partList}>
                    <div className={styles.partItem}>
                        <Image src={part1} alt=""  />
                        {/* <p>Education For All</p> */}
                    </div>
                    <div className={styles.partItem}>
                        <Image src={part2} alt=""/>
                        {/* <p>Education For All</p> */}
                    </div>
                    <div className={styles.partItem}>
                        <Image src={part3} alt="" />
                        {/* <p>Education For All</p> */}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Partenaires