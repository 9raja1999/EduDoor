import React from "react";
import ReactDOM from "react-dom";
import { Card, Col, Container, Row } from "react-bootstrap";
import "../Styles/Style.css";

function About() {
  const iconbox = [
    { 
      class : 'card1',  
      icon : 'fa fa-500px',
      heading: "Differentiated",
      description:
        "Continuously adapts for student practice in math or ELA activities, while offering teachers the ability to focus practice on grade-level standards.",
    },
    {
      class : 'card2',
      icon : 'fa fa-500px',
      heading: "Engaging",
      description:
        "Continuously adapts for student practice in math or ELA activities, while offering teachers the ability to focus practice on grade-level standards.",
    },
    {
      class : 'card3',
      icon : 'fa fa-500px',
      heading: "Effective",
      description:
        "Continuously adapts for student practice in math or ELA activities, while offering teachers the ability to focus practice on grade-level standards.",
    },
  ];
  return(
    <Container className='About_container' fluid>
    <Row>
        <div className='Aboutsection_heading'>
            <h6>Why Edudoor Works</h6>
            <p>Student-centered. Teacher-driven.</p>
        </div>
    </Row>
    <Row>
        {
            iconbox.map((obj, idx) => {
                return (
                <Col xs={12} md={12} xl={4}>
                  <Card id={obj.class} style={{ width: "18rem", textAlign:'center' }}>
                    <Card.Body>
                      <Card.Title><i className={obj.icon}></i></Card.Title>
                      <Card.Title id='title'>{obj.heading}</Card.Title>
                      
                      <Card.Text>
                        {obj.description}
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>  
                );
                })
        }
    </Row>
  </Container>
  )
}

export default About;
