import React from 'react';
import Navigation from '../Components/Navigation';
import GetInTouch from '../Views/GetInTouch';
import Footer from '../Views/Footer';
import {Row,Col,Container} from 'react-bootstrap';
import Education from '../Assets/Education.png';

function Company(){
    return (
      <>
        <Navigation />
        <Container fluid className="companyAbout">
          <Row>
            <Col xs={12} md={12} lg={6}>
              <Container fluid className="mt-5">
                <h1>
                  About <span>EduDoor</span>
                </h1>
                <p>
                  The concept “Education at your doorstep” which can bring
                  revolution in education system of Pakistan and can be remotely
                  accessible to every student who wish to study. Connecting
                  Seekers is all about empowering academics – we are widely
                  known as providing quality online education from Class 7 to
                  10. We hold growing data base of Millions of teaching
                  materials and subject oriented books. We understand the growth
                  and development of any country depends on the quality of
                  education system set for young ones in academic organization.
                  Our Team focuses on increasing Education standard and it will
                  be possible only when our Teachers are well qualified and
                  having good subject knowledge. We are committed to connect
                  Suitable and Deserving candidate with wide range of
                  specialization in academic organization to empower and
                  strengthening Education. We understand nothing can be more
                  important than strengthening education. We are committed for
                  quality performance and we assure high level of integrity and
                  speed in the assignments we undertake. Our mission is to lead
                  in creation and delivery of Innovative workforce solution to
                  enable our academic institutions to create scholar and provide
                  quality education in Every Corner of the country and having
                  major contribution in Increasing Literacy Level of Pakistan.
                  We are here to help education Institution in creating
                  outstanding Educational Environment which promote learning,
                  Educational excellence and character development. We may have
                  a Positive Impacts on millions of people every day, we are
                  conscious on our role. Helping Teachers, Parents, Students and
                  all academic institution is our common purpose and the way we
                  contribute make us feel proud that nothing can be more than
                  strengthening education.
                </p>
              </Container>
            </Col>
            <Col xs={12} md={12} lg={6}>
              <Container fluid className="mt-5">
                <img src={Education} width="100%" style={{borderRadius:'15px'}}/>
              </Container>
            </Col>
            <Col xs={12} md={12} lg={12}>
              <Container fluid className="mb-5">
                <p>
                  The Concept of traditional education has changed radically
                  within the last couple of years. Being physically present in a
                  classroom is not the only learning option anymore – not with
                  the rise of the internet and new technologies, at least.
                  Nowadays you have access to a quality education whenever and
                  wherever you want, as long as you can get online. We are now
                  entering a new era – the revolution of online education.
                  Online education enables you to study or teach from anywhere
                  in the world. This means there’s no need to commute from one
                  place to another or follow a rigid schedule. The virtual
                  classroom is also available anywhere there’s an internet
                  connection. There is often access to very diverse material
                  such as videos, photos, and e-Books online as well, and
                  quality tutors can also integrate other formats like forums or
                  discussions to improve their lessons. And this extra content
                  is available at any moment from anywhere, which will offer
                  student a more dynamic and tailor-made education. Through this
                  initiative, we tend to target students who are less privileged
                  but have ambitions to get quality education. Initially, we
                  would approach Government and Private Schools to ascertain the
                  number of students who are studying on Zakat and Donation and
                  can hardly afford books and get enrolled themselves for any
                  tutorials in order to accommodate them through this website
                </p>
              </Container>
            </Col>
          </Row>
        </Container>
        <GetInTouch />
        <Footer />
      </>
    );
}

export default Company;