import React from "react";
import { useNavigate } from "react-router-dom";

function AllSites() {
    let navigate = useNavigate();

    return (
        <div>
        THIS IS THE SITES PAGE
        <button
            onClick={() => {
            navigate("/sites/:name");
            }}
        >
            {" "}
            Site
        </button>
        </div>
    );
}

export default AllSites;