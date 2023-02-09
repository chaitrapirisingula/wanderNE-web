import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./App.css";

function Site() {
  let navigate = useNavigate();
  let { site } = useParams();
  return (
    <div className="App">
      <aside className="sidemenu"></aside>
      THIS IS THE SITE PAGE FOR {site}!
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