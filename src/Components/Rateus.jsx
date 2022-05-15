import React from "react";
import ReactDOM from "react-dom";
import ReactStars from "react-rating-stars-component";
// import SweetAlert from "sweetalert2-react";
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import { Modal, Button } from "react-bootstrap";
import "../Styles/Style.css";

function Rateus({ show, setShow }) {
  const [warning, setWarning] = React.useState({
    visibility: "hidden",
    color: "red",
  });
//   const [alert, setAlert] = React.useState(false);

  const [rating, setRating] = React.useState(0);
  const MySwal = withReactContent(Swal)
  const ratingChanged = (newRating) => {
    setRating(newRating);
  };

  const SubmitFeedback = () => {
    if (rating > 0) {
      setShow(false);
      Swal.fire({type:'success',text:'Thanks!! for your valuable feedback'});
    } else {
      setWarning({ ...warning, visibility: "" });
    }
  };
  console.log(rating);
  return (
    <>
      {/* <SweetAlert
        show={alert}
        title="Response submitted"
        text="Thanks for giving us your valuable feeback"
        onConfirm={() => setAlert(false)}
      /> */}
      <Modal
        show={show}
        onHide={() => setShow(false)}
        dialogClassName="modal-90w"
        aria-labelledby="example-custom-modal-styling-title"
        className="myRateusModal"
      >
        <Modal.Header closeButton>
          <Modal.Title
            id="example-custom-modal-styling-title"
            className="RateusHeader"
          >
            <h1>
              Rate <span>Us</span>
            </h1>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="RateusModal">
          <h6>How would you like to rate us?</h6>
          <ReactStars
            count={5}
            onChange={ratingChanged}
            size={44}
            isHalf={false}
            emptyIcon={<i className="far fa-star"></i>}
            halfIcon={<i className="fa fa-star-half-alt"></i>}
            fullIcon={<i className="fa fa-star"></i>}
            activeColor="#ffd700"
          />
          <p style={warning}>Please rate us before submitting</p>
          <Button className="submit" onClick={() => SubmitFeedback()}>
            Submit
          </Button>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default Rateus;
