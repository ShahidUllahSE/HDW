import "./index.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
// import Team from "./components/Team";
import Gallery from "./components/Gallery";
import Home from "./components/Home";
import Contact from "./components/Contact";
import Projects from "./components/Projects";
function App() {
  return (
    <div className="App">

      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/Team" element={<Team />} /> */}
          <Route path="/Gallery" element={<Gallery />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Projects" element={<Projects />} />

        </Routes>
      </Router>
    </div>
  );
}

export default App;
