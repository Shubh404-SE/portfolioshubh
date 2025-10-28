import React from "react";
import ProjectList from "./ProjectList.js";
import Project from "./Project.js";
import "./Project.css";
import FilterDropDown from "./FilterDropDown.jsx";

function ProjectDetail() {
  return (
    <div className="projects_container">
      <h1 className="heading">My Projects</h1>
      <div>
        {/* <FilterDropDown /> */}
        <div>
          {ProjectList.map((val, index) => {
            return (
              <div
                data-aos="fade-up"
                data-aos-duration="3000"
                className="projects"
              >
                <Project imglink={val.img} url={val.url} key={index} />
              </div>
            );
          })}
        </div>
      </div>
      <hr />
    </div>
  );
}

export default ProjectDetail;
