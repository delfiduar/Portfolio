import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Delfina Duarte </span>
            from <span className="purple"> Buenos Aires, Argentina.</span>
            <br />
            I am currently looking for my first job as a <span className="purple">Front-end Developer</span>.
            <br />
            I am a <span className="purple"> Computer Engineering </span> student.
            <br />
            <br />
            Apart from coding, there are other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Create Art 🎨
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling ⛰️ 
            </li>
            <li className="about-activity">
              <ImPointRight /> Playing Sports ⚽
            </li>
          </ul>
          
          <p style={{ color: "rgb(155 126 172)" }}>
            "It's amazing what you can do when you try!"{" "}
          </p>
          <footer className="blockquote-footer">delfiduart</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;