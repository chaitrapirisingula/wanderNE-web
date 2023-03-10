import React from "react";
import { useState } from "react";
import { Helmet } from "react-helmet";
import ImageMapper from 'react-img-mapper';
import RegionsMap from "../Images/RegionsMap.png";
import Card from "../Components/Card";
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

    const temp = [
        {
            "name": "Legacy of the Plains Museum",
            "hours": "Monday thru Saturday, 9:00 am to 5 pm, Sunday 1:00 pm to 5 pm",
            "phone": "402-575-7472",
            "link": "legacyoftheplains.org",
            "description": "Located on the Oregon Trail, the Legacy of the Plains Museum features an impressive collection of pioneer and early community artifacts, antique tractors, and farm implements; an 80-acre working farm; historic farmstead structures; and striking views of nearby bluffs, including Scotts Bluff National Monument. The Museum tells the timeless stories of the Nebraska prairie.",
            "streetAddress": "630 N 14th Street",
            "city": "Lincoln",
            "state": "NE",
            "postalCode": "68508",
            "region": "South East"
        },
        {
            "name": "Museum of the Fur Trade",
            "hours": "Monday thru Saturday, 9:00 am to 5 pm, Sunday 1:00 pm to 5 pm",
            "phone": "402-575-7472",
            "link": "legacyoftheplains.org",
            "description": "Located on the Oregon Trail, the Legacy of the Plains Museum features an impressive collection of pioneer and early community artifacts, antique tractors, and farm implements; an 80-acre working farm; historic farmstead structures; and striking views of nearby bluffs, including Scotts Bluff National Monument. The Museum tells the timeless stories of the Nebraska prairie.",
            "streetAddress": "630 N 14th Street",
            "city": "Lincoln",
            "state": "NE",
            "postalCode": "68508",
            "region": "Panhandle"
        },
        {
            "name": "Bayard Depot Museum",
            "hours": "Monday thru Saturday, 9:00 am to 5 pm, Sunday 1:00 pm to 5 pm",
            "phone": "402-575-7472",
            "link": "legacyoftheplains.org",
            "description": "Located on the Oregon Trail, the Legacy of the Plains Museum features an impressive collection of pioneer and early community artifacts, antique tractors, and farm implements; an 80-acre working farm; historic farmstead structures; and striking views of nearby bluffs, including Scotts Bluff National Monument. The Museum tells the timeless stories of the Nebraska prairie.",
            "streetAddress": "630 N 14th Street",
            "city": "Lincoln",
            "state": "NE",
            "postalCode": "68508",
            "region": "South East"
        },
        {
            "name": "Thomas County Historical Society",
            "hours": "Monday thru Saturday, 9:00 am to 5 pm, Sunday 1:00 pm to 5 pm",
            "phone": "402-575-7472",
            "link": "legacyoftheplains.org",
            "description": "Located on the Oregon Trail, the Legacy of the Plains Museum features an impressive collection of pioneer and early community artifacts, antique tractors, and farm implements; an 80-acre working farm; historic farmstead structures; and striking views of nearby bluffs, including Scotts Bluff National Monument. The Museum tells the timeless stories of the Nebraska prairie.",
            "streetAddress": "630 N 14th Street",
            "city": "Lincoln",
            "state": "NE",
            "postalCode": "68508",
            "region": "Metro"
        },
        {
            "name": "Sandhills Heritage Museum",
            "hours": "Monday thru Saturday, 9:00 am to 5 pm, Sunday 1:00 pm to 5 pm",
            "phone": "402-575-7472",
            "link": "legacyoftheplains.org",
            "description": "Located on the Oregon Trail, the Legacy of the Plains Museum features an impressive collection of pioneer and early community artifacts, antique tractors, and farm implements; an 80-acre working farm; historic farmstead structures; and striking views of nearby bluffs, including Scotts Bluff National Monument. The Museum tells the timeless stories of the Nebraska prairie.",
            "streetAddress": "630 N 14th Street",
            "city": "Lincoln",
            "state": "NE",
            "postalCode": "68508",
            "region": "South East"
        },
        {
            "name": "Sandhills Heritage Museum",
            "hours": "Monday thru Saturday, 9:00 am to 5 pm, Sunday 1:00 pm to 5 pm",
            "phone": "402-575-7472",
            "link": "legacyoftheplains.org",
            "description": "Located on the Oregon Trail, the Legacy of the Plains Museum features an impressive collection of pioneer and early community artifacts, antique tractors, and farm implements; an 80-acre working farm; historic farmstead structures; and striking views of nearby bluffs, including Scotts Bluff National Monument. The Museum tells the timeless stories of the Nebraska prairie.",
            "streetAddress": "630 N 14th Street",
            "city": "Lincoln",
            "state": "NE",
            "postalCode": "68508",
            "region": "South East"
        }
    ]
    

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
                    <h1>{currArea.name}</h1>
                </div>
                <h1>Popular Sites</h1>
                add slideshow of sites in the region 
                <div className="slideshow">
                    {temp.map((site)=> <Card props={site} />)}
                </div>
            </div>
        </div>
    );
}

export default Map;