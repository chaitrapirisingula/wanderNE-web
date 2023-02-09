import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "./App.css";

function Site() {

  let navigate = useNavigate();
  const location = useLocation();
  
  return (
    <div className="App">
      <aside className="sidemenu"></aside>
      THIS IS THE SITE PAGE FOR {location.state.name}!
      <button
        onClick={() => {
          navigate("/sites");
        }}
      >
        {" "}
        Change to sites page
      </button>
    </div>
  );
}

export default Site;