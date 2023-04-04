import React, { Component } from "react";

//title of project
function Title(props) {
  return (
    <h2>
      <span className="projectLink">
        <a href={props.link} target="_blank" rel="noopener noreferrer">
          {" "}
          {props.name}{" "}
        </a>
      </span>
    </h2>
  );
}

//date project was completed in
function Date(props) {
  return <span>{props.date}</span>;
}

//all relavent languages and tools used in project
function Label(props) {
  return <span className="label">{props.label}</span>;
}

//short description of project
function Desc(props) {
  return (
    <span className="description">{props.desc.replaceAll("<br/>", "\n")}</span>
  );
}

export default class Section extends Component {
  render() {
    return (
      <div id="parent">
        <div id="title">
          <hr />
          <h2>&#187; Projects</h2>
        </div>

        <div id="section">
          <div id="date">
            <Date date="2018-2023" />
          </div>
          <div>
            <Title
              name="With - meetwithanyone.com"
              link="https://meetwithanyone.com/"
            />
            <div id="labels">
              <Label label="JavaScript" />
              <Label label="React" />
              <Label label="Redux-Saga" />
              <Label label="React Hook" />
              <Label label="CSS" />
              <Label label="Node" />
              <Label label="Express" />
              <Label label="AWS" />
              <Label label="MySQL" />
            </div>
            <Desc
              desc="Front End Development <br/>
              ● HTML5, CSS3, JavaScript, TypeScript, React, Redux-Saga, React Unit Testing using Jest, RTL, MSW. <br/>
              ● Implement UI/ UX according to the provided Figma Design.
              - Identified web-based user interactions and developed highly responsive user interface components
              via React, and Redux-Saga, Hooks, React material UI library.
              - Translated designs & wireframes into high-quality code and wrote application interface code
              via JavaScript following React best development practice and design pattern like container-view
              design pattern.
              - Construct a reusable and scalable React components and API integration.
              - Troubleshoot issues and debug application codes to improve functionality and
              performance.
              - Developed and implemented front-end architecture to support user interface concepts, code refactoring.
              Back End Development <br/>
              ● Node.js, Express.js, MySQL, MongoDB, AWS(EC2, Lambda function,...), Microservice architecture,
              serverless platform and etc. <br/>
              ● Design of API, Database design/implementation/performance tuning.
              - Used Node.js to install necessary packages into the application.
              - Developed RESTAPI using Node.js/Express Framework
              - Integrated dedicated API systems and third-party solutions
              - Built a complicated backend system using Node/Express.js, Sequelize ORM, and MySQL.
              - Construct many DBMS and several relations such as ManytoMany, OneToMany, OnetoOne, etc.
"
            />
          </div>
        </div>

        <div id="section">
          <div id="date">
            <Date date="2014~2018" />
          </div>
          <div>
            <Title name="Sky Republic Inc" link="https://www.skyrepublic.com" />
            <div id="labels">
              <Label label="HTML" />
              <Label label="CSS" />
              <Label label="Typescript" />
              <Label label="React/Redux-Saga/Hooks" />
              <Label label="Node/Express" />
              <Label label="Express" />
              <Label label="Azure AD" />
              <Label label="AWS Cognito" />
            </div>
            <Desc
              desc="Transform your supply chain faster <br/>
              Designed to get multi-enterprise applications up and running quickly, Sky Republic makes your supply
              chain more productive, resilient, and nimble using purpose-built smart contracts – Sky Contracts – to
              unify processes, data and records among partners and decentralize benefits. <br/>
              ● Experience with HTML5, CSS3, SCSS, Javascript, Jquery, and front-end open-source sets such
              as Bootstrap <br/>
              ● Worked on web application development that was based on Angular, React, Vuejs and Node.js. <br/>
              ● Created mobile responsive & pixel-perfect Angular UI based on Figma design. <br/>
              ● Integrated REST endpoints and 3rd party APIs in the front end, JWT user authentication and Oauth2
              based user authentication. <br/>
              ● Wrote effective unit test using Jest . <br/>
              ● Consulting web development for businesses providing custom software solutions and
              architecture alongside performance optimization. <br/>
              ● Daily maintenance of code, debugging issues, and solving clients’ problems. <br/>
              ● Fully engaged with team members to achieve the highest levels of the project."
            />
          </div>
        </div>
      </div>
    );
  }
}
