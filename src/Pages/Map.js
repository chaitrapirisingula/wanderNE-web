import React from "react";
import { useState } from "react";
import { Helmet } from "react-helmet";
import ImageMapper from 'react-img-mapper';
import RegionsMap from "../Images/RegionsMap.png";
import "../Design/Map.css";

function Map() {

    const MAP = {
        name: "nebraska-regions",
        areas: [
          { name: "The Panhandle", shape: "circle", coords: [124,48,20], preFillColor: "clear" },
          { name: "The Sandhills", shape: "circle", coords: [254, 62, 20], preFillColor: "clear" },
          { name: "South West", shape: "circle", coords: [224, 198, 20], preFillColor: "clear" },
          { name: "South Central", shape: "circle", coords: [364, 218, 20], preFillColor: "clear" },
          { name: "North East", shape: "circle", coords: [454, 68, 20], preFillColor: "clear" },
          { name: "South East", shape: "circle", coords: [544, 204, 20], preFillColor: "clear" },
          { name: "Metro", shape: "circle", coords: [600, 168, 20], preFillColor: "clear" }
        ]
    }

    const [currArea, setCurrArea] = useState({});

    function clicked(area) {
        // maybe go to page for it 
        setCurrArea(area)
    }

    function enterArea(area) {
        setCurrArea(area)
    }

    function clickedOutside(evt) {
        // determine when to clear
        setCurrArea({})
    }
  
    return (
        <div className="App">
            <Helmet>
                <meta charSet="utf-8" />
                <title>Regions</title>
            </Helmet>
            <h1>Regions</h1>
            <div className="map">
                <div className="map_container">
                    <ImageMapper src={RegionsMap} map={MAP} width={700} height={300}
                        onClick={area => clicked(area)}
                        onMouseEnter={area => enterArea(area)}
                        onImageClick={evt => clickedOutside(evt)}
                    />
                </div>
                <div className="region_info">
                    {currArea.name}
                </div>
            </div>
        </div>
    );
}

export default Map;