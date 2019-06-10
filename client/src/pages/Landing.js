import React from "react";

const Landing = () => {
  return (
    <div class="pusher">
      <div class="ui vertical stripe segment">
        <div class="ui middle aligned stackable grid container">
          <div class="row">
            <div class="eight wide column">
              <h3 class="ui header">We Help You Find Joy</h3>
              <p>
                Lolbox gives you the tools you need to find the best reaction
                gifs and most stunning filler photos for your blog.
              </p>
              <h3 class="ui header">We bring lol into irl</h3>
              <p>
                Yes that's right, you thought it was the stuff of dreams, lolbox
                can help you find and share the most appropriate gifs and images
                for any situation.
              </p>
            </div>
            <div class="six wide right floated column">
              <img
                src="https://dummyimage.com/640x360/fff/aaa"
                class="ui large bordered rounded image"
                alt="lolbox logo"
              />
            </div>
          </div>
          <div class="row">
            <div class="center aligned column">
              <a href="/lolbox" class="ui huge purple button">
                Check It Out
              </a>
            </div>
          </div>
        </div>
      </div>
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
    </div>
  );
};

export default Landing;
