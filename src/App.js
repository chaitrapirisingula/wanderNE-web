import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './Home';
import AllSites from './AllSites';
import Site from './Site';
import Header from './Header';
import Footer from "./Footer";
import Map from './Map';
import './Design/App.css';

function App() {

  const [data, setData] = useState();

  const getData = async () => {
    try {
      const res = await fetch(
        process.env.REACT_APP_DATA_API_LINK
      );
      const data = await res.json();
      setData(Object.keys(data).map((key) => data[key]));
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sites" element={<AllSites data={data}/>} />
        <Route path="/sites/:site" element={<Site />} />
        <Route path="/map" element={<Map />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
