import React, { useState } from "react";

import "./Filters.css";

function Filters(props) {
  const [priority, setPriority] = useState("");
  const [status, setStatus] = useState("");

  const priorityChangeHandler = (e) => {
    setPriority(e.target.value);
  };
  const statusChangeHandler = (e) => {
    setStatus(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const filterArray = [priority, status];
    props.handleFilter(filterArray);
  };
  return (
    <form onSubmit={handleSubmit} className="custom-select">
      <label>
        Priority :
        <select onChange={priorityChangeHandler}>
          <option>--Select--</option>
          <option value="low">Low</option>
          <option value="medium">Medium</option>
          <option value="high">High</option>
        </select>
      </label>
      <label>
        Status :
        <select onChange={statusChangeHandler}>
          <option>--Select--</option>
          <option value="open">Open</option>
          <option value="in progress">In Progress</option>
          <option value="closed">Closed</option>
        </select>
      </label>
      <button>Apply</button>
    </form>
  );
}

export default Filters;
