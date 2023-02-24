import React from "react";
import Card from "../Components/Card";
import Loading from "../Components/Loading";
import { Helmet } from "react-helmet";
import { useState, useEffect } from "react";
import { db } from "../firebase";
import { collection, getDocs } from "firebase/firestore";
import "../Design/App.css";

function Sites() {

    const [sites, setSites] = useState([]);
    const [loaded, setLoaded] = useState(false);
  
    useEffect(() => {
      const getSites = async () => {
        const siteRef = collection(db, "sites");
        const data = await getDocs(siteRef);
        const sitesData = data.docs.map((doc) => (doc.data()));
        setSites(sitesData);
        setLoaded(true);
      }
      getSites();
    }, [])

    return (
        <div className="App">
            <Helmet>
                <meta charSet="utf-8" />
                <title>Sites</title>
            </Helmet>
            <h1>Historical Sites</h1>
            {loaded ? <div className="sites_wrapper">
                {sites.map((site)=> <Card props={site} />)} </div> : 
                <Loading/>}
        </div>
    );
}

export default Sites;