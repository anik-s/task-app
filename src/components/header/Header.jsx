import {Card, Col, Container, Row} from "react-bootstrap";
import './header.css';

export default function Header({title, subTitle, img}) {
  return (
    <Container fluid style={{backgroundColor: '#171719'}}>
      <Card className="bg-dark text-white">
        <Card.Img src={img} height={300} alt={title} />
        <Card.ImgOverlay>
          <Card.Title>{title}</Card.Title>
          <Card.Text>
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This content is a little bit longer.
          </Card.Text>
          <Card.Text>Last updated 3 mins ago</Card.Text>
        </Card.ImgOverlay>
      </Card>
      {/*
      <Row xs={1} sm={2} md={2} style={{height: '250px'}}
           className='mx-sm-2 mx-md-5 px-md-5 align-content-center'>
        <Col className='mb-sm-0 mb-4'>
          <h6 className='header-title'>{title}</h6>
          <h6 className='header-sub-title'>{subTitle}</h6>
        </Col>
        <Col className=''>
          <div className="ellipse-8-1" />
        </Col>
      </Row>
      */}
    </Container>
  )
}