import React from "react";
import {Carousel, Button} from 'react-bootstrap';
import hero1 from '../Assets/slider/1.png';
import hero2 from '../Assets/slider/2.jpg';
import hero3 from '../Assets/slider/3.jpg';

import '../Styles/Style.css';

function Slider() {
  return (
          <Carousel id='Carousel' controls={false} indicators={true}>
            <Carousel.Item>
              <img className="d-block w-100" src={hero1} alt="First slide" />
              <Carousel.Caption id='Caption'>
                <h3>Reach every student at their level</h3>
                <p>
                    Deliver differentiated practice aligned to ELA and math standards
                </p>
                <Button variant='custom' id='watchVideo_btn'><i className="fa fa-play"></i> Meet Edudoor</Button>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img className="d-block w-100" src={hero2} alt="First slide" />
              <Carousel.Caption id='Caption'>
                <h3>Reach every student at their level</h3>
                <p>
                    Deliver differentiated practice aligned to ELA and math standards
                </p>
                <Button variant='custom' id='watchVideo_btn'><i className="fa fa-play"></i> Meet Edudoor</Button>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img className="d-block w-100" src={hero3} alt="First slide" />
              <Carousel.Caption id='Caption'>
                <h3>Reach every student at their level</h3>
                <p>
                    Deliver differentiated practice aligned to ELA and math standards
                </p>
                <Button variant='custom' id='watchVideo_btn'><i className="fa fa-play"></i> Meet Edudoor</Button>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
  );
}

export default Slider;
