import React from "react";

import Footer from "../components/Footer";

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
              <a href="/lolbox" class="ui huge violet button">
                Check It Out
              </a>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Landing;
