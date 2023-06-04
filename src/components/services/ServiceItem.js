import {Col, Stack} from "react-bootstrap";
import {FaArrowRight} from "react-icons/fa";
import Link from 'next/link';
import styles from './services.module.css';
import Image from 'next/image';

export default function ServiceItem ({img, title, link}) {
  // const navigate = useNavigate();
  return (
    <Col className={styles.servicesItem}>
      <Stack gap={3} className='p-3'>
        <Image src={img} className='my-2 img-fluid rounded'  alt=""/>
        <h6 className={`${styles.servicesItemTitle} my-3`}>{title}</h6>
        <Link href={link}><div className={styles.servicesItemBtn}><FaArrowRight /></div></Link>
      </Stack>
    </Col>
  )
}