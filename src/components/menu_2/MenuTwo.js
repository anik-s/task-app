import React, { useState } from 'react';
import usa from '../../assets/images/flags/usa.png';
import menubar from '../../assets/images/menu-bar 1.png';
import logo from '../../assets/images/logo-removebg-preview.png';
import { RiArrowDropDownLine } from 'react-icons/ri';
import Modal from 'react-bootstrap/Modal';
import { serviceData } from "../../assets/data/serviceData";
import Link from 'next/link';
import styles from './MenuTwo.module.css';
import Image from 'next/image';

const MenuTwo = () => {
  const values = [true];
  const [fullscreen, setFullscreen] = useState(true);
  const [show, setShow] = useState(false);

  function handleShow(breakpoint) {
    setFullscreen(breakpoint);
    setShow(true);
  }

  var mn = <ul>
    <li className={styles.li}><Link  href="/"><div></div> HOME</Link></li>
    <li className={styles.li}><Link  href="/abouts"><div></div> ABOUT US</Link></li>
    <li className={`${styles.li} ${styles.srvTwo}`}><Link href="/services"><div></div> SERVICES <RiArrowDropDownLine /></Link>
      {!show && <div className={styles.subMenu}>
        <ul className={styles.listSubMn}>
          <div className={styles.itemListSubMn}>
            {serviceData.slice(0, 4).map(service => (
                <li key={service.id} className={styles.li}><Link href={`/services/${service.id}`}><div></div> {service.title}</Link></li>
            ))}
          </div>
          <div className={styles.itemListSubMn}>
            {serviceData.slice(4, 7).map(service => (
                <li key={service.id} className={styles.li}><Link href={`/services/${service.id}`}><div></div> {service.title}</Link></li>
            ))}
          </div>
          <div className={styles.itemListSubMn}>
            {serviceData.slice(7, 10).map(service => (
                <li key={service.id} className={styles.li}><Link href={`/services/${service.id}`}><div></div> {service.title}</Link></li>
            ))}
          </div>
        </ul>
      </div>}
    </li>

    <li className={styles.li}><Link onClick={() => setShow(false)} href="/teams"><div></div> TEAMS</Link></li>
    <li className={styles.li}><Link onClick={() => setShow(false)} href="/contact"><div></div> CONTACT US</Link></li>
  </ul>

  var lg = <Image className={styles.logo} src={logo} alt="" objectFit="contain" />

  return (
    <div className={styles.mnTwo}>
      <div className={styles.mnContent}>
        {lg}
        <div className={styles.mnList}>
          {mn}
        </div>
        {/* <span>Language:</span>
        <img className='cntry' src={usa} alt="" srcset="" />
        <img className='bnt-menu' src={menubar} alt="" srcset="" onClick={() => handleShow(values[0])} /> */}
      </div>
      <Modal show={show} fullscreen={fullscreen} onHide={() => setShow(false)}>
        <Modal.Header closeButton>
          <Modal.Title>
            <div className={styles.mnContent}>{lg}</div>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className={styles.mnListMb}>
            {mn}
          </div>
        </Modal.Body>
      </Modal>
    </div>
  )
}

export default MenuTwo
