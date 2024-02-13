import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import BookStore from "../../Assets/Projects/BookStore.png"

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={BookStore}
              title="E-commerce"
              description="Explore our bookshop online, easily add books to your cart, and enjoy a smooth checkout experience for all your literary finds!"
              ghLink="https://github.com/delfiduar/E-commerce-Books"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;