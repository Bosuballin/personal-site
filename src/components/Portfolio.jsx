import React from "react";
import { Carousel, Container } from "react-bootstrap";
import Simonsays from "../images/Simonsays.png";
import Munsonmusic from "../images/MunsonMusicWebsite.png";
import Todolist from "../images/ToDoListApp.png";
import Newsletter from "../images/NewsletterApp.png";
import Blog from "../images/BlogTemplate.png";

function Portfolio() {
  return (
    <>
      <Container id="portfolio" className="py-5 cv-container">
        <h1 className="mt-4 pt-5 cv-heading">Check out my work.</h1>
      </Container>

      <Carousel fade className="portfolio-container mt-5 pt-4">
        <Carousel.Item>
          <img
            className="d-block mx-auto carousel-img"
            src={Simonsays}
            alt="First slide"
          />

          <Carousel.Caption>
            <h3>Simon Says Game</h3>
            <p>
              A simple game of Simon says coded using Javascript that runs in
              your browser! Check it out{" "}
              <a
                className="portfolio-link"
                href="https://bosuballin.github.io/ssgame/"
                target="_blank"
                rel="noopener noreferrer"
              >
                HERE.
              </a>
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block mx-auto carousel-img"
            src={Munsonmusic}
            alt="Second slide"
          />

          <Carousel.Caption>
            <h3>Drum Lesson Website</h3>
            <p>
              A mockup website for drum lessons made using HTML5, CSS, and
              Reactjs. Check it out{" "}
              <a
                className="portfolio-link"
                href="https://munson-website-demo.herokuapp.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                HERE.
              </a>
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block mx-auto carousel-img"
            src={Todolist}
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>To Do List App</h3>
            <p>
              An interactive to do list app. Made using Nodejs, Express,
              MongoDB, and Mongoose.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block mx-auto carousel-img"
            src={Newsletter}
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>Newsletter App</h3>
            <p>
              A Newsletter signup app. Made using Nodejs, Express, Postman, and
              Mailchimp.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block mx-auto carousel-img"
            src={Blog}
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>Blog App Template</h3>
            <p>
              A blog web app made using Nodejs, Express, MongoDB and Mongoose.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <hr id="cv" className="space-hr"></hr>
    </>
  );
}

export default Portfolio;
