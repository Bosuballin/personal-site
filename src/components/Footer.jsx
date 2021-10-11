import React from "react";
import Profile from "../images/profile.png";

const date = new Date().getFullYear();

function Footer() {
  return (
    <footer className="page-footer font-small text-white pt-4 bg-dark footer-styles">
      <div className="container-fluid text-center text-md-left">
        <div className="row">
          <div className="col-md-6 mt-md-0">
            <h5 className="text-uppercase">Follow:</h5>
            <ul id="socials">
              <li className="footer-social-li px-2">
                <a href="https://www.linkedin.com/in/beau-behrends/">
                  <i class="fab footer-icon fa-linkedin"></i>
                </a>
              </li>
              <li className="footer-social-li px-2">
                <a
                  href="https://github.com/Bosuballin"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i class="fab footer-icon fa-github-square"></i>
                </a>
              </li>
              <li className="footer-social-li px-2">
                <a
                  href="https://www.youtube.com/channel/UCCPfBkprR4HfrGtoVUSa2tQ"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i class="fab footer-icon fa-youtube-square"></i>
                </a>
              </li>
              <li className="footer-social-li px-2">
                <a
                  href="https://www.twitch.tv/bosuballin"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i class="fab footer-icon fa-twitch"></i>
                </a>
              </li>
              <li className="footer-social-li px-2">
                <a
                  href="https://www.mixcloud.com/Beaudacity/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i class="fab footer-icon fa-mixcloud"></i>
                </a>
              </li>
            </ul>
          </div>

          <hr className="clearfix w-100 d-md-none pb-0" />

          <div className="col-md-3 mb-md-0 mb-3">
            <h5 className="text-uppercase">
              Nav
              <a class="footer-link" href="#hello">
                <i class="fas fa-arrow-up ps-2"></i>
              </a>
            </h5>
            <ul className="list-unstyled">
              <li>
                <a class="footer-link" href="#skills">
                  Skills
                </a>
              </li>
              <li>
                <a class="footer-link" href="#hobbies">
                  Hobbies
                </a>
              </li>
              <li>
                <a class="footer-link" href="#portfolio">
                  Portfolio
                </a>
              </li>
              <li>
                <a class="footer-link" href="#cv">
                  Contact Me
                </a>
              </li>
            </ul>
          </div>

          <div className="col-md-3 mb-md-0 mb-3">
            <h5 className="text-uppercase">External</h5>
            <ul className="list-unstyled">
              <li>
                <a
                  class="footer-link"
                  href="https://www.dropbox.com/s/sv7wsl08ueuldof/Beau_Behrends_Resume.PDF?dl=0"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Resume
                </a>
              </li>
              <li>
                <a
                  class="footer-link"
                  href="https://github.com/Bosuballin"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Github
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="footer-copyright text-center py-3">
        <img
          alt=""
          src={Profile}
          width="40"
          height="40"
          className="d-inline-block align-center custom-logo me-3"
        />
        © {date} Copyright
        <a className="copy-link" href="#!">
          {" "}
          Beaubehrends.com
        </a>
      </div>
    </footer>
  );
}

export default Footer;
