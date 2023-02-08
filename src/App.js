import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './Home';
import AllSites from './AllSites';
import Site from './Site';
import Header from './Header';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sites" element={<AllSites />} />
        <Route path="/sites/:site" element={<Site />} />
      </Routes>
    </Router>
  );
}

export default App;
