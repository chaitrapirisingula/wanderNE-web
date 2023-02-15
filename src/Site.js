import React from "react";
import { useLocation } from "react-router-dom";
import { Helmet } from "react-helmet";
import WanderNebraskaLogo from "./WanderNebraskaLogo.png";
import "./Design/Site.css";
import "./Design/Card.css";

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
        </div>
        <div className="site_description">
          <p>{location.state.Description}</p>
        </div>
        <div className="site_name">
          <a href={"https://" + location.state.Link}>{location.state.Link}</a>
          <p>{location.state.Phone}</p>
          <p>{location.state.SocialMedia}</p>
        </div>
        <div className="site_description">
          <h4>Contact</h4>
          <p>{location.state.Contact}</p>
          <p>{location.state.ContactInformation}</p>
        </div>
        <div className="site_name">
          <h4>Events & Attractions</h4>
          <p>{location.state.Events}</p>
          <p>{location.state.Attractions}</p>
        </div>
        <div className="site_description">
          <p>{location.state.StreetAddress}, {location.state.City} {location.state.State}, {location.state.PostalCode}</p>
          <iframe title="map" className="site_map" src={`https://maps.google.com/maps?q=
          ${location.state.Name + " " + location.state.City + " " + location.state.State}
              &t=&z=13&ie=UTF8&iwloc=&output=embed`}></iframe>
        </div>
      </section>
    </div>
  );
}

export default Site;