import React, { Component } from "react";
import Button from "@material/react-button";
import { Cell, Grid, Row } from "@material/react-layout-grid";
import { Link } from "react-router-dom";

//import ContactForm from "./ContactForm";

class Main extends Component {
  constructor() {
    super();
    this.state = {
      error: null,
      isLoaded: false,
      featuredProjects: []
    };
  }
  //Fetch requests in a React App
  //https://reactjs.org/docs/faq-ajax.html
  getFeaturedProjects() {
    fetch("data/projects-array.json")
      .then(res => res.json())
      .then(result => {
        this.setState({ featuredProjects: result });
        //console.log("Featured Projects State: ", this.state.featuredProjects);
      });
  }

  componentDidMount() {
    this.getFeaturedProjects();
  }

  render() {
    let featuredProjectsGrid = (
      <Grid id="featured-projects-grid">
        <Row>
          {this.state.featuredProjects.map(project =>
            project.featured === true ? (
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
            ) : null
          )}
        </Row>
      </Grid>
    );
    return [
      <div className="main-page-container">
        <h1>Welcome to my Portfolio!</h1>
        <h3>
          My name is Dave. I'm a full stack web developer focused on the{" "}
          <span className="humans">
            <em>humans</em>
          </span>{" "}
          who use technology. <Link to="/about">Learn More</Link>
        </h3>

        <div>
          <h2 className="featured-projects-header">Featured Projects</h2>

          {featuredProjectsGrid}
        </div>

        <div>
          <Link to="/projects">
            <Button raised className="mdc-button-custom">
              All projects!
            </Button>
          </Link>
        </div>
      </div>
    ];
  }
}

export default Main;
