import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './Pages/Home';
import Sites from './Pages/Sites';
import Site from './Pages/Site';
import Header from './Components/Header';
import Footer from "./Components/Footer";
import Libraries from "./Pages/Libraries";
import './Design/App.css';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sites" element={<Sites />} />
        <Route path="/sites/:site" element={<Site />} />
        <Route path="/libraries" element={<Libraries />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
