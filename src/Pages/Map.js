import React from "react";
import { Helmet } from "react-helmet";
import '../Design/App.css';

function Map() {
    return (
        <div className="App">
            <Helmet>
                <meta charSet="utf-8" />
                <title>Map</title>
            </Helmet>
            <h1>Map</h1>
            <iframe title="map" src="https://www.google.com/maps/d/u/2/embed?mid=1-uHcFfG-9kz3G_CiX6NAoxrS4mlAfyE&ehbc=2E312F" 
            width="700rem" height="370rem"></iframe>
        </div>
    );
}

export default Map;