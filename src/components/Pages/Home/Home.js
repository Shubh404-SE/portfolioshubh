import React, { useEffect, useState } from "react";
// import frontimg from "../assestes/bglogo.png";
import myimage from "../../../assestes/myphotoHome.png";
import svgbg from "../../../assestes/blob (2).svg";

import { useNavigate } from "react-router-dom";
import About from "../About/About";
import Contact from "../Contact/Contact";
import Services from "../Skill_Service/Services";
import Education from "../Education/Education";
import Skill from "../Skill_Service/Skill";
import ProjectDetail from "../Project/ProjectDetail";
import Alert from "../../Alert/Alert";

function Home() {
  const navigate = useNavigate();
  const [clienName, setName] = useState("");
  const [clientEmail, setemail] = useState("");
  const [showaltr, isaltr] = useState(false);
  const banner = [clienName, clientEmail];
  return (
    <>
      <div className="front">
        <div className="profile-container">
          <div
            data-aos="fade-up"
            data-aos-duration="900"
            className="profile-details"
          >
            <div className="profile-name">
              <span>
                Hii There
                <br />
              </span>
              <span>I'm </span>
              <h2 className="heightlighted-text">SHUBHAM TANWAR</h2>
            </div>
            <div className="prifile-role">
              <span>
                <br />
                <b>Fullstack Developer.</b>
                <br />
                <br />
                And I love to create beautiful and efficient websites for my
                customers. I love going through the entire process with the
                customer from concept, to design and then development and launch
              </span>
            </div>
            <div className="profile-options">
              <button
                className="btn btn-lightdark"
                onClick={() => navigate("/contactme")}
              >
                contact Me
              </button>
              <a href="src\assestes\Shubham_Resume.pdf" download>
                <button className="btn btn-blue">Get Resume</button>
              </a>
            </div>
          </div>
          <div
            data-aos="fade-left"
            data-aos-anchor="#example-anchor"
            data-aos-offset="500"
            data-aos-duration="500"
            className="img_section"
          >
            <img className="frontimg" src={myimage} alt="me" />
            <img className="blob" src={svgbg} alt="blob" />
          </div>
        </div>
      </div>
      <Alert alert={banner} showaltr={showaltr} />
      <About />
      <Skill data-aos="zoom-in-down" />
      <Services />
      <ProjectDetail />
      <Education />
      <Contact
        name={clienName}
        email={clientEmail}
        setName={setName}
        setEmail={setemail}
        showaltr={isaltr}
      />
    </>
  );
}

export default Home;
