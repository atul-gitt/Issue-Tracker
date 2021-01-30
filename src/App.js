import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Home from "./components/Home";
import NewProject from "./components/NewProject";
import ProjectIssueList from "./components/ProjectIssueList";
import NewIssue from "./components/NewIssue";
import { projectsList } from "./assets/dummyProjects";
import { dummyIssues } from "./assets/dummyIssues";

function App() {
  const addNewProject = (newProject) => {
    projectsList.push(newProject);
  };

  const addNewIssue = (newIssue) => {
    console.log(dummyIssues.length);
    dummyIssues.push(newIssue);
    console.log(dummyIssues.length);
  };

  return (
    <React.Fragment>
      <Router>
        <Switch>
          <Route path="/" exact>
            <Home projects={projectsList} />
          </Route>
          <Route path="/newProject" exact>
            <NewProject addNewProject={addNewProject} />
          </Route>
          <Route path="/projectIssues" exact>
            <ProjectIssueList issues={dummyIssues} />
          </Route>
          <Route path="/newIssue" exact>
            <NewIssue
              addNewIssue={addNewIssue}
              issueNumber={dummyIssues.length + 1}
            />
          </Route>
        </Switch>
      </Router>
    </React.Fragment>
  );
}

export default App;
