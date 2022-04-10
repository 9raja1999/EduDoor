import React from 'react';
import Navigation from '../Components/Navigation';
import Slider from '../Components/Slider';
import About from '../Views/About';
import Ebooks from '../Views/Ebooks';
import Tution from '../Views/Tution';
import Testimonial from '../Views/Testimonial';
import Collaboration from '../Views/Collaboration';
import Footer from '../Views/Footer';

import '../Styles/Style.css';

function Home(){
    return (
      <div>
        <Navigation />
        <Slider />
        <About />
        <Ebooks />
        <Tution />
        <Testimonial />
        <Collaboration />
        <Footer />
      </div>
    );
}

export default Home;