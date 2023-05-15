import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const AboutMe = () => {
  return (
    <Container>
      <Row className="my-5">
        <Col md={4}>
          <img
            src="https://avatars.githubusercontent.com/u/62455130?v=4"
            alt="Buck Blocker Avatar"
            className="img-fluid rounded-circle"
          />
        </Col>
        <Col md={8}>
          <h2>About Me</h2>
          <p>
            I am a young and motivated web developer, eager to launch my career
            and establish my presence in the industry. My ideal position would
            be a junior development role that enables me to contribute to a
            meaningful team, while also providing opportunities for me to gain
            experience, expand my knowledge, and broaden my expertise as a
            developer. With a strong foundation in analytical thinking,
            attention to detail, and collaborative problem-solving, I am
            well-prepared to tackle the challenges that arise in the development
            world. In addition, I possess strong interpersonal skills and
            excellent communication abilities, which I believe are critical for
            working effectively in a team environment. I am deeply passionate
            about programming and its dynamic, hands-on, and creative nature.
            Pursuing programming as a career was a natural fit for my high-level
            intellectual interests and my desire for interactive and engaging
            work, similar to trade crafts and fine arts. Through my completion
            of UNC Chapel Hill's Full-Stack Web Development Coding Bootcamp, my
            conviction that this is the right path for me has only grown
            stronger.
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default AboutMe;
