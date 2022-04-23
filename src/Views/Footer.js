import React from "react";
import {Row,Container,Col} from 'react-bootstrap';

const Footer = () => {
    return(
        
          <Container fluid style={{textAlign:'center', backgroundColor:'#072A52',color: 'white',paddingTop:'2%',paddingBottom:'2%',fontWeight:'bold'}}>
              <Row>
                  <Col md={12} xs={12}>
                    <hr />
                    <div className="copyright"> Copyright 2022 | All Rights Reserved by Edudoor Pvt. Ltd.</div>
                  </Col>
              </Row>
          </Container>
      
    )
}

export default Footer;