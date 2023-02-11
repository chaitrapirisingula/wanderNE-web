import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "./App.css";

function Site() {

  let navigate = useNavigate();
  const location = useLocation();
  
  return (
    <div className="App">
      <h1>{location.state.name}</h1>
      <button className="back_button" onClick={() => {navigate("/sites");}}>Back to Sites</button>
      <p>{location.state.hours}</p>
      <div className="site_info">
        <p>{location.state.phone}</p>
        <p>{location.state.link}</p>
        <p>{location.state.address.streetAddress}, {location.state.address.city}, {location.state.address.state}, {location.state.address.postalCode}</p>
      </div>
      <div className="site_description">
        <img className="site_image" src={location.state.image} alt=""></img>
        <p>{location.state.description}</p>
        <iframe className="map" src={`https://maps.google.com/maps?q=${location.state.name}
        &t=&z=13&ie=UTF8&iwloc=&output=embed`}></iframe>
      </div>
    </div>
  );
}

export default Site;