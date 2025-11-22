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
import AdminContacts from "../components/Admin/contacts/index.jsx";
import ComponentWrapper from "./ComponentWrapper.js";

function AllRoutes() {
 

  return (
      <Router>
        <Routes>
          <Route exact path="/" element={<ComponentWrapper><Home /></ComponentWrapper>} />
          <Route exact path="/skills" element={<ComponentWrapper><Skill /></ComponentWrapper>} />
          <Route exact path="/about" element={<ComponentWrapper><About /></ComponentWrapper>} />
          <Route exact path="/contactme" element={<ComponentWrapper><Contact /></ComponentWrapper>} />
          <Route exact path="/services" element={<ComponentWrapper><Services /></ComponentWrapper>} />
          <Route exact path="/projectdetails" element={<ComponentWrapper><Projects /></ComponentWrapper>} />
          <Route
            exact
            path="/educationqualifications"
            element={<ComponentWrapper><Education /></ComponentWrapper>}
          ></Route>
          <Route exact path="/admin/login" element={<AdminLogin />} />
          <Route path="/admin/dashboard" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
          <Route path="/admin/projects" element={<ProtectedRoute><AdminProjects /></ProtectedRoute>} />
          <Route path="/admin/skills" element={<ProtectedRoute><AdminSkills /></ProtectedRoute>} />
          <Route path="/admin/messages" element={<ProtectedRoute><AdminContacts /></ProtectedRoute>} />
        </Routes>
      </Router>
  );
}

export default AllRoutes;
