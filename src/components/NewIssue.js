import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { v4 } from "uuid";

import "./NewIssue.css";

function NewIssue(props) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [author, setAuthor] = useState("");
  const [label, setLabel] = useState("low");
  const history = useHistory();

  const titleChangeHandler = (e) => {
    setTitle(e.target.value);
  };

  const descriptionChangeHandler = (e) => {
    setDescription(e.target.value);
  };

  const authorChangeHandler = (e) => {
    setAuthor(e.target.value);
  };

  const labelChangeHandler = (e) => {
    setLabel(e.target.value);
  };
  const formSubmitHandler = (e) => {
    e.preventDefault();
    const newIssue = {
      id: v4(),
      title,
      description,
      author,
      number: props.issueNumber,
      labels: ["bug", "in process", `${label}`],
      createdAt: new Date().toLocaleString(),
    };
    console.log(newIssue);
    props.addNewIssue(newIssue);
    history.goBack();
  };

  return (
    <div className="new-project">
      <h1>Rise New Issue</h1>
      <form onSubmit={formSubmitHandler}>
        <input
          placeholder="Name"
          required
          value={title}
          onChange={titleChangeHandler}
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
        <label className="custom-select">
          Priority :
          <select onChange={labelChangeHandler}>
            <option value="low">Low</option>
            <option value="medium">Medium</option>
            <option value="high">High</option>
          </select>
        </label>
        <button>Rise Issue</button>
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

export default NewIssue;
