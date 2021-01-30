import React from "react";

import "./ProjectIssueItem.css";

function ProjectIssueItem({ issue }) {
  return (
    <tr>
      <td className={`priority ${issue.labels[2]}`}>{issue.labels[2]}</td>
      <td>{issue.labels[1]}</td>
      <td className="issue-title">{`#${issue.number}: ${issue.title}`}</td>
      <td>{issue.description}</td>
      <td>{issue.createdAt}</td>
      <td>{issue.author}</td>
    </tr>
  );
}

export default ProjectIssueItem;
