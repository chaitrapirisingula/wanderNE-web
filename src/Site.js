import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";
import "./Design/Site.css";
import "./Design/Card.css";

function Site() {

  let navigate = useNavigate();

  const location = useLocation();
  
  return (
    <div className="site_main">
      <Helmet>
          <meta charSet="utf-8" />
          <title>{location.state.name}</title>
      </Helmet>
      <img className="site_image" src={location.state.image} alt=""></img>
      <section className="site_body">
        <div className="site_name">
          <h1>{location.state.name}</h1>
          <button className="card_button" onClick={() => {navigate("/sites");}}>Back</button>
        </div>
        <div className="site_description">
          <p>{location.state.description}</p>
        </div>
        <div className="site_info">
          <p>{location.state.hours}</p>
          <a href={"https://" + location.state.link}>{location.state.link}</a>
          <p>{location.state.address.streetAddress}, {location.state.address.city}, {location.state.address.state}, {location.state.address.postalCode}</p>
          <p>{location.state.phone}</p>
        </div>
        <div className="site_contact_info">
          <p>Contact</p>
        </div>
        {/* <iframe title="map" className="site_map" src={`https://maps.google.com/maps?q=${location.state.name}
          &t=&z=13&ie=UTF8&iwloc=&output=embed`}></iframe> */}
      </section>
    </div>
  );
}

export default Site;