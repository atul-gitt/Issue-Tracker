import React from "react";
import { useHistory } from "react-router-dom";

import "./ProjectItem.css";

function ProjectItem({ name, description, author }) {
  const history = useHistory();

  const handleClick = () => {
    history.push("/projectIssues");
  };
  return (
    <div className="project-list" onClick={handleClick}>
      <div>
        <p>Name</p>
        <p>{name}</p>
      </div>
      <div>
        <p>Description</p>
        <p>{description}</p>
      </div>
      <div>
        <p>Author</p>
        <p>{author}</p>
      </div>
    </div>
  );
}

export default ProjectItem;
