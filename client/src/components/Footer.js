import React from 'react';

const Footer = () => {
  return (
    <div className='ui inverted vertical footer segment'>
      <div className='ui container'>
        <div className='ui stackable inverted divided equal height stackable grid'>
          <div className='three wide column'>
            <h4 className='ui inverted header'>About</h4>
            <div className='ui inverted link list'>
              <a
                href='https://github.com/zomg830/Lolbox-Media'
                className='item'
                target='_blank'
                rel='noopener noreferrer'
              >
                <i className='github alternate icon' /> GitHub
              </a>
              <a
                href='https://mattfaubel.com/'
                className='item'
                target='_blank'
                rel='noopener noreferrer'
              >
                <i className='folder open outline icon' /> Matt's Portfolio
              </a>
              <a
                href='https://www.linkedin.com/in/matthew-faubel-1232a857/'
                className='item'
                target='_blank'
                rel='noopener noreferrer'
              >
                <i className='linkedin alternate icon' /> Matt's LinkedIn
              </a>
            </div>
          </div>
          <div className='three wide column'>
            <h4 className='ui inverted header'>Services</h4>
            <div className='ui inverted link list'>
              <a
                href='https://unsplash.com/'
                className='item'
                target='_blank'
                rel='noopener noreferrer'
              >
                Unsplash
              </a>
              <a
                href='https://giphy.com'
                className='item'
                target='_blank'
                rel='noopener noreferrer'
              >
                Giphy
              </a>
              <a
                href='https://youtube.com'
                className='item'
                target='_blank'
                rel='noopener noreferrer'
              >
                Youtube
              </a>
            </div>
          </div>
          <div className='seven wide column'>
            <p>© 2019 Matt Faubel</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
