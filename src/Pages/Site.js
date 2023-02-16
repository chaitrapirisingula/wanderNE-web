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
          <title>{location.state.Name}</title>
      </Helmet>
      {location.state.Image ? <img className="site_image" src={location.state.Image} alt={location.state.Name}></img> : 
        <img className="site_image" src={WanderNebraskaLogo} alt={location.state.Name}></img>}
      <section className="site_body">
        <div className="site_name">
          <h1>{location.state.Name}</h1>
          <p>{location.state.Hours}</p>
          {location.state.Contact ? <div className="site_link"><CgProfile />{location.state.Contact}</div> : ""}
          {location.state.ContactInformation ? <div className="site_link"><BiMessageCheck />{location.state.ContactInformation}</div> : ""}
        </div>
        <div className="site_description">
          <p>{location.state.Description}</p>
        </div>
        <div className="site_name">
          <h4>Contact</h4>
          <a className="site_link" href={"https://" + location.state.Link}><FaGlobe />Website</a>
          <div className="site_link"><FaPhone />{location.state.Phone}</div>
          <a className="site_link" href={"https://" + location.state.SocialMedia}><FaFacebook />Facebook</a>
        </div>
        <div className="site_description">
          <h4>Attractions</h4>
          <p>{location.state.Attractions}</p>
        </div>
        <div className="site_name">
          <p>{location.state.StreetAddress}, {location.state.City} {location.state.State}, {location.state.PostalCode}</p>
          <iframe title="map" className="site_map" src={`https://maps.google.com/maps?q=
          ${location.state.Name + " " + location.state.City + " " + location.state.State}
              &t=&z=13&ie=UTF8&iwloc=&output=embed`}></iframe>
        </div>
        <div className="site_description">
          <h4>Events</h4>
          <p>{location.state.Events}</p>
        </div>
      </section>
    </div>
  );
}

export default Site;