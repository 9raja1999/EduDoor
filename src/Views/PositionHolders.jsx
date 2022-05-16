import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import student1 from "../Assets/position_holders/student1.jpg";
import "../Styles/Style.css";

function PositionHolders() {
  const [students, setStudents] = React.useState([
    {
      image: student1,
      name: "Ayesha",
      board: "Agha Khan",
      position: "1st Position",
    },
    {
      image: student1,
      name: "Ayesha",
      board: "Agha Khan",
      position: "1st Position",
    },
    {
      image: student1,
      name: "Ayesha",
      board: "Agha Khan",
      position: "1st Position",
    },
    {
      image: student1,
      name: "Ayesha",
      board: "Agha Khan",
      position: "1st Position",
    },
    {
      image: student1,
      name: "Ayesha",
      board: "Agha Khan",
      position: "1st Position",
    },
    {
      image: student1,
      name: "Ayesha",
      board: "Agha Khan",
      position: "1st Position",
    },
    {
      image: student1,
      name: "Ayesha",
      board: "Agha Khan",
      position: "1st Position",
    },
    {
      image: student1,
      name: "Ayesha",
      board: "Agha Khan",
      position: "1st Position",
    },
    {
      image: student1,
      name: "Ayesha",
      board: "Agha Khan",
      position: "1st Position",
    },
    {
      image: student1,
      name: "Ayesha",
      board: "Agha Khan",
      position: "1st Position",
    },
  ]);

  return (
    <Container fluid className='PositionHolderContainer mt-5 mb-5'>
      <Row>
        <Col md={12} xs={12} className="Position_column">
          <div className="Position_heading">
            <h6>Our Position Holders</h6>
            <hr />
          </div>
        </Col>
        <Col md={6} xs={12} className="PositionHolder_Images_Column">
          {students.map((obj, idx) => {
            return (
              <div class="containerStudent">
                <img
                  src={obj.image}
                  alt="Avatar"
                  className="image"
                  style={{width:"100%"}}
                />
                <div className="middle">
                  <div className="text">{obj.name}<br />{obj.position}</div>
                </div>
              </div>
            );
          })}
        </Col>
      </Row>
    </Container>
  );
}

export default PositionHolders;
