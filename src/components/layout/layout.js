import MenuTwo from "../menu_2/MenuTwo";
import styles from './layout.module.css';
import Footer from "@/components/footer/Footer";
import watshap from '../../assets/projects/watshap.png'
import Image from 'next/image';
import { isMobile } from 'react-device-detect';
import Head from 'next/head';

export default function Layout({ children }) {

    const generateWhatsAppLink = (phone) => {
        const phoneNumber = encodeURIComponent(phone);
        const baseUrl = isMobile ? 'whatsapp://' : 'https://web.whatsapp.com/send';
        return `${baseUrl}?phone=${phoneNumber}`;
    };

    const handleButtonClick = () => {
        const link = generateWhatsAppLink('+1(516)522‑0258');
        if (isMobile) {
            window.location.href = link;
        } else {
            window.open(link, '_blank');
        }
    };

    return (
        <div className={styles.App}>
            <div onClick={handleButtonClick} className="floating-button">
                <Image src={watshap} alt=""/>
            </div>
            <MenuTwo />
            <main>{children}</main>
            <Footer/>
        </div>
    );
}
