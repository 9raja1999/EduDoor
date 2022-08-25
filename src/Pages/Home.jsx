import React, { useEffect, useState } from "react";
import Navigation from "../Components/Navigation";
import Slider from "../Components/Slider";
import About from "../Views/About";
import Ebooks from "../Views/Ebooks";
import Tution from "../Views/Tution";
import VideoLectures from "../Views/VideoLectures";
import Testimonial from "../Views/Testimonial";
import Collaboration from "../Views/Collaboration";
import DonateNow from "../Views/DonateNow";
import GetInTouch from "../Views/GetInTouch";
import Footer from "../Views/Footer";
import PositionHolders from "../Views/PositionHolders";
import PartnerSchools from '../Views/Partner Schools/PartnerSchools';
import Paramount from "../Views/ParamountCollaboration.jsx/Paramount";
import Images from "../Views/GridImages/Images";
import DataTable from "../Views/Books_delivered_table/DataTable";
import Rateus from "../Components/Rateus";


import { Modal } from 'react-bootstrap'



import "../Styles/Style.css";


function Home() {
  const [show, setShow] = React.useState(false);


  useEffect(() => {
    setTimeout(() => {
      setShow(true)
    }, 5000)
  }, [])

  return (
    <div>
      <Rateus
        show={show}
        setShow={setShow}
      />
      <Navigation />
      <Slider />
      <About />
      <div className="sectionsHolder">
        <Ebooks />
        <Tution />
        <VideoLectures />
      </div>
      <Testimonial />
      <Collaboration />
      {/* <PositionHolders /> */}
      <PartnerSchools />
      <Paramount />
      <DataTable />
      <Images />
      <DonateNow />
      <GetInTouch />
      <Footer />
    </div>
  );
}

export default Home;
