import { useState, useEffect } from "react";
import { db } from "./firebase";
import { collection, getDocs } from "firebase/firestore";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './Pages/Home';
import Sites from './Pages/Sites';
import Site from './Pages/Site';
import Header from './Components/Header';
import Footer from "./Components/Footer";
import Libraries from "./Pages/Libraries";
import Map from "./Pages/Map";
import './Design/App.css';

function App() {

  const [sites, setSites] = useState([]);
  const siteRef = collection(db, "sites")

  useEffect(() => {

    const getSites = async () => {
      const data = await getDocs(siteRef)
      setSites(data.docs.map((doc) => ({...doc.data(), id: doc.id})))
      console.log(sites[0])
    }

    getSites()

  }, [])


  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sites" element={<Sites />} />
        <Route path="/sites/:site" element={<Site />} />
        <Route path="/libraries" element={<Libraries />} />
        <Route path="/map" element={<Map />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
