import React from "react";
import Card from "../Components/Card";
import { Helmet } from "react-helmet";
import { useState, useEffect } from "react";
import ReactLoading from "react-loading";
import { db } from "../firebase";
import { collection, getDocs } from "firebase/firestore";
import "../Design/App.css";

function Libraries() {

    const [loaded, setLoaded] = useState(false)
    const libRef = collection(db, "libraries");
    const [libs, setLibs] = useState();

    useEffect(() => {
        const getSites = async () => {
          const data = await getDocs(libRef)
          const libsData = data.docs.map((doc) => (doc.data()));
          setLibs(libsData)
          setLoaded(true)
        }
        getSites();
    }, [])

    return loaded ? (
        <div className="App">
            <Helmet>
                <meta charSet="utf-8" />
                <title>Libraries</title>
            </Helmet>
            <h1>Libraries</h1>
            <div className="sites_wrapper">
                {libs.map((lib)=> <Card props={lib} />)}
            </div>
        </div>
    ) : (
        <div className="App">
            <Helmet>
                <meta charSet="utf-8" />
                <title>Sites</title>
            </Helmet>
            <h1>Libraries</h1>
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

export default Libraries;