import React, { Component } from "react";
import { Cell, Grid, Row } from "@material/react-layout-grid";
import { Link } from "react-router-dom";

class ProjectsOverview extends Component {
  constructor() {
    super();
    this.state = {
      error: null,
      isLoaded: false,
      projects: []
    };
  }

  //Fetch requests in a React App
  //https://reactjs.org/docs/faq-ajax.html
  getProjects() {
    fetch("data/projects-array.json")
      .then(res => res.json())
      .then(result => {
        this.setState({ projects: result });
        //console.log("Projects State: ", this.state.projects);
      });
  }

  componentDidMount() {
    //console.log("Projects Overview Component Mounted");
    this.getProjects();
  }

  render() {
    let projectsGrid = (
      <Grid id="projects-grid">
        <Row>
          {this.state.projects.map(project => (
            <Cell
              desktopColumns={4}
              phoneColumns={12}
              tabletColumns={8}
              key={project.id}
              id={project.id}
            >
              <Link to={`/project/${project.id}`}>
                <ul className="project-tile">
                  <li className="thumbnail-container">
                    <img className="thumbnail" src={project.poster} />
                  </li>
                  <li className="project-name">{project.name}</li>
                  <li className="project-tags">{project.tags}</li>
                  <li className="project-summary">{project.preview}</li>
                </ul>
              </Link>
            </Cell>
          ))}
        </Row>
      </Grid>
    );

    return [
      <div className="projects-overview-container">
        <div className="projects-page-header">
          <h1>Projects Page</h1>
        </div>
        <div className="projects-overview">
          <h3>Overview</h3>
          <p>Hi there – And thanks for checking out my projects!</p>
          <p>
            All of these applications played a role in my journey to become a
            web developer. I started with a few simple projects, mostly
            code-along exercises from Udemy courses, then things got more
            complicated with the Featured Projects. The Chat Application was a
            big leap forward in terms of learning the MERN stack. The portfolio
            was originally intended as a way of merely showcasing my projects.
            But now my skills have reached a much higher level, and I'm
            incorporating some really cool features such as React Router, React
            Material Components, and Embedded video!
          </p>
          <p>
            Please take a look and feel free to message me if you have any
            questions, or if you'd like to work together. And be sure to watch
            for new projects coming in autumn 2019!
          </p>
        </div>
        <div>{projectsGrid}</div>
      </div>
    ];
  }
}
export default ProjectsOverview;
