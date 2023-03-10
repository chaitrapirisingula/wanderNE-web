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
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sites" element={<Sites />} />
        <Route path="/:site" element={<Site />} />
        <Route path="/libraries" element={<Libraries />} />
        <Route path="/map" element={<Map />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
