import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Home from ".././components/Pages/Home/Home.js";
import About from ".././components/Pages/About/About.js";
import Contact from ".././components/Pages/Contact/Contact.js";
import Services from ".././components/Pages/Skill_Service/Services.js";
import Education from ".././components/Pages/Education/Education.js";
import Skill from "../components/Pages/Skill_Service/Skill.jsx";
import AdminLogin from "../components/Admin/AdminLogin/index.jsx";
import Projects from "../components/Pages/Project/Projects.jsx";
import Dashboard from "../components/Admin/Dashboard/index.jsx";
import ProtectedRoute from "./ProrectedRoute.js";
import AdminProjects from "../components/Admin/Project/index.jsx";
import AdminSkills from "../components/Admin/Skill/index.jsx";

function AllRoutes() {
 

  return (
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/skills" element={<Skill />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/contactme" element={<Contact />} />
          <Route exact path="/services" element={<Services />} />
          <Route exact path="/projectdetails" element={<Projects />}>
            {" "}
          </Route>
          <Route
            exact
            path="/educationqualifications"
            element={<Education />}
          ></Route>
          <Route exact path="/admin/login" element={<AdminLogin />} />
          <Route path="/admin/dashboard" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
          <Route path="/admin/projects" element={<ProtectedRoute><AdminProjects /></ProtectedRoute>} />
          <Route path="/admin/skills" element={<ProtectedRoute><AdminSkills /></ProtectedRoute>} />
        </Routes>
      </Router>
  );
}

export default AllRoutes;
