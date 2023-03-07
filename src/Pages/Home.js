import React from "react";
import { Helmet } from "react-helmet";
import HomePageImage from "../Images/HomePageImage.png";
import '../Design/App.css';
import '../Design/Home.css';
import "@fontsource/oswald";

function Home() {
  return (
    <div className="Home">
      <Helmet>
          <meta charSet="utf-8" />
          <title>Home</title>
      </Helmet>
      <div className = "head_text">
        <div className = "head_image">
        <img src={HomePageImage} alt="Wander Nebraska" className="home_image"/>
        </div>
        <div className="center_text">
          <div className="title">
            <p>Wander Nebraska</p>
          </div>
        </div>
      </div>
      <div className="home_overview">
        <div className="mission_statement">
          <p>Preserving and celebrating Nebraska's rich history.</p>
        </div>
        <div className="about">
          <h1>About</h1>
          explain program
        </div>
        <div className="slideshow">
          <h1>Popular Sites</h1>
          add slideshow of some sort
        </div>
        <div className="about">
          <h1>Interested?</h1>
          add contact info and form to include your site and donate info
        </div>
      </div>
      <iframe title="map" 
            src="https://www.google.com/maps/d/u/2/embed?mid=1-uHcFfG-9kz3G_CiX6NAoxrS4mlAfyE&ehbc=2E312F" 
              width="500rem" height="380rem"></iframe>
    </div>
  );
}

export default Home;