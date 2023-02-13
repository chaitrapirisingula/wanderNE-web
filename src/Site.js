import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";
import "./App.css";

function Site() {

  let navigate = useNavigate();

  const location = useLocation();
  
  return (
    <div className="App">
      <Helmet>
          <meta charSet="utf-8" />
          <title>{location.state.name}</title>
      </Helmet>
      <div className = "head_text">
        <div className = "head_image">
          <img className="site_image" src={location.state.image} alt=""></img>
        </div>
        <div class='text_on_image'>
          <h1>{location.state.name}</h1>
        </div>
      </div>
      <section className="site_body">
        <p>{location.state.hours}</p>
        <div className="site_info">
          <p>{location.state.phone}</p>
          <a href={"https://" + location.state.link}>{location.state.link}</a>
          <p>{location.state.address.streetAddress}, {location.state.address.city}, {location.state.address.state}, {location.state.address.postalCode}</p>
        </div>
        <div className="site_description">
          <p>{location.state.description}</p>
          <iframe title="map" className="site_map" src={`https://maps.google.com/maps?q=${location.state.name}
          &t=&z=13&ie=UTF8&iwloc=&output=embed`}></iframe>
        </div>
      </section>
    </div>
  );
}

export default Site;