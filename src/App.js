import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Papa from 'papaparse';
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
      Papa.parse(process.env.REACT_APP_PAPAPARSE_LINK, {
        download: true,
        header: true,
        complete: function(results) {
          setData(results.data)
        }
      })
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
