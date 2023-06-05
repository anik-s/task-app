import React, {useEffect} from 'react';
import BlackHeader from '../../components/black_header_pages/BlackHeader';
import styles from './about.module.css';
import history from '../../assets/images/history.png';
import mission from '../../assets/images/mission.png';
import vision from '../../assets/images/vssion.png';
import Accordion from 'react-bootstrap/Accordion';
import achev1 from '../../assets/images/achev1.png';
import achev2 from '../../assets/images/achev2.png';
import achev3 from '../../assets/images/achev3.png';
import achev4 from '../../assets/images/achev4.png';
import playimg from '../../assets/images/play.png';
import TeamList from '../../components/list_team/TeamList';
import aimg1 from '../../assets/images/job-banier.jpg';
import aimg2 from '../../assets/images/img2_about.jpeg';
import Image from 'next/image';

const Index = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    return (
        <div className={styles.about}>
            <BlackHeader pageName={"About Build High Technology"} backPage={"ABOUT US"} />
            <div className={styles.contentsAbout}>
                <div className={styles.para}>
                    <div className={styles.lPara}>
                        <div className={styles.badgLPara}>
                            <span className={styles.textBadgLPara}>ABOUT US</span>
                        </div>
                        <span className={styles.textLPara}>
                            We provide flexible IT <br /> services
                        </span>
                    </div>
                    <div className={styles.rPara}>
                        <span className={styles.textRPara}>
                            B-HiTech is an innovative IT solutions company. As a full-service IT company with resourceful experts from all walks of life and experience, we succeed in creating unique and inventive modern strategies to meet the needs of our clients.
                        </span>
                        <br />
                        <span className={styles.textRPara}>
                            We were founded in Guinea, West Africa and Senegal and we continue to expand as we grow. Our dynamic team of consultants and IT experts is particularly creative and ready to meet all your technological needs. Our process-driven and customer-centric approach to technology is what sets us apart from other IT companies.
                        </span>
                    </div>
                </div>
                <div className={styles.movi}>
                    <Image src={aimg1} alt="" />
                    <a href="https://www.youtube.com/watch?v=Lk7EH2PhQWI" target="_blank" rel="noopener noreferrer">
                        <div className={styles.playBtn}>
                            <Image src={playimg} alt="" />
                        </div>
                    </a>
                    {/* <div className='play-btn'>
                        <img src={playimg} alt="" srcset="" />
                    </div> */}
                </div>
                <div className={styles.listSubProvid}>
                    <div className={styles.itemListSubProvid}>
                        <div className={styles.imgItemListSubProvid}>
                            <Image src={history} alt="" />
                        </div>
                        <span className={styles.titleItemListSubProvid}>
                            Our History
                        </span>
                        <span className={styles.descItemListSubProvid}>
                            Our company has a rich history of excellence in the software editing industry. Established 2019 years ago, we have been at the forefront of technological advancements, constantly evolving to meet the changing needs of the market.
                        </span>
                    </div>
                    <div className={styles.itemListSubProvid}>
                        <div className={styles.imgItemListSubProvid}>
                            <Image src={mission} alt="" />
                        </div>
                        <span className={styles.titleItemListSubProvid}>
                            Our mission
                        </span>
                        <span className={styles.descItemListSubProvid}>
                            Our mission is to revolutionize the software editing landscape by delivering innovative and cutting-edge solutions that empower businesses and individuals alike. We are driven by a passion for technology and a deep understanding of our clients`&apos; needs.
                        </span>
                    </div>
                    <div className={styles.itemListSubProvid}>
                        <div className={styles.imgItemListSubProvid}>
                            <Image src={vision} alt="" />
                        </div>
                        <span className={styles.titleItemListSubProvid}>
                            Our vision
                        </span>
                        <span className={styles.descItemListSubProvid}>
                            At our software editing company, our vision is to be a global leader in providing cutting-edge software solutions that transform businesses and industries. We aspire to set new standards of excellence in the software editing landscape by delivering innovative, reliable, and scalable solutions that address complex challenges and drive digital transformation.
                        </span>
                    </div>
                </div>
                <div className={styles.para}>
                    <div className={styles.lPara}>
                        <div className={styles.badgLPara}>
                            <span className={styles.textBadgLPara}>why choose us</span>
                        </div>
                        <span className={styles.textLPara}>
                            Custom IT solutions<br />for your business
                        </span>
                    </div>
                    <div className={styles.rPara}>
                        <span className={styles.textRPara}>
                            At B-HiTech, we specialize in serving companies and businesses of all sizes and we understand the value that technology brings to their growing business. Our goal is to provide enterprise-level tools and dedicated support services for a fraction of the cost of doing everything in-house.
                        </span>
                        <br />
                        <span className={styles.textRPara}>
                            As a B-HiTech customer, we guarantee that you will receive the highest degree of service and user experience, as we focus on your success above all else. You can count on us to be there every step of the way and we continue to assess your satisfaction with us even after your experience with us.
                        </span>
                        <br />
                        <span className={styles.textRPara}>
                            In addition to the multitude of exceptional services we provide, we are passionate about targeting areas in West Africa to highlight the potential these regions have to offer in technology. We strive to recruit more talent and develop partnerships between innovative individuals from all walks of life, from Africa to the United States. Our team is excited about the change ahead and we welcome everyone on this journey with us.
                        </span>
                    </div>
                </div>
                <div className={styles.movi}>
                    <Image src={aimg2} alt="" />
                </div>
            </div>
            <div className={styles.achivement}>
                <div className={styles.cAchivement}>
                    <div className={styles.lAchivement}>
                        <div className={styles.badgLPara}>
                            <span className={styles.textBadgLPara}>achievement</span>
                        </div>
                        <span className={styles.textLPara}>
                            Some number of<br />our achivement
                        </span>
                        <br />
                        <Accordion defaultActiveKey="0">
                            <Accordion.Item eventKey="0">
                                <Accordion.Header>Latest IT Solutions With Blockchain</Accordion.Header>
                                <Accordion.Body>
                                    At our software editing company, we stay at the forefront of technology trends,
                                    and we are proud to offer the latest IT solutions with blockchain technology.
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="1">
                                <Accordion.Header>AI Machine & Deep Learning</Accordion.Header>
                                <Accordion.Body>
                                    We are at the forefront of artificial intelligence (AI) and machine learning (ML)
                                    technologies, including deep learning. Our team of AI and ML experts combines their
                                    cutting-edge expertise with industry best practices to develop sophisticated
                                    software solutions that leverage the power of AI and deep learning algorithms.                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="2">
                                <Accordion.Header>Dedicated Support 24/7 </Accordion.Header>
                                <Accordion.Body>
                                    We are committed to providing top-notch customer support, and we understand the
                                    importance of having reliable and responsive assistance when you need it. That&apos;s
                                    why we offer dedicated support 24/7 to our valued clients. Our team of skilled and
                                    knowledgeable support professionals is available around the clock to assist you
                                    with any technical issues, questions, or concerns you may have.                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                    </div>
                    <div className={styles.rAchivement}>
                        <div className={`${styles.itemRAchivement} ${styles.itemRAchivement1}`}>
                            <Image src={achev3} alt="" />
                            <span>3,860</span>
                            <small>Satisfied Clients</small>
                        </div>
                        <div className={`${styles.itemRAchivement} ${styles.itemRAchivement2}`}>
                            <Image src={achev2} alt=""  />
                            <span>3,860</span>
                            <small>Satisfied Clients</small>
                        </div>
                        <div className={`${styles.itemRAchivement} ${styles.itemRAchivement3}`}>
                            <Image src={achev1} alt="" />
                            <span>3,860</span>
                            <small>Satisfied Clients</small>
                        </div>
                        <div className={`${styles.itemRAchivement} ${styles.itemRAchivement4}`}>
                            <Image src={achev4} alt="" />
                            <span>3,860</span>
                            <small>Satisfied Clients</small>
                        </div>
                    </div>
                </div>
            </div>
            <TeamList nbr={3} labele={"The founders"}/>
        </div>
    )
}

export default Index