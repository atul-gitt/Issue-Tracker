import React from "react";
import { Link } from "react-router-dom";

import ProjectList from "./ProjectList";
import "./Home.css";

function Home({ projects }) {
  return (
    <div>
      <h1 className="project-title">Projects</h1>
      {<ProjectList projects={projects} />}
      <div className="project-create">
        <Link to="/newProject">Create New Project</Link>
      </div>
    </div>
  );
}

export default Home;
