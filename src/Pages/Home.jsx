import React from 'react';
import Navigation from '../Components/Navigation';
import Slider from '../Components/Slider';
import About from '../Views/About';
import Ebooks from '../Views/Ebooks';
import Tution from '../Views/Tution';
import VideoLectures from '../Views/VideoLectures';
import Testimonial from '../Views/Testimonial';
import Collaboration from '../Views/Collaboration';
import GetInTouch from '../Views/GetInTouch';
import Footer from '../Views/Footer';

import '../Styles/Style.css';

function Home(){
    return (
      <div>
        <Navigation />
        <Slider />
        <About />
        <div className='sectionsHolder'>
          <Ebooks />
          <Tution />
          <VideoLectures />
        </div>
        <Testimonial />
        <Collaboration />
        <GetInTouch />
        <Footer />
      </div>
    );
}

export default Home;