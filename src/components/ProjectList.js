import React from "react";
import ProjectItem from "./ProjectItem";

import "./ProjectList.css";

function ProjectList({ projects }) {
  return (
    <div className="project-container">
      {projects.map((project) => (
        <ProjectItem
          key={project.id}
          name={project.name}
          description={project.description}
          author={project.author}
        />
      ))}
    </div>
  );
}

export default ProjectList;
