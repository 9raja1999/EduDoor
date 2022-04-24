import React from "react";
import ReactDOM from "react-dom";
import { Container, Row, Col } from "react-bootstrap";

import Ebook from '../Assets/ebook.png';
import '../Styles/Style.css'

function Ebooks() {
  const ebookKeys = [
        {description :'One device many books'},
        {description :'Accessible Everywhere'},
        {description :'Easy on the eyes'},
        {description :'Affordable in the long run'}
    ] 
  return (
    <Container fluid className="ebookContainer">
      <Row>
        <Col xs={12} md={7} style={{ textAlign: "center"}}>
          <img
            src={Ebook}
            className=" hover-shadow shadow-4"
            alt="..."
            style={{ maxWidth: "100%" }}
          />
        </Col>
        <Col xs={12} md={5}>
          <div className="ebooks_pros">
            <h6>Ebooks</h6>
            {ebookKeys.map((obj, idx) => {
              return (
                <p>
                  <i className="fa fa-check"></i> {obj.description}
                </p>
              );
            })}
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Ebooks;
