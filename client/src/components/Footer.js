import React from "react";

const Footer = () => {
  return (
    <div class="ui inverted vertical footer segment">
      <div class="ui container">
        <div class="ui stackable inverted divided equal height stackable grid">
          <div class="three wide column">
            <h4 class="ui inverted header">About</h4>
            <div class="ui inverted link list">
              <a
                href="https://github.com/zomg830/Giphy-App"
                class="item"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i class="github alternate icon" /> GitHub
              </a>
              <a
                href="https://mattfaubel.com/"
                class="item"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i class="folder open outline icon" /> Matt's Portfolio
              </a>
              <a
                href="https://www.linkedin.com/in/matthew-faubel-1232a857/"
                class="item"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i class="linkedin alternate icon" /> Matt's LinkedIn
              </a>
            </div>
          </div>
          <div class="three wide column">
            <h4 class="ui inverted header">Services</h4>
            <div class="ui inverted link list">
              <a
                href="https://unsplash.com/"
                class="item"
                target="_blank"
                rel="noopener noreferrer"
              >
                Unsplash
              </a>
              <a
                href="https://giphy.com"
                class="item"
                target="_blank"
                rel="noopener noreferrer"
              >
                Giphy
              </a>
              <a
                href="https://youtube.com"
                class="item"
                target="_blank"
                rel="noopener noreferrer"
              >
                Youtube
              </a>
            </div>
          </div>
          <div class="seven wide column">
            <p>© 2019 Matt Faubel</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
