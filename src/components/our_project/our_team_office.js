import React from 'react';
import './OurProject.module.css';
import img1 from "../../assets/projects/gal1.jpeg"
import img2 from "../../assets/projects/gal2.jpeg"
import img3 from "../../assets/projects/gal3.jpeg"
import img5 from "../../assets/projects/gal5.jpeg"
import img6 from "../../assets/projects/gal6.jpeg"
import img7 from "../../assets/projects/gal7.jpeg"
import Image from 'next/image';
import styles from "@/components/our_project/OurProject.module.css";

const OurTeamOffice = () => {
    return (
        <div className={styles.ourProject}>
            <div className={styles.contentOurProject}>
                <div className={styles.lContentOurProject}>
                    {/* <h4 className='h4'>Ours Gallerys</h4> */}
                    <h1 className={styles.h1}>Our Gallerys</h1>
                    <p>
                    Our software editing company takes pride in showcasing our impressive portfolio of software projects through our carefully curated galleries. These galleries highlight our latest and most innovative software solutions, showcasing the diverse range of industries and clients we have served. Our galleries feature stunning visual representations of our software applications, along with accompanying descriptions that provide insights into the unique features and functionalities of each project.
                    </p>
                    {/* <div className='h-btns'>
                        <div className='h-btn'>more projects</div>
                    </div> */}
                </div>
                <div className={styles.rContentOurProject}>
                    <div className={styles.itemProject}>
                        <Image src={img1} alt="" />
                        {/* <a href='https://'>Taria Space</a> */}
                    </div>
                    <div className={styles.itemProject}>
                        <Image src={img2} alt="" />
                        {/* <a href='https://'>Spider Space</a> */}
                    </div>
                    <div className={styles.itemProject}>
                        <Image src={img3} alt="" />
                        {/* <a href='https://'>Totine App</a> */}
                    </div>
                    <div className={styles.itemProject}>
                        <Image src={img5} alt="" />
                        {/* <a href='https://'>Totine App</a> */}
                    </div>
                    <div className={styles.itemProject}>
                        <Image src={img6} alt="" />
                        {/* <a href='https://'>Totine App</a> */}
                    </div>
                    <div className={styles.itemProject}>
                        <Image src={img7} alt="" />
                        {/* <a href='https://'>Totine App</a> */}
                    </div>
                </div>
            </div>

        </div>
    )
}

export default OurTeamOffice