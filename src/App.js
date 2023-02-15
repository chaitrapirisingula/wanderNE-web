import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './Home';
import AllSites from './AllSites';
import Site from './Site';
import Header from './Header';
import Footer from "./Footer";
import Map from './Map';
import './Design/App.css';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sites" element={<AllSites />} />
        <Route path="/sites/:site" element={<Site />} />
        <Route path="/map" element={<Map />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
