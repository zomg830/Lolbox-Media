import React from "react";

import Footer from "../components/Footer";

const Landing = () => {
  return (
    <div className="pusher">
      <div className="ui vertical stripe segment">
        <div className="ui middle aligned stackable grid container">
          <div className="row">
            <div className="eight wide column">
              <h3 className="ui header">We Help You Find Joy</h3>
              <p>
                Lolbox gives you the tools you need to find the best reaction
                gifs and most stunning filler photos for your blog.
              </p>
              <h3 className="ui header">We bring lol into irl</h3>
              <p>
                Yes that's right, you thought it was the stuff of dreams, lolbox
                can help you find and share the most appropriate gifs and images
                for any situation.
              </p>
            </div>
            <div className="six wide right floated column">
              <img
                src="https://images.unsplash.com/photo-1472162072942-cd5147eb3902?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjY0NTI2fQ"
                className="ui large bordered rounded image"
                alt="lolbox logo"
              />
            </div>
          </div>
          <div className="row">
            <div className="center aligned column">
              <a href="/lolbox" className="ui huge violet button">
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
