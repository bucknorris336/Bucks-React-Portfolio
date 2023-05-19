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
      <h1 className="my-5">Proficiencies:</h1>
      <ListGroup>
        {proficiencies.map((proficiency, index) => (
          <ListGroup.Item key={index}>{proficiency}</ListGroup.Item>
        ))}
      </ListGroup>
      <Button
        variant="outline-primary"
        href={resumePdf}
        download
        className="mt-5"
      >
        Download Resume
      </Button>
    </Container>
  );
};

export default Resume;
