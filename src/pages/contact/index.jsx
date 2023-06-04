import React from 'react';
import BlackHeader from '../../components/black_header_pages/BlackHeader';
import ContactForm from '../../components/contactForm/ContactForm';
import './contact.module.css';
import locationimg from '../../assets/images/pin 1.png';
import callimg from '../../assets/images/telephone 1.png';
import emailimg from '../../assets/images/email 1.png';
import styles from './contact.module.css';
import Image from 'next/image';

// 785269223
const Index = () => {
  return (
    <div className={styles.contactPage}>
        <BlackHeader pageName={"Contact us "} backPage={"Contact us "}/>
        <div className={styles.cpContent}>
            <div className={styles.cpList}>
                <div className={styles.cpItemList}>
                    <div className={styles.cpItemListImg}>
                        <Image src={locationimg} alt=""  />
                    </div>
                    <span className={styles.cpItemListTitle}>Visit Us Daily</span>
                    <span className={styles.cpItemListValue}>{"> "}New York, 399 Saint Marks Ave, US</span>
                    {/* <span className='cp--item-list-value'>{"> "}Sénégal, Keur Massr, Apix, SN</span>
                    <span className='cp--item-list-value'>{"> "}43, Rue de Torcy, A11 Vaires-surmarne, 77360, FR</span> */}
                </div>
                <div className={styles.cpItemList}>
                    <div className={styles.cpItemListImg}>
                        <Image src={callimg} alt=""  />
                    </div>
                    <span className={styles.cpItemListTitle}>Contact Us</span>
                    <span className={styles.cpItemListValue}>{"> "}+1(516) 522-0258</span>
                    {/* <span className='cp--item-list-value'>{"> "}+ 221 78 197 85 71</span>
                    <span className='cp--item-list-value'>{"> "}+ 33 7 58 68 12 11</span> */}
                </div>
                <div className={styles.cpItemList}>
                    <div className={styles.cpItemListImg}>
                        <Image src={emailimg} alt=""  />
                    </div>
                    <span className={styles.cpItemListTitle}>Email Us</span>
                    <span className={styles.cpItemListValue}>{"> "}contact@b-hitech.com</span>
                </div>
            </div>
        </div>
        <ContactForm/>
    </div>
  )
}

export default Index
