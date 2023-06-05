import React from 'react';
import people from "../../assets/images/People.png";
import star from "../../assets/images/Star.png";
import Link from 'next/link';
import Image from 'next/image';
import styles from './WhoAreWe.module.css';

const WhoAreWe = () => {
    return (
        <main className={styles.whoarewe}>
            <div className='who-img-people'>
                <Image src={people} width={400} alt="" />
            </div>

            <div className='des-whoarewe'>
                <h2>Who we are</h2>
                <h1>We&apos;re a dynamic team of creatives people</h1>
                <p className={styles.des}>&quot;We are a dynamic team of creative professionals who are passionate about
                    software editing. Our team consists of talented and innovative individuals who bring their unique
                    perspectives and expertise to every project. With a collaborative approach, we foster creativity,
                    encourage experimentation, and strive for excellence in every aspect of our work. We are constantly
                    pushing boundaries, exploring new ideas, and staying up-to-date with the latest industry trends to
                    deliver cutting-edge software editing solutions for our clients.&quot;</p>

                <div className={styles.strength}>
                    <Image width={10} height={10} src={star} alt="" />
                    <p>Automatically syncs across all your devices.</p>
                </div>

                <div className={styles.strength}>
                    <Image width={10} height={10} src={star} alt="" />
                    <p>Create And Save Your Notes With- Media</p>
                </div>

                <div className={styles.strength}>
                    <Image src={star} alt="" />
                    <p>Latest IT Solutions & Integration </p>
                </div>

                <div className={styles.strength}>
                    <Image width={10} height={10} src={star} alt="" />
                    <p>AI Machine & Deep Learning </p>
                </div>

                <div className={styles.strength}>
                    <Image width={10} height={10} src={star} alt="" />
                    <p>Images, videos, PDFs and audio files are supported.</p>
                </div>
                <Link href="/abouts"><div className={`${styles.serviceBtn} ${styles.sBtnx}`}>MORE ABOUT US</div></Link>
            </div>
        </main>
    )
}

export default WhoAreWe
