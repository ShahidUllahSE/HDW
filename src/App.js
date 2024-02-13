import "./index.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { NotificationContainer } from 'react-notifications';
import Navbar from "./components/Navbar";
import Gallery from "./components/Gallery";
import Home from "./components/Home";
import Contact from "./components/Contact";
import Projects from "./components/Projects";
import Help from "./components/Help";
import Volanteer from "./components/Volanteer";
import Footer from "./components/Footer";
import Team from "./components/Team";
function App() {
  return (
    <div className="App">
<div>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Team" element={<Team />} />
          <Route path="/Gallery" element={<Gallery />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Projects" element={<Projects />} />
          <Route path="/Help" element={<Help />} />
          <Route path="/Volanteer" element={<Volanteer />} />



        </Routes>
        <Footer/>
      </Router>
</div>

      <NotificationContainer />
    </div>
  );
}

export default App;
