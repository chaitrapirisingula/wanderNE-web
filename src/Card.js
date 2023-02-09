import React from "react";
import { useNavigate } from "react-router-dom";

function Card( { props } ) {

  let navigate = useNavigate();

  return (
    <div className="card"> 
        <div className="card_body">
            {/* update this image link */}
            {/* <img className="card_image" src={props.image}></img> */}
            <h3 className="card_title">{props.name}</h3>
            <p className="card_description">{props.address.city}, {props.address.state}</p>
        </div>
        <button className="card_button" onClick={() => {navigate("/sites/" + props.name);}}>View More</button>
    </div>
  );
}

export default Card;