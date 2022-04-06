import React from "react";
import {Carousel, Button} from 'react-bootstrap';
import hero from '../Assets/hero1.jpg';

import '../Styles/Style.css';

function Slider() {
  return (
          <Carousel id='Carousel'>
            <Carousel.Item>
              <img className="d-block w-100" src={hero} alt="First slide" />
              <Carousel.Caption id='Caption'>
                <h3>Reach every student at their level</h3>
                <p>
                    Deliver differentiated practice aligned to ELA and math standards
                </p>
                <Button variant='custom' id='watchVideo_btn'><i className="fa fa-play"></i>Meet Edudoor</Button>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
  );
}

export default Slider;
