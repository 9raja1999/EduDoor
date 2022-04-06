import React from 'react';
import Navigation from '../Components/Navigation';
import Slider from '../Components/Slider';
import About from '../Views/About';
import Ebooks from '../Views/Ebooks';
import Tution from '../Views/Tution';

import {Col,Container,Row} from 'react-bootstrap'
import '../Styles/Style.css';

function Home(){
    return (
      <div>
        <Navigation />
        <Slider />
        <About />
        <Ebooks />
        <Tution />
      </div>
    );
}

export default Home;