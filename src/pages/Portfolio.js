import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { projectsList } from "../utils/projectsList.js";
import { FaGithub } from "react-icons/fa";

const Portfolio = () => {
  return (
    <Container>
      <h2 className="mt-3">Portfolio</h2>
      <Row>
        {projectsList.map((project) => (
          <Col
            md={4}
            className="m-3 card-container d-flex flex-column"
            key={project.title}
          >
            <div>
              <h4>{project.title}</h4>
              <a href={project.liveSite} target="_blank" rel="noreferrer">
                <Card style={{ height: "147px", overflow: "hidden" }}>
                  <img
                    src={project.imgSrc}
                    alt={project.title}
                    className="img-fluid"
                  />
                </Card>
              </a>
              <p>{project.desc}</p>
            </div>
            <Col
              style={{
                display: "flex",
                justifyContent: "flex-start",
                alignItems: "flex-end",
                gap: "5px",
              }}
            >
              <a href={project.githubLink} target="_blank" rel="noreferrer">
                <Button variant="outline-dark">
                  <FaGithub size={20} />
                </Button>
              </a>{" "}
              <a href={project.liveSite} target="_blank" rel="noreferrer">
                <Button variant="outline-dark">Live Site</Button>
              </a>
            </Col>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Portfolio;
