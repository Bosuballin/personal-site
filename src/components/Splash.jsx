import React from "react";
import { Card, Container } from "react-bootstrap";
import Capture from "../images/capturecreativity2.png";
import Typing from "./Typing";

function Splash() {
  document.addEventListener("scroll", handleClick);

  function handleClick() {
    document.getElementById("scrollDownBtn").className = "invis";
  }

  return (
    <>
      <Container bg={Capture} />
      <Card className="bg-transparent text-white">
        <Card.Img
          id="hello"
          src={Capture}
          alt="Card image"
          className="splash-image splash-container"
        />
        <Card.ImgOverlay>
          <Card.Title className="splash-title">I'm Beau.</Card.Title>
          <Card.Text className="card-text-lg splash-typing pt-4">
            <Typing />
          </Card.Text>
          <a
            onClick={handleClick}
            href="#portfolio"
            id="scrollDownBtn"
            className="btn-scroll"
          >
            <i class="fas fa-angle-double-down"></i>
          </a>
        </Card.ImgOverlay>
      </Card>
    </>
  );
}

export default Splash;
