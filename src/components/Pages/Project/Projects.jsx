import ProjectList from "./ProjectList.js";
import FilterDropDown from "./FilterDropDown.jsx";
import { useStateProvider } from "../../../context/StateContext";
import ProjectCard from "./ProjectCard.jsx";
import { useEffect } from "react";

export default function Projects() {
  const [{ filtered }, dispatch] = useStateProvider();
  const allTags = [
    "All",
    ...new Set(ProjectList.flatMap((project) => project.tags)),
  ];

  useEffect(() => {
    dispatch({ type: "INIT", payload: ProjectList });
  }, [dispatch]);

  return (
      <div className="max-w-6xl mx-auto px-6 py-10">
        <h2 className="text-3xl font-bold text-center mb-8 text-gray-200">
          My Projects
        </h2>

        <FilterDropDown tags={allTags} />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filtered.map((project) => (
            <div key={project.id}>
              <ProjectCard project={project} />
            </div>
          ))}
        </div>
      </div>
  );
}
