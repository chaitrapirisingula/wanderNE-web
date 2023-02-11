import React from "react";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";
import { useMemo } from "react";
import './App.css';

function Map() {

    // const { isLoaded } = useLoadScript({
    //     googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
    // });

    // const center = useMemo(() => ({ lat: 44, lng: -80 }), []);

    // const uluru = { lat: -25.344, lng: 131.031 };
    // // The map, centered at Uluru
    // const map = new google.maps.Map(document.getElementById("map"), {
    //     zoom: 4,
    //     center: uluru,
    // });
    // // The marker, positioned at Uluru
    // const marker = new google.maps.Marker({
    //     position: uluru,
    //     map: map,
    // });
   
    // if (!isLoaded) return <div>Loading</div>
    return (
        <div className="App">
            <h1> Map </h1>
            {/* <GoogleMap zoom={10} center={center} mapContainerClassName="map-container">
                <Marker position={center} />
            </GoogleMap> */}
        </div>
    );
}

export default Map;