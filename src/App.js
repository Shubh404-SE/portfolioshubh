import "./App.css";
import "./components/Navbar/Navbar.css";
import "./components/Pages/Home/Home.css";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Aos from "aos";
import "aos/dist/aos.css";

import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Pages/Home/Home";
import About from "./components/Pages/About/About";
import Contact from "./components/Pages/Contact/Contact";
import Footer from "./components/Footer/Footer";
import Services from "./components/Pages/Skill_Service/Services";
import Education from "./components/Pages/Education/Education";
import Skill from "./components/Pages/Skill_Service/Skill";
import ProjectDetail from "./components/Pages/Project/ProjectDetail";
import { useEffect } from "react";
import { StateProvider } from "./context/StateContext";
import reducer, {initialState} from "./context/Reducer.js";

function App() {
  useEffect(() => {
    Aos.init();
  });

  return (
    <StateProvider initialState={initialState} reducer={reducer}>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/skills" element={<Skill />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/contactme" element={<Contact />} />
          <Route exact path="/services" element={<Services />} />
          <Route exact path="/projectdetails" element={<ProjectDetail />}>
            {" "}
          </Route>
          <Route
            exact
            path="/educationqualifications"
            element={<Education />}
          ></Route>
        </Routes>
        <Footer />
      </Router>
    </StateProvider>
  );
}

export default App;
