import React from "react";
import { useNavigate } from "react-router-dom";
import "./App.css"

function AllSites() {
    let navigate = useNavigate();

    return (
        <div className="App">
        <p>THIS IS THE SITES PAGE</p>
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