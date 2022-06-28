import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import PartnerMOU from '../../Assets/PartnerSchools/PartnerSchool.png';
import './style.css';


function PartnerSchools() {
  return (
    <Container fluid className='PartnerSchoolContainer mt-5 mb-5'>
      <Row>
        <Col md={12} xs={12} className="Partner_column">
          <div className="Partner_heading">
            <h6>Our Partner School</h6>
            <hr />
          </div>
        </Col>
        <Col md={6} xs={12} className="Partner_Images_Column">
          <img src={PartnerMOU} width='100%' />
          <div className='partner__about'>
            <h1>MOU with</h1>
            <h1>Public School Korangi
              Adopted by Sindh Schooling System welfare Organization
            </h1>
          </div>
        </Col>
      </Row>
    </Container>
  )
}

export default PartnerSchools
