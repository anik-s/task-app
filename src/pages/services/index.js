import {useEffect, useState} from "react";
import ServiceItem from "../../components/services/ServiceItem";
import ServicePricing from "../../components/services/ServicePricing";
import {Container, Row, Stack} from "react-bootstrap";
import styles from './services.module.css';

import BlackHeader from "../../components/black_header_pages/BlackHeader";
import {ButtonGroup, OutlineButton, ToggleButton} from "../../components/styled-components";
//import http from "../../../http-common";

import { serviceData } from '@/assets/data/serviceData';

export default function Index() {
  //const [services2, setServices2] = useState({asError: false, data: []});
  const [pricingButton, setPricingButton] = useState('1');

  const pricingButtons = [
    { name: 'Yearly', value: '1' },
    { name: 'Monthly', value: '2' },
    { name: 'Daily', value: '3' },
  ];

  // useEffect((() => {
  //   async function fetchServices() {
  //     let data = await http.get("/services");
  //     console.log(data.data);
  //     setServices2(data.data);
  //   }
  //   fetchServices();
  // }), []);

  return (
      <>
        {/* <Header img={serviceImg} title='Our services' subTitle='SOTCOX > our Services' /> */}
        <BlackHeader pageName={"Our services"} backPage={"Our services"}/>
        <Container fluid='lg'>
          <h6 className={`text-center fw-bold my-4 ${styles.services}`}>Our services</h6>
          <h6 className={`text-center fw-bold my-4 ${styles.servicesTitle}`}>IT solutions for your business</h6>
          <Row xs={2} md={4} className='my-5 mx-1 mx-md-5'>
            {serviceData.map((item, i) =>
                <ServiceItem key={item.id} img={item.img} title={item.title} link={`services/${item.id}`} />
            )}
          </Row>
        </Container>
        {/* <div style={{backgroundColor: '#E6EEFB'}}>
          <Container fluid='lg' className='py-5'>
            <div className='text-center'>
              <OutlineButton>pricing plans</OutlineButton>
            </div>
            <h6 className="text-center fw-semibold mt-4 mb-5 pricing-title">IT solutions for your business</h6>
            <div style={{display: 'flex', justifyContent: 'center'}}>
              <ButtonGroup className='mb-4'>
                {pricingButtons.map((button, index) => (
                    <ToggleButton
                        key={index}
                        value={button.value}
                        active={pricingButton === button.value}
                        onClick={(e) => setPricingButton(e.currentTarget.value)}
                    >
                      {button.name}
                    </ToggleButton>
                ))}
              </ButtonGroup>
            </div>
            <Stack gap={1}>
              <ServicePricing title='Basic' prices={['aaaa', 'bbbb', 'ccccc']} id={1} />
              <ServicePricing title='Advanced' prices={['aaaa', 'bbbb', 'ccccc']} id={1} bg='blue' />
              <ServicePricing title='Pro' prices={['aaaa', 'bbbb', 'ccccc']} id={1} />
            </Stack>
          </Container>
        </div> */}
      </>
  )
}