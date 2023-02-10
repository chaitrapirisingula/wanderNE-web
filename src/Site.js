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
        <p>{location.state.address.city}</p>
      </div>
      <div className="site_description">
        <p>{location.state.description}</p>
        <img className="site_image" src={location.state.image} alt=""></img>
      </div>
    </div>
  );
}

export default Site;