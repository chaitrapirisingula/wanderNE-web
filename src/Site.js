import React from "react";
import { useNavigate, useParams } from "react-router-dom";

function Site() {
  let navigate = useNavigate();
  let { site } = useParams();
  return (
    <div>
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