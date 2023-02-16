import React from "react";
import Card from "../Components/Card";
import { Helmet } from "react-helmet";
import { useState, useEffect } from "react";
import ReactLoading from "react-loading";
import Papa from 'papaparse';
import "../Design/App.css";

function Sites() {

    const [loaded, setLoaded] = useState(false)

    const [data, setData] = useState();

    const getData = async () => {
        try {
        Papa.parse(process.env.REACT_APP_PAPAPARSE_LINK, {
            download: true,
            header: true,
            complete: function(results) {
            setData(results.data);
            setLoaded(true);
            }
        })
        } catch (error) {
        console.log(error);
        }
    };

    useEffect(() => {
        getData();
    }, []);

    return loaded ? (
        <div className="App">
            <Helmet>
                <meta charSet="utf-8" />
                <title>Sites</title>
            </Helmet>
            <h1>Historical Sites</h1>
            <div className="sites_wrapper">
                {data.map((site)=> site.Category.replace(/ /g, '') === "Historical" ? <Card props={site} /> : "")}
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