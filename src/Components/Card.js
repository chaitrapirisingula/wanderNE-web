import React from "react";
import { useNavigate } from "react-router-dom";
import WanderDefaultImage from "../Images/WanderDefaultImage.png";
import "../Design/Card.css";

function Card( { props } ) {

  let navigate = useNavigate();

  return (
    <div className={props.region ? props.region.replace(/ /g, '') : "card"}> 
      <div className="card_body">
        {props.image ? <img className="card_image" src={props.image} alt={props.name}></img> : 
        <img className="card_image" src={WanderDefaultImage} alt={props.name}></img>}
        <div className="card_info_section">
          <h3 className="card_title">{props.name}</h3>
          <p className="card_description">{props.city}, {props.state}</p>
        </div>
        <button className="card_button" onClick={() => {navigate("/" + props.name, { state: props });window.scrollTo(0, 0);}}>View</button>
      </div>
    </div>
  );
}

export default Card;