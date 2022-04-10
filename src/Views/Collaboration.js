import React, { useState } from "react";
import ReactDOM from "react-dom";
import { Container, Row, Col, ToastContainer, Toast } from "react-bootstrap";
import school from "../Assets/schools.png";

import "../Styles/Style.css";

function Collaboration() {
  const collaborationContainer = {
    marginTop : '5%',
    marginBottom : '5%'
  }
  return (
    <Container fluid style={collaborationContainer}>
      {/* <Row>
        <div className="PositionHolder_heading">
          <h6>News</h6>
          <hr />
        </div>
      </Row> */}
      <Row>
        <Col md={5} xs={12} className='Collaboration_column'>
        <div className="Collaboration_heading">
          <h6>Collaboration & Alliances</h6>
          <hr />
        </div>
        </Col>
        <Col md={7} xs={12} className='Collaboration_column2'>
        <div className="Collaboration_images">
          <div className="images">
            <img src={school} />
          </div>
          <div className="images">
          <img src={school} />
          </div>
          <div className="images">
          <img src={school} />
          </div>
        </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Collaboration;
