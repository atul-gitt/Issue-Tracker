import React, { useState } from "react";
import { useHistory } from "react-router-dom";

import ProjectIssueItem from "./ProjectIssueItem";
import Filters from "./Filters";
import "./ProjectIssueList.css";

function ProjectIssueList(props) {
  const [issues, setIssuses] = useState(props.issues);
  const [showFilter, setShowFilter] = useState(false);
  const [search, setSearch] = useState("");

  const history = useHistory();
  const handleClick = () => {
    history.push("/newIssue");
  };
  const handleSort = () => {
    const sortedIssues = props.issues.sort((a, b) => {
      if (a.number > b.number) {
        return 1;
      } else return -1;
    });
    setIssuses([...sortedIssues]);
  };
  const handleFilter = (filter) => {
    let filterIssue = [...props.issues];
    if (filter[0]) {
      filterIssue = filterIssue.filter(
        (issue) => issue.labels[2] === filter[0]
      );
    }
    if (filter[1]) {
      filterIssue = filterIssue.filter(
        (issue) => issue.labels[1] === filter[1]
      );
    }
    console.log(filterIssue);
    if (filterIssue) {
      setIssuses([...filterIssue]);
    }

    setShowFilter(false);
  };

  const handleSearch = (e) => {
    e.preventDefault();

    const searchIssues = props.issues.filter((issue) => {
      if (issue.title.toLowerCase() === search.toLowerCase()) return true;
      return false;
    });

    setIssuses([...searchIssues]);
  };
  return (
    <React.Fragment>
      <div className="filter-container">
        <div className="apply-filter">
          <form onSubmit={handleSearch}>
            <input
              placeholder="Title"
              value={search}
              onChange={(e) => {
                setSearch(e.target.value);
              }}
            ></input>
            <button className="button">Search</button>
          </form>
          <button onClick={handleSort} className="button">
            Sort by Issue Number
          </button>
          <button
            onClick={() => {
              setShowFilter(!showFilter);
            }}
            className="button"
          >
            Filters
          </button>
          <button
            onClick={() => {
              setIssuses([...props.issues]);
              setSearch("");
            }}
            className="button"
          >
            Clear
          </button>
        </div>
        {showFilter && <Filters handleFilter={handleFilter} />}
        <div className="btn-container">
          <button
            onClick={() => {
              history.goBack();
            }}
            className="button"
          >
            Back
          </button>
          <button onClick={handleClick} className="button">
            Create New Issue
          </button>
        </div>
      </div>
      <table>
        <thead>
          <tr>
            <th>Priority</th>
            <th>Status</th>
            <th>Title</th>
            <th>Description</th>
            <th>Created At</th>
            <th>Author</th>
          </tr>
        </thead>
        <tbody>
          {issues.length > 0 ? (
            issues.map((issue) => (
              <ProjectIssueItem key={issue.id} issue={issue} />
            ))
          ) : (
            <tr>
              <td>No Issue found.</td>
            </tr>
          )}
        </tbody>
      </table>
    </React.Fragment>
  );
}

export default ProjectIssueList;
