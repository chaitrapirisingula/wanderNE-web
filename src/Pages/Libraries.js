import React from "react";
import Card from "../Components/Card";
import Loading from "../Components/Loading";
import { Helmet } from "react-helmet";
import { useState, useEffect } from "react";
import { db } from "../firebase";
import { collection, getDocs } from "firebase/firestore";
import "../Design/App.css";

function Libraries() {

    const [libs, setLibs] = useState();
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        const getLibs = async () => {
            const libRef = collection(db, "libraries");
            const data = await getDocs(libRef);
            const libsData = data.docs.map((doc) => (doc.data()));
            setLibs(libsData);
            setLoaded(true);
        }
        getLibs();
    }, [])

    return (
        <div className="App">
            <Helmet>
                <meta charSet="utf-8" />
                <title>Libraries</title>
            </Helmet>
            <h1>Libraries</h1>
            {loaded ? <div className="sites_wrapper">
                {libs.map((lib)=> <Card props={lib} />)}</div> : 
                <Loading/>}
        </div>
    );
}

export default Libraries;