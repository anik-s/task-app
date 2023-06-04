import React from 'react';
import './OurProject.module.css';
import spider from '../../assets/projects/spider.jpeg';
import taria from '../../assets/projects/taria.jpeg';
import totine from '../../assets/projects/3.jpeg';
import styles from './OurProject.module.css';
import Image from "next/image";

const OurProject = () => {
    return (
        <div className={styles.ourProject}>

            <div className={styles.contentOurProject}>
                <div className={styles.lContentOurProject}>
                    <h4 className={styles.h4}>RECENT PROJECTS</h4>
                    <h1 className={styles.h1}>Our latest case studies</h1>
                    <p>
                        Discover our latest case studies that highlight our past successes in software editing. Our detailed case studies provide insights into the challenges faced by our clients, the solutions implemented by our team, and the positive results achieved. This demonstrates our expertise, ability to tackle complex challenges, and commitment to our clients' success.
                    </p>
                    {/* <div className='h-btns'>
                        <div className='h-btn'>more projects</div>
                    </div> */}
                </div>
                <div className={styles.rContentOurProject}>
                    <div className={styles.itemProject}>
                        <Image src={taria} alt="" />
                        <a href='https://'>Taria Space</a>
                    </div>
                    <div className={styles.itemProject}>
                        <Image src={spider} alt="" />
                        <a href='https://'>Spider Space</a>
                    </div>
                    <div className={styles.itemProject}>
                        <Image src={totine} alt="" />
                        <a href='https://'>Totine App</a>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default OurProject