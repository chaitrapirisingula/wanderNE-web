import React from "react";
import { Helmet } from "react-helmet";
import './App.css';

function Home() {
  return (
    <div className="App">
      <Helmet>
          <meta charSet="utf-8" />
          <title>Home</title>
      </Helmet>
      <h1>Wander Nebraska</h1>
    </div>
  );
}

export default Home;