import React, { Component } from "react";
import { Player } from "video-react";
import { Link } from "react-router-dom";
import Button from "@material/react-button";
//import BackButton from "./BackButton";

class ProjectShow extends Component {
  constructor() {
    super();
    this.state = {
      isLoaded: false,
      projectInfo: null
    };
  }

  componentDidMount() {
    // Router: the Route (in ProjectGrid) passes the id in this.props
    //console.log("Props passed by Route:", this.props);

    // Access 'match' within props to extract the project's id
    let { match } = this.props;
    let projectId = match.params.id;

    //console.log("projectId:", projectId);

    // fetch project data from mock API (NOTE: data must be stored in 'public' folder to be available for fetch; alternatively data could be imported, but we want to simulate an API call)
    fetch("/data/projects-array.json")
      .then(res => res.json())
      .then(projects => {
        // filter projects data using 'projId' defined above
        const projectInfo = projects.filter(function(project) {
          // return a new array containing items with 'id' equal to value provided
          return project["id"] === projectId;
        });

        // project data for the project matching the id in the route path
        //console.log("projectInfo", projectInfo);

        this.setState({ isLoaded: true, projectInfo });
        //console.log("this.state.projectInfo: ", this.state.projectInfo);
      });
  }

  render() {
    // once project data has been loaded, extract it into a variable to simplify rendering of data below
    const project =
      this.state.isLoaded === true ? this.state.projectInfo[0] : null;
    //console.log("project:", project);
    //video from video-react docs
    //http://media.w3.org/2010/05/bunny/movie.mp4

    return (
      <div className="project-show-container">
        <h1>{this.state.projectInfo ? project.name : ""}</h1>
        <div className="player-container">
          <Player
            poster={this.state.projectInfo ? project.poster : ""}
            src={this.state.projectInfo ? project.video : ""}
          ></Player>
        </div>

        <div>
          <p className="show-project-tags">
            {this.state.projectInfo ? project.tags : ""}
          </p>
          <div className="tech-stack-container">
            <p className="tech-stack-header">Tech Stack</p>
            <p className="tech-stack">
              {this.state.projectInfo
                ? project.stack.map(item => <li key={item.id}> {item} </li>)
                : ""}
            </p>
          </div>
          <p>{this.state.projectInfo ? project.summary : ""}</p>
          <p>{this.state.projectInfo ? project.approach : ""}</p>
          <p>{this.state.projectInfo ? project.next : ""}</p>
          <div className="project-show-buttons">
            <a href={this.state.projectInfo ? project.url : ""}>
              <Button raised className="mdc-button-custom">
                Try the App!
              </Button>
            </a>
            <a href={this.state.projectInfo ? project.github : ""}>
              <Button raised className="mdc-button-custom">
                Github Repo
              </Button>
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default ProjectShow;
