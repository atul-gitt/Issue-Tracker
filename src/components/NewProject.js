import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { v4 } from "uuid";

import "./NewProject.css";

function NewProject(props) {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [author, setAuthor] = useState("");
  const history = useHistory();

  const nameChangeHandler = (e) => {
    setName(e.target.value);
  };

  const descriptionChangeHandler = (e) => {
    setDescription(e.target.value);
  };

  const authorChangeHandler = (e) => {
    setAuthor(e.target.value);
  };

  const formSubmitHandler = (e) => {
    e.preventDefault();
    const newProject = {
      id: v4(),
      name,
      description,
      author,
    };
    props.addNewProject(newProject);
    history.push("/");
  };

  return (
    <div className="new-project">
      <h1>New Project</h1>
      <form onSubmit={formSubmitHandler}>
        <input
          placeholder="Name"
          required
          value={name}
          onChange={nameChangeHandler}
        ></input>
        <input
          placeholder="Description"
          required
          value={description}
          onChange={descriptionChangeHandler}
        ></input>
        <input
          placeholder="Author"
          required
          value={author}
          onChange={authorChangeHandler}
        ></input>
        <button>Create Project</button>
        <button
          onClick={(e) => {
            e.preventDefault();
            history.goBack();
          }}
        >
          Cancel
        </button>
      </form>
    </div>
  );
}

export default NewProject;
