import React from "react";
import ReactDOM from "react-dom";
import { Container, Row, Col } from "react-bootstrap";

import Ebook from "../Assets/ebook.png";
import "../Styles/Style.css";

function Tution() {
  const tutionKeys = [
    { description: "Highly Qualified Tutors" },
    { description: "Peer to Peer learning" },
    { description: "Unlimited time of meeting" },
    { description: "Unlimited Requests" },
    { description: "Schedule of meeting flexible for student" },
  ];
  return (
    <Container fluid style={{}}>
      <Row>
        <Col xs={12} md={5}>
          <div className="tution_pros">
            <h6>Tuition on Request</h6>
            {tutionKeys.map((obj, idx) => {
              return (
                <p>
                  <i className="fa fa-check"></i> {obj.description}
                </p>
              );
            })}
          </div>
        </Col>
        <Col xs={12} md={7} style={{ textAlign: "center" }} className="order-first order-md-last">
          <img
            src={Ebook}
            className=" hover-shadow shadow-4"
            alt="..."
            style={{ maxWidth: "100%" }}
          />
        </Col>
      </Row>
    </Container>
  );
}

export default Tution;
