import React, { useState } from "react-bootstrap";
import {
  Container,
  Col,
  Row,
  InputGroup,
  FormControl,
  Form,
  Button,
} from "react-bootstrap";
import Profile from "../images/profile.png";

function CV() {
  return (
    <>
      <Container className="pb-5 mb-5 cv-container">
        <hr className="cv-hr"></hr>
        <Row>
          <h1 className="py-5 mb-5 mt-3 cv-heading">
            Interested in working with me?
          </h1>
          <Form
            method="post"
            action="mailto:Beaubehrends@gmail.com"
            enctype="text/plain"
          >
            <InputGroup size="lg">
              <InputGroup.Text id="inputGroup-sizing-lg">
                <Button type="submit" variant="light">
                  {" "}
                  <i class="fas fa-paper-plane"></i>{" "}
                </Button>{" "}
              </InputGroup.Text>
              <FormControl
                aria-label="Large"
                aria-describedby="inputGroup-sizing-sm"
                name="Message"
                placeholder="Let's talk!"
              />
            </InputGroup>
          </Form>
          <hr className="space-hr"></hr>
          <Col className="mb-5 zoom" md={4}>
            <a
              className="custom-link"
              href="https://www.dropbox.com/s/sv7wsl08ueuldof/Beau_Behrends_Resume.PDF?dl=0"
              target="_blank"
              rel="noopener noreferrer"
            >
              CV / Resume
            </a>
          </Col>
          <Col className="mb-5 zoom" md={{ span: 4, offset: 4 }}>
            <a
              className="custom-link"
              href="https://github.com/Bosuballin"
              target="_blank"
              rel="noopener noreferrer"
            >
              Github
            </a>
          </Col>
          <hr className="cv-hr"></hr>
        </Row>
      </Container>
    </>
  );
}

export default CV;
