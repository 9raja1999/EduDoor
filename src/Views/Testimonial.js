import React, { useState } from "react";
import ReactDOM from "react-dom";
import { Container, Row, Col, Toast, Button } from "react-bootstrap";

function Testimonial() {
  const testimonials = [
    {
      quote:
        "My behaviour is addictive functioning in a disease process of toxic co-dependency. I need holistic healing and wellness before I'll accept any responsibility for my actions.",
      image:
        "https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sq-sample29.jpg",
      name: "Mr. Ehsan",
      companyName: "Research Associate(FAST)",
    },
    {
      quote:
        "My behaviour is addictive functioning in a disease process of toxic co-dependency. I need holistic healing and wellness before I'll accept any responsibility for my actions.",
      image:
        "https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sq-sample29.jpg",
      name: "Mr. Ahsan",
      companyName: "Lecturer Karachi University",
    },
    {
      quote:
        "My behaviour is addictive functioning in a disease process of toxic co-dependency. I need holistic healing and wellness before I'll accept any responsibility for my actions.",
      image:
        "https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sq-sample29.jpg",
      name: "Mr. Zeeshan",
      companyName: "Manager Saylani Mass IT",
    },
  ];
  return (
    <Container fluid className="TestimonialContainer">
      <Row>
        <div className="Testimonial_heading">
          <h6>What professional Says</h6>
          <hr />
        </div>
      </Row>
      <Row className='testimonial_Row'>
        {testimonials.map((obj, idx) => {
          return (
            <Col xs={12} md={12} xl={4} className="Testimonial_column">
              <figure class="snip1192">
                <blockquote>{obj.quote}</blockquote>
                <div class="author">
                  <img src={obj.image} alt="sq-sample29" />
                  <h5>
                    {obj.name}
                    <span>{obj.companyName}</span>
                  </h5>
                </div>
              </figure>
            </Col>
          );
        })}
      </Row>
    </Container>
  );
}

export default Testimonial;
