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
        "Through this initiative, we tend to target students who are less privileged but have a longing for quality education. These students, who can only make limited use of their hidden potential, will be able to expand on their ability to learn and think.  We approach Government and private schools to ascertain the number of students who are studying on Zakat and donations and can hardly afford books and teachers. The enrolled students will have free access to virtual learning on Parhaicastle which aims to instil concepts that are above the national standard.",
    },
    {
      class : 'card3',
      icon : 'fa fa-500px',
      heading: "Effective",
      description:
        "Online Education enables one to study or teach from anywhere in the world. There is no need to commute from one place to another or follow a rigid schedule. Only simple equipment such as a device and an internet connection is required. Students also have an option to collaborate and learn in groups or have one-one sessions with tutors to discuss a wide range of concepts including those which are beyond the scope of the syllabus.",
    },
  ];
  return(
    <Container className='About_container' fluid>
    <Row>
        <div className='Aboutsection_heading'>
            <h6>Why ParhaiCastle Works</h6>
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
