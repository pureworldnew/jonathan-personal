import React, { Component } from "react";

// Job section blueprint
function Job(props) {
  return (
    <div className="jobs">
      <div className="job-section">
        <h3>{props.co}</h3>
        <div>{props.title}</div>
      </div>
      <div className="job-section">{props.date}</div>
    </div>
  );
}

export default class Experience extends Component {
  render() {
    return (
      <div id="parent">
        <div id="title">
          <hr />
          <h2>&#187; Experience</h2>
        </div>
        <Job
          co="With - meetwithanyone.com"
          title="Full time - MERN stack Developer"
          date="May 2018 - Nov 2022"
        />
        <Job
          co="Sky Republic Inc"
          title="Contract - Senior Software developer"
          date="Oct 2014 - Apr 2018"
        />
      </div>
    );
  }
}
