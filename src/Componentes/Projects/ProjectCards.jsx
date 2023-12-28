import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { BsGithub } from "react-icons/bs";

function ProjectCards(props) {
  return (
    <Card className="project-card-view">
      <Card.Img variant="top" src={props.imgPath} alt="card-img" />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text style={{ textAlign: "left", width: "100%" }}>
              {props.description}
        </Card.Text>
      </Card.Body>
      <Card.Footer className="text-muted">
          <Button variant="primary" href={props.ghLink} target="_blank" style={{display: "block"}}>
            <BsGithub /> &nbsp;
            {props.isBlog ? "Blog" : "GitHub"}
          </Button>
        /n
      </Card.Footer>
      
    </Card>
  );
}
export default ProjectCards;