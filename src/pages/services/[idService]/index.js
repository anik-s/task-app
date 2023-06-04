import {useEffect, useState} from "react";
import {Button, Card, Col, Container, Form, ListGroup, Row} from "react-bootstrap";
import ServiceSidebarLink from "../../../components/services/ServiceSidebarLink";
import {FaFilePdf, FaFileWord} from "react-icons/fa";
import styles from '../services.module.css';
import BlackHeader from "../../../components/black_header_pages/BlackHeader";

import { serviceData } from '@/assets/data/serviceData';
import {useRouter} from "next/router";
import Image from 'next/image';

export default function Index() {
  const router = useRouter();
  const idService = router.query.idService;
  const [service, setService] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0)
}, [])

  useEffect((() => {
    setService(serviceData[idService-1]);
  }), [idService]);



  return (
      <>
        {/* <Header title='Our service details' subTitle='SOTCOX > our Services details' /> */}
        <BlackHeader pageName={"Service details"} backPage={"Service details"}/>
        <Container fluid className='pb-5'>
          <Row xs={2} md={4} className='mt-5 mb-2 mx-1 mx-md-5 justify-content-center'>
            <Col xs={12} md={9} className=''>
              <Image src={service?.img} className="img-fluid img-thumbnail" alt="" style={{maxHeight: '350px', height: "auto", width: 'auto'}}/>
              <h6 className={`fw-bold my-4`}>{service?.title ?? ''}</h6>
              <p className={`mb-5`}>
                {service?.description ?? ''}
              </p>
            </Col>
            <Col xs={12} md={3} className={`d-none- d-sm-block`}>

              <Card style={{ width: '100%', backgroundColor: '#E6EEFB' }}>
                <Card.Title>
                  <h6 className={`fw-bold mt-3 mx-3`}>Services</h6>
                </Card.Title>
                <ListGroup variant='flush' numbered as='ol' defaultActiveKey={idService}>
                  {serviceData.map((service, index) => (
                      <ServiceSidebarLink key={service.id} href={`${service.id}`} active={service.id == idService}>{service.title}</ServiceSidebarLink>
                  ))}
                </ListGroup>
              </Card>

              {/*<Card style={{ width: '100%' }} className='my-4 service-sidebar-bg'>*/}
              {/*  <Card.Body>*/}
              {/*    <Card.Title>Get quote</Card.Title>*/}
              {/*    <Card.Text>*/}
              {/*      <Form.Control type="text" placeholder="Enter your name" className='service-sidebar-bg' />*/}
              {/*      <Form.Control type="email" placeholder="Enter your email" className='my-3 service-sidebar-bg' />*/}
              {/*      <Form.Control as="textarea" rows={3} placeholder='Enter your message' className='service-sidebar-bg' />*/}
              {/*    </Card.Text>*/}
              {/*    <Button variant='primary'>Submit now</Button>*/}
              {/*  </Card.Body>*/}
              {/*</Card>*/}

              {/*<Card style={{ width: '100%' }} className='my-4 service-sidebar-bg'>*/}
              {/*  <Card.Body>*/}
              {/*    <Card.Title>Company Profile</Card.Title>*/}
              {/*    <Button variant='primary' className='my-2 me-3'>DOWNLOAD <FaFilePdf /></Button>*/}
              {/*    <Button variant='info' className='my-2 text-white'>DOWNLOAD <FaFileWord /></Button>*/}
              {/*  </Card.Body>*/}
              {/*</Card>*/}
            </Col>
          </Row>
        </Container>
      </>
  )
}