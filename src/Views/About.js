import React from "react";
import ReactDOM from "react-dom";
import { Card, Col, Container, Row } from "react-bootstrap";
import "../Styles/Style.css";

function About() {
  const iconbox = [
    { 
      class : 'card1',  
      icon : 'fa fa-500px',
      heading: "Tailor made education",
      description:
        "There is often access to very diverse material such as videos, photos, and e-Books online as well, and quality tutors  can also integrate other formats like forums or discussions to improve their lessons. And this extra content is available at any moment from anywhere, which will offer student a more dynamic and tailor-made education.",
    },
    {
      class : 'card2',
      icon : 'fa fa-500px',
      heading: "Target Students who are less priviledge",
      description:
        "Through this initiative, we tend to target students who are less privileged but have ambitions to get quality education. Initially, we would approach Government and Private Schools to ascertain the number of students who are studying  on Zakat and Donation and can hardly afford books and get enrolled themselves for any tutorials in order to accommodate them through this website",
    },
    {
      class : 'card3',
      icon : 'fa fa-500px',
      heading: "Effective",
      description:
        "Online education enables you to study or teach from anywhere in the world. This means there’s no need to commute from one place to another or follow a rigid schedule. The virtual classroom is also available anywhere there’s an internet connection",
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
                      
                      <Card.Text id='descrip'>
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
