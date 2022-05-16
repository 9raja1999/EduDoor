import React, { useState } from "react";
import ReactDOM from "react-dom";
import {Link, useNavigate} from 'react-router-dom'
import { Container, Row, Col, Button} from "react-bootstrap";
import school from "../Assets/schools.png";

import "../Styles/Style.css";

function Collaboration() {
  const [userAgreement, setUserAgreement] = React.useState('');
  const navigate = useNavigate();
  const gotoCollaboration = () => {
    setUserAgreement('bic');
    setTimeout(() => {
      navigate(`/Agreement`)
    }, 1000);
  }

  const collaborationContainer = {
    marginTop : '5%',
    marginBottom : '5%'
  }
  console.log(userAgreement);
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
          {/* <Link to={`/Agreement/${userAgreement}`}> */}
            <Button className='Collaborate_btn' onClick={()=>gotoCollaboration()}>Want to <span>collaborate</span> ?</Button>
          {/* </Link> */}
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
