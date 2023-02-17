import React from "react";
import { useLocation } from "react-router-dom";
import { Helmet } from "react-helmet";
import { FaFacebook, FaGlobe, FaPhone } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { BiMessageCheck } from "react-icons/bi";
import WanderNebraskaLogo from "../Images/WanderNebraskaLogo.png";
import "../Design/Site.css";
import "../Design/Card.css";

function Site() {

  const location = useLocation();
  
  return (
    <div className="site_main">
      <Helmet>
          <meta charSet="utf-8" />
          <title>{location.state.name}</title>
      </Helmet>
      {location.state.image ? <img className="site_image" src={location.state.image} alt={location.state.name}></img> : 
        <img className="site_image" src={WanderNebraskaLogo} alt={location.state.name}></img>}
      <section className="site_body">
        <div className="site_name">
          <h1>{location.state.name}</h1>
          <p>{location.state.hours}</p>
          {location.state.contact ? <div className="site_link"><CgProfile />{location.state.contact}</div> : ""}
          {location.state.contactInformation ? <div className="site_link"><BiMessageCheck />{location.state.contactInformation}</div> : ""}
        </div>
        <div className="site_description">
          <p>{location.state.description}</p>
        </div>
        <div className="site_name">
          <h4>Contact</h4>
          <a className="site_link" href={"https://" + location.state.link}><FaGlobe />Website</a>
          <div className="site_link"><FaPhone />{location.state.phone}</div>
          <a className="site_link" href={"https://" + location.state.socialMedia}><FaFacebook />Facebook</a>
        </div>
        {location.state.attractions ? <div className="site_description">
          <h4>Nearby Attractions</h4>
          {location.state.attractions.map((attraction)=> <p>{attraction}</p>)}
        </div> : ""}
        <div className="site_name">
          <p>{location.state.streetAddress}, {location.state.city} {location.state.state}, {location.state.postalCode}</p>
          <iframe title="map" className="site_map" src={`https://maps.google.com/maps?q=
          ${location.state.name + " " + location.state.city + " " + location.state.state}
              &t=&z=13&ie=UTF8&iwloc=&output=embed`}></iframe>
        </div>
        {location.state.events ? <div className="site_description">
          <h4>Events</h4>
          {location.state.events.map((event)=> <p>{event}</p>)}
        </div> : ""}
      </section>
    </div>
  );
}

export default Site;