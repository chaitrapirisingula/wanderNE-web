import React from "react";
import sites from "./sites-info.json";
import Card from "./Card";
import { Helmet } from "react-helmet";
import "./Design/App.css";

function AllSites() {
    return (
        <div className="App">
            <Helmet>
                <meta charSet="utf-8" />
                <title>Sites</title>
            </Helmet>
            <h1>Sites</h1>
            <div className="sites_wrapper">
                {sites.map((site)=><Card props={site} />)}
            </div>
        </div>
    );
}

export default AllSites;