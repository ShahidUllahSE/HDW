import "./index.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Team from "./components/Team";
import Gallery from "./components/Gallery";
import Home from "./components/Home";
function App() {
  return (
    <div className="App">
      {/* <Project/> */}

      <Router>
        <Navbar />
        <Routes>
          <Route path="/Home" element={<Home />} />
          <Route path="/Team" element={<Team />} />
          <Route path="/Gallery" element={<Gallery />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
