import React, { Component } from "react";

class About extends Component {
  constructor() {
    super();
    this.state = {
      bio1:
        "Dave Gentilli is an experienced professional who decided to make " +
        "a mid-career transition. He began teaching himself to code with the " +
        "help of online courses, tutorials, and mentors. This portfolio, and " +
        "all of its projects, is the product of " +
        "approximately 18 months of learning.",
      bio2:
        "Dave gained years of experience providing client service " +
        "as a U.S. government contractor and consultant. He cultivated important skills " +
        "for working with clients in any field such as building strong " +
        "relationships, tailoring services to meet client needs, and " +
        "listening to ensure a clear understanding of what the customer " +
        "wants.",
      bio3:
        "Prior to working as a contractor, Dave accumulated 13 years of " +
        "experience in both the military and civilian government. He's " +
        "lived in a few foreign countries, speaks fluent Romanian, " +
        "and is an amateur photographer -- with heavy emphasis on " +
        "amateur.",
      skills:
        "Dave's technical skills focus on the JavaScript MERN stack. He added " +
        "to the core JS skills in this portfolio by incorporating technologies " +
        "such as Redux, Passport, Socket.io, React Router, Video-React, " +
        "Material UI, and jQuery. Dave is available for full-time remote " +
        "work, part-time projects, or freelance jobs. He lives in Eastern " +
        "Europe."
    };
  }
  render() {
    return [
      <div className="about-container">
        <div className="about-header">
          <h1>About Dave</h1>
        </div>

        <div className="about-text">
          <img
            src="../../LinkedIn_profile_photo.jpg"
            alt="Dave Gentilli's photo"
          />
          <p>{this.state.bio1}</p>
          <p>{this.state.bio2}</p>
          <p>{this.state.bio3}</p>
          <p>{this.state.skills}</p>
        </div>
      </div>
    ];
  }
}

export default About;
