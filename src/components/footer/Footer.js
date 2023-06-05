import React from "react";
import styles from './Footer.module.css';
import {
    FaTwitter, FaGoogle, FaLinkedin, FaDiscord, FaGithub, FaFacebook, FaHome, FaEnvelope, FaPhone, FaGem
} from "react-icons/fa";
import snFlag from '../../assets/images/flags/sn.png';
// import gnFlag from '../../assets/images/flags/gn.png';
import frFlag from '../../assets/images/flags/fr.png';
import usaFlag from '../../assets/images/flags/usa.png';
import {serviceData} from "../../assets/data/serviceData";
import Image from 'next/image';
import { useRouter } from 'next/router';


const socialIcons = [
    { name: 'twitter', icon: <FaTwitter />, href: 'https://twitter.com/buil_hitech/' },
    // { name: 'google', icon: <FaGoogle />, href: '' },
    { name: 'linkedin', icon: <FaLinkedin />, href: 'https://www.linkedin.com/company/b-hitech/' },
    // { name: 'discord', icon: <FaDiscord />, href: '' },
    // { name: 'github', icon: <FaGithub />, href: '' },
    { name: 'facebook', icon: <FaFacebook />, href: 'https://www.facebook.com/Bhitechgn?mibextid=LQQJ4d' },
];

// const infosLinks = [
//     { label: 'Carrier', href: '' },
//     { label: 'Refund', href: '' },
//     { label: 'Terms', href: '' },
//     { label: 'Privacy Policy', href: '' },
//     { label: 'Awards & Partners', href: '' },
// ];

const contacts = [
    { phone: '+1(516) 522-0258', flg: usaFlag },
    // { phone: '+ 221 78 197 85 71', flg: snFlag },
    // { phone: '+ 224 234 567 88', flg: gnFlag }, 035f69 ==> 1c2331 ==> #266FF2
    // { phone: '+ 33 7 58 68 12 11', flg: frFlag },
];
export default function Footer() {
    const router = useRouter();
    return (
        <>
            <footer
                className="text-center text-lg-start text-white"
                style={{ backgroundColor: '#1c2331' }}
            >
                <section className="d-flex justify-content-between">
                    <div className="container text-center text-md-start mt-5">
                        <div className="row mt-3">
                            <div className="col-md-3 mx-auto mb-4">
                                <h6 className="text-uppercase fw-bold- mb-4"><FaGem className="me-3" />Build High Technology</h6>
                                <hr
                                    className="mb-4 mt-0 d-inline-block mx-auto"
                                    style={{ width: '60px', backgroundColor: '#7c4dff', height: '2px' }}
                                />
                                <p>
                                    B-HiTech is an innovative IT solutions company. As a full-service IT company with resourceful experts from all walks of life and experience, we succeed in creating unique and inventive modern strategies to meet the needs of our customers.
                                </p>
                                <div className="mt-4">
                                    {socialIcons.map(({ name, icon, href }, index) => (
                                        <a key={index} href={href} target='_blank' className="text-white me-4">
                                            {icon}
                                        </a>
                                    ))}
                                </div>
                            </div>
                            <div className="col-md-3 mx-auto mb-4">
                                <h6 className="text-uppercase- fw-bold">Services</h6>
                                <hr
                                    className="mb-4 mt-0 d-inline-block mx-auto"
                                    style={{ width: '60px', backgroundColor: '#7c4dff', height: '2px' }}
                                />
                                {serviceData.map((service, index) => (
                                    <p key={index} className="text-white f-srv" onClick={()=> router.push(`/services/${service.id}`)} >
                                        {service.title}
                                        {/* <a href={`/services/${service.id}`} className="text-white"><div></div> {service.title}</a> */}
                                    </p>
                                ))}
                            </div>
                            {/* <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                                <h6 className="text-uppercase- fw-bold">Information</h6>
                                <hr
                                    className="mb-4 mt-0 d-inline-block mx-auto"
                                    style={{ width: '60px', backgroundColor: '#7c4dff', height: '2px' }}
                                />
                                {infosLinks.map(link => (
                                    <p>
                                        <a href={link.href} className="text-white">{link.label}</a>
                                    </p>
                                ))}
                            </div> */}
                            <div className="col-md-3 mx-auto mb-md-0 mb-4">
                                <h6 className="text-uppercase- fw-bold">Contact</h6>
                                <hr
                                    className="mb-4 mt-0 d-inline-block mx-auto"
                                    style={{ width: '60px', backgroundColor: '#7c4dff', height: '2px' }}
                                />
                                <p><FaHome className={styles.mr3} /> New York, 399 Saint Marks Ave, US</p>
                                {/*
                                <p><FaHome className="mr-3" /> Sénégal, Keur Massr, Apix, SN</p>
                                <p><FaHome className="mr-3" /> 43, Rue de Torcy, A11 Vaires-surmarne, 77360, FR</p>
                                */}
                                <p><FaEnvelope className={styles.mr3} />contact@b-hitech.com</p>
                                <div className='d-inline-flex'>
                                    <div className={styles.me1}><FaPhone /></div>
                                    <div className=''>
                                        {contacts.map((contact, index) => (
                                            <div key={index} className='mb-1'>
                                                <Image src={contact.flg} width={30} height={25} alt=""/> {contact.phone}
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <div className="text-center p-3" style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
                    © 2023 Copyright: B-hitech
                </div>
            </footer>
        </>
    )
}