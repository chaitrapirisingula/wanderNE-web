import React from "react";
import { useNavigate } from "react-router-dom";
import "./Card.css"

function Card( { props } ) {

  let navigate = useNavigate();

  return (
    <div className="card"> 
        <div className="card_body">
            <img className="card_image" src={props.image} alt=""></img>
            <h3 className="card_title">{props.name}</h3>
            <p className="card_description">{props.address.city}, {props.address.state}</p>
        </div>
        <button className="card_button" onClick={() => {navigate("/sites/" + props.name, { state: props });}}>View More</button>
    </div>
  );
}

export default Card;