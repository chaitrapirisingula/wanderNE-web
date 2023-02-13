import React from "react";
import { useNavigate } from "react-router-dom";
import "./Design/Card.css";

function Card( { props } ) {

  let navigate = useNavigate();

  return (
    <div className="card"> 
      <div className="card_body">
        <img className="card_image" src={props.image} alt=""></img>
        <div className="card_info_section">
          <h3 className="card_title">{props.name}</h3>
          <p className="card_description">{props.address.city}, {props.address.state}</p>
        </div>
        <button className="card_button" onClick={() => {navigate("/sites/" + props.name, { state: props });}}>View</button>
      </div>
    </div>
  );
}

export default Card;