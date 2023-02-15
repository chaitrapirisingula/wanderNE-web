import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './Home';
import Sites from './Sites';
import Site from './Site';
import Header from './Header';
import Footer from "./Footer";
import Libraries from "./Libraries";
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
