import {Stack} from "react-bootstrap";
import styled from "@emotion/styled";
import {Button} from "../styled-components";

const PriceSectionTitle = styled.div`
    text-align: left;
    vertical-align: middle;
    font-size: 35px;
    font-family: Archivo;
    letter-spacing: -1%;
    line-height: 60%;
    color: ${props => props.bg === 'white' ? '#1b2e59' : '#FFFFFF'};
    margin-left: 20px;
`

export default function ServicePricing({title, prices, id, bg = 'white'}) {
  return (
    <div className="row row-cols-1 row-cols-sm-2 row-cols-md-4 my-1 pricing-item-info" style={{backgroundColor: bg === 'white' ? '#FFFFFF' : '#266ff2' }}>
      <div className="col align-self-center pt-4 pt-md-0" style={{borderRight: '3px solid #d9e0eb'}}>
          <PriceSectionTitle bg={bg} className='my-2'>{title}</PriceSectionTitle>
      </div>
      <div className="col align-self-center pt-3" style={{borderLeft: '1px solid #d9e0eb'}}>
          <ul className='mx-4' style={{color: bg === 'white' ? '#1b2e59' : '#fff'}}>
              <li>SEO & Branding</li>
              <li>Digital Marketing</li>
              <li>Google Analytics</li>
              <li>Branding Solutions</li>
          </ul>
      </div>
      <div className="col align-self-center pt-3" style={{borderRight: '1px solid #d9e0eb'}}>
          <ul className='mx-4' style={{color: bg === 'white' ? '#1b2e59' : '#fff'}}>
              <li>Cyber Security</li>
              <li>Digital Acounts</li>
              <li>Pay-per-Click</li>
              <li>24/7 Support</li>
          </ul>
      </div>
      <div className="col align-self-center pb-4 pb-md-0" style={{borderLeft: '3px solid #d9e0eb'}}>
          <Button className='mx-3'>$59 PURCHASE</Button>
      </div>
    </div>
  )
}