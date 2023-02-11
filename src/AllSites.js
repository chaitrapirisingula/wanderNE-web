import React from "react";
import sites from "./sites-info.json";
import Card from "./Card";
import "./App.css";

function AllSites() {
    return (
        <div className="App">
            <h1>Sites</h1>
            <div className="wrapper">
                {sites.map((site)=><Card props={site} />)}
            </div>
        </div>
    );
}

export default AllSites;