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
          <title>{location.state.Name}</title>
      </Helmet>
      <img className="site_image" src={location.state.Image} alt=""></img>
      <section className="site_body">
        <div className="site_name">
          <h1>{location.state.Name}</h1>
          <button className="card_button" onClick={() => {navigate("/sites");}}>Back</button>
        </div>
        <div className="site_description">
          <p>{location.state.Description}</p>
        </div>
        <div className="site_info">
          <p>{location.state.Hours}</p>
          <a href={"https://" + location.state.Link}>{location.state.Link}</a>
          <p>{location.state.StreetAddress}, {location.state.City}, {location.state.State}, {location.state.PostalCode}</p>
          <p>{location.state.Phone}</p>
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