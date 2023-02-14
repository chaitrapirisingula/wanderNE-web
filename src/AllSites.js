import React from "react";
import Card from "./Card";
import { Helmet } from "react-helmet";
import "./Design/App.css";

function AllSites( { data } ) {
    return (
        <div className="App">
            <Helmet>
                <meta charSet="utf-8" />
                <title>Sites</title>
            </Helmet>
            <h1>Sites</h1>
            <div className="sites_wrapper">
                {data.map((site)=><Card props={site} />)}
            </div>
        </div>
    );
}

export default AllSites;