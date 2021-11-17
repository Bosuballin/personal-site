import React from "react";
import custompc from "../images/custompc.png";
import design from "../images/design2.png";
import Model3D from "../images/model3d.png";
import OBS from "../images/OBS.png";
import { Container, Row, Col } from "react-bootstrap";

function Hobbies() {
  return (
    <>
      <hr className="my-3"></hr>
      <h2 id="hobbies" class="hobbies-title">
        My Hobbies
      </h2>
      <hr className="my-5"></hr>
      <Row>
        <Container className="hobby-container col-lg-6">
          <img class="design-img zoom" src={design} alt="customdesign-pic" />
          <div class="hobby-row">
            <h3>Graphic Design</h3>
            <p>
              My passion for design started in grade school where I often spent
              recess drawing in my notebook. When home I navigated the internet
              seeking new avenues to foster my creativity with the discovery of
              Photoshop, Windows Movie Maker, and novice web design using
              GeoCities. In time those interests would lead me to web
              development.
            </p>
          </div>
        </Container>

        <Container className="hobby-container col-lg-6">
          <img class="custompc-img zoom" src={custompc} alt="custompc-pic" />
          <div class="hobby-row">
            <h3>Windows & Hardware</h3>
            <p>
              Windows became my gateway to unique worlds full of mystery,
              puzzles and adventures. Games like Myst and Pitfall would ignite
              my interest to research the operating systems and hardware that
              made them possible. Inevitably this matured into building my own
              high end computers.
            </p>
          </div>
        </Container>
      </Row>

      <Row>
        <Container className="hobby-container col-lg-6">
          <img class="obs-img zoom" src={OBS} alt="obs-pic" />
          <div class="hobby-row">
            <h3>Video & Sound Production</h3>
            <p>
              Creating music and video content for people who share the same
              interests and passions as I do is exciting! I've made original
              music and remixes using Logic Pro and Ableton Studios. I also
              produce video content on my Twitch and Youtube channels.
            </p>
          </div>
        </Container>

        <Container className="hobby-container col-lg-6">
          <img class="model-3d zoom" src={Model3D} alt="custompc-pic" />
          <div class="hobby-row">
            <h3>3D Art & Animation</h3>
            <p>
              My first experience with 3D art was in highschool using Poser.
              Since being introduced to VRChat my interest again grew and I have
              branched out making custom models & animations in VROID, Unity,
              and Blender.
            </p>
          </div>
        </Container>
      </Row>

      <hr></hr>
    </>
  );
}

export default Hobbies;
