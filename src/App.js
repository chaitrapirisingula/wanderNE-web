import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from './Home';
import AllSites from './AllSites';
import Site from './Site';

function App() {
  return (
    <Router>
      <nav>
        <Link to="/"> Home </Link>
        <Link to="/sites"> Sites </Link>
      </nav>
      <div> HEADER </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sites" element={<AllSites />} />
        <Route path="/sites/:site" element={<Site />} />
      </Routes>
      <div> FOOTER </div>
    </Router>
  );
}

export default App;
