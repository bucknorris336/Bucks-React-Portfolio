import React from "react";
import { Container, ListGroup, Button } from "react-bootstrap";
import resumePdf from "../assets/resume.pdf";

const Resume = () => {
  const proficiencies = [
    "JavaScript",
    "HTML",
    "CSS",
    "React",
    "Node.js",
    "MongoDB",
    "MySQL",
    "GraphQL",
    "Object-Oriented Programming (OOP)",
    "Progressive Web Applications (PWAs)",
    "GIT",
    "Command Line",
    "VS Code",
    // Add more proficiencies as needed
  ];

  return (
    <Container className="text-center" style={{ maxWidth: "400px" }}>
      <h4 className="my-5">Proficiencies:</h4>
      <ListGroup>
        {proficiencies.map((proficiency, index) => (
          <ListGroup.Item key={index}>{proficiency}</ListGroup.Item>
        ))}
      </ListGroup>
      <Button variant="primary" href={resumePdf} download className="mt-5">
        Download Resume
      </Button>
    </Container>
  );
};

export default Resume;

// <div className="div-container">
//   <h1>Resume Page</h1>
//   <p>
//     I possess a diverse skill set in full-stack development that spans from
//     UI/UX design to database configuration and server-side API engineering.
//     My proficiency in web development encompasses a range of technologies,
//     including React, Node.js, MySQL and Sequelize, Mongoose and MongoDB,
//     Express.js, JQuery, and CSS frameworks like Bootstrap.
//   </p>
// </div>
