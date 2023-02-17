import React from "react";
import Card from "../Components/Card";
import { Helmet } from "react-helmet";
import { useState, useEffect } from "react";
import ReactLoading from "react-loading";
import { db } from "../firebase";
import { collection, getDocs } from "firebase/firestore";
import "../Design/App.css";

function Sites() {

    const [sites, setSites] = useState([]);
    const siteRef = collection(db, "sites");
    const [loaded, setLoaded] = useState(false);
  
    useEffect(() => {
      const getSites = async () => {
        const data = await getDocs(siteRef)
        const sitesData = data.docs.map((doc) => (doc.data()));
        setSites(sitesData)
        setLoaded(true)
      }
      getSites();
    }, [])

    return loaded ? (
        <div className="App">
            <Helmet>
                <meta charSet="utf-8" />
                <title>Sites</title>
            </Helmet>
            <h1>Historical Sites</h1>
            <div className="sites_wrapper">
                {sites.map((site)=> <Card props={site} />)}
            </div>
        </div>
    ) : (
        <div className="App">
            <Helmet>
                <meta charSet="utf-8" />
                <title>Sites</title>
            </Helmet>
            <h1>Historical Sites</h1>
            <div className="loading_wrapper">
                <div className="loading">
                    <ReactLoading
                    color="#fbf4cd"
                    height={100}
                    width={100}
                    />
                </div>
            </div>
        </div>
    );
}

export default Sites;