import React from 'react';
import product1 from "../assets/images/product1.png"
import arrow from "../assets/images/arrow-right.png"
import cybersecurity from "../assets/images/cyber-security 1.png"
import data from "../assets/images/data 1.png"
import system from "../assets/images/system 1.png"
import world from "../assets/images/world.png"
import technical from "../assets/images/technical-support 1.png"
import quality from "../assets/images/quality-assurance 1.png"
import HomeHeader from '../components/home_header/HomeHeader';
import find from "../assets/ourWorkflow/find.png";
import dataAna from "../assets/ourWorkflow/dataAna.png";
import mark from "../assets/ourWorkflow/markting.png";
import product from "../assets/ourWorkflow/product.png";
import OurProject from '../components/our_project/OurProject';
import Technologies from '../components/technologies/Technologies';
import OurTeamOffice from '../components/our_project/our_team_office';
import WhoAreWe from '../components/whou_we_are/WhoAreWe';
import {serviceData} from "../assets/data/serviceData";
import ServiceItem from "../components/services/ServiceItem";
import {Container, Row} from "react-bootstrap";
import Partenaires from '../components/partenaires/Partenaires';
import styles from './home/home.module.css';
import Image from 'next/image';


function Index() {
    return (
        <div className={styles.homeApp}>
            <HomeHeader />

            {/* <main className='whoarewe'>
                <div className='who-img-people'>
                    <img src={people} width={400} alt="" />
                </div>

                <div className='des-whoarewe'>
                    <h2>Who we are</h2>
                    <h1>We're a dynamic team of creatives people</h1>
                    <p className='des'>"We are a dynamic team of creative professionals who are passionate about software editing. Our team consists of talented and innovative individuals who bring their unique perspectives and expertise to every project. With a collaborative approach, we foster creativity, encourage experimentation, and strive for excellence in every aspect of our work. We are constantly pushing boundaries, exploring new ideas, and staying up-to-date with the latest industry trends to deliver cutting-edge software editing solutions for our clients."</p>
                        
                    <div className='strength'>
                        <img width={10} height={10} src={star} alt="" />
                        <p>Automatically syncs across all your devices.</p>
                    </div>

                    <div className='strength'>
                        <img width={10} height={10} src={star} alt="" />
                        <p>Create And Save Your Notes With- Media</p>
                    </div>

                    <div className='strength'>
                        <img src={star} alt="" />
                        <p>Latest IT Solutions & Integration </p>
                    </div>

                    <div className='strength'>
                        <img width={10} height={10} src={star} alt="" />
                        <p>AI Machine & Deep Learning </p>
                    </div>

                    <div className='strength'>
                        <img width={10} height={10} src={star} alt="" />
                        <p>Images, videos, PDFs and audio files are supported.</p>
                    </div>

                    <div className='service-btn s-btnx'>MORE ABOUT US</div>

                </div>
            </main> */}
            <WhoAreWe/>

            <OurTeamOffice/>

            <Container fluid='lg'>
                <h6 className={`text-center fw-bold my-4 ${styles.services}`}>Our services</h6>
                <h6 className={`text-center fw-bold my-4 ${styles.servicesTitle}`}>IT solutions for your business</h6>
                <Row xs={2} md={4} className='my-5 mx-1 mx-md-5'>
                    {serviceData.map((item, i) =>
                        <ServiceItem key={item.id} img={item.img} title={item.title} link={`services/${item.id}`} />
                    )}
                </Row>
            </Container>
            {/*<div className='service'>*/}
            {/*    <h4>OUR SERVICES</h4>*/}
            {/*    <h1>IT solutions for your business</h1>*/}
            {/*    <div className='services-container'>*/}
            {/*        <div className='service'>*/}
            {/*            <img width={50} src={product1} alt="" />*/}
            {/*            <p>Cloud Migration With AWS</p>*/}
            {/*            <img width={10} src={arrow} alt="" />*/}

            {/*        </div>*/}

            {/*        <div className='service'>*/}
            {/*            <img width={50} src={cybersecurity} alt="" />*/}
            {/*            <p>Application Development</p>*/}
            {/*            <img width={10} src={arrow} alt="" />*/}

            {/*        </div>*/}

            {/*        <div className='service'>*/}
            {/*            <img width={50} src={data} alt="" />*/}
            {/*            <p>Cloud Architecture</p>*/}
            {/*            <img width={10} src={arrow} alt="" />*/}

            {/*        </div>*/}

            {/*        <div className='service'>*/}
            {/*            <img width={50} src={system} alt="" />*/}
            {/*            <p>Formation</p>*/}
            {/*            <img width={10} src={arrow} alt="" />*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*</div>*/}

            <div className={styles.ourWorkflow}>
                <h4 className={styles.h4}>our workflow</h4>
                <h1 className={styles.h1}>We&apos;re help you turn
                    your idea into a great product</h1>
                <div className={styles.listOurWorkflow}>
                    <div className={styles.itemListOurWorkflow}>
                        <Image src={find} alt="" />
                        <h6>Goal and Outcome Definition</h6>
                        <p>Clearly define the goals to be achieved and the expected outcomes of the workflow. This involves setting specific, measurable, and achievable objectives that align with the overall business strategy of the software editing company.</p>
                    </div>
                    <div className={`${styles.itemListOurWorkflow} ${styles.whiteItemListOurWorkflow}`}>
                        <Image src={dataAna} alt="" />
                        <h6>Planning and Design</h6>
                        <p>This step involves detailed planning of the workflow, including determining specific steps, required resources, deadlines, roles and responsibilities of team members, as well as designing any necessary documents or tools. The planning and design phase ensures that the workflow is well-organized and structured for efficient execution.</p>
                    </div>
                    <div className={styles.itemListOurWorkflow}>
                        <Image src={mark} alt="" />
                        <h6>Task Assignment</h6>
                        <p>Tasks are assigned to team members or relevant stakeholders based on their skills, expertise, and availability. This step involves clearly communicating the assigned tasks, deadlines, and expectations to the team members responsible for their completion.</p>
                    </div>
                    <div className={styles.itemListOurWorkflow}>
                        <Image src={product} alt="" />
                        <h6>Execution</h6>
                        <p>Team members carry out the assigned tasks according to the established plan, meeting the deadlines and collaborating with other team members as needed. This step involves actively working on the software editing tasks, following established processes and quality standards.</p>
                    </div>
                </div>
            </div>

            <OurProject/>


            <div className={styles.whyChooseus}>
                <div className={styles.whyCImg}>
                    <Image src={world} width={400} alt="" />
                </div>
                <div className='des-whoarewe'>
                    <h2>Why Choose Us</h2>
                    <h1>Why choose our own IT service?</h1>

                    <div className={styles.supports}>
                        <div className={styles.support}>
                            <Image src={technical} alt="" width={50} />
                            <h3>Full Time Support</h3>
                            <p> We offer comprehensive and continuous support to our clients. Our team is available full time to address your software editing needs, whether it&apos;s resolving technical issues, providing guidance on software features, or offering post-editing support. We are committed to delivering fast and reliable service to ensure your satisfaction as a client.</p>
                        </div>

                        <div className={styles.support}>
                            <Image src={quality} alt="" width={50} />
                            <h3>Faster, Quality & Trusted</h3>
                            <p>Faster: Our software editing company is dedicated to delivering fast and efficient results.</p>
                            <p>Quality: We place a strong emphasis on the quality of our software editing work.</p>
                            <p>Trusted: Our software editing company is known for its reliability and professionalism.</p>
                        </div>
                    </div>
                </div>

            </div>
            <Technologies/>
            <Partenaires/>
        </div>
    );
}

export default Index;