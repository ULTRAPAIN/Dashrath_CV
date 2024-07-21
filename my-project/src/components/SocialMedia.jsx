import React from 'react';
import { BsLinkedin, BsGithub, BsTwitter } from 'react-icons/bs';

const SocialMedia = () => (
  <div className="app__social">
    <div>
      <a href="https://github.com/ULTRAPAIN" target="_blank" rel="noopener noreferrer">
        <BsGithub />
      </a>
    </div>
    <div>
      <a href="https://www.linkedin.com/in/dashrath-patel-86a44b231/" target="_blank" rel="noopener noreferrer">
        <BsLinkedin />
      </a>
    </div>
    <div>
      <a href="https://x.com/Dashrath0810" target="_blank" rel="noopener noreferrer">
        <BsTwitter />
      </a>
    </div>
  </div>
);

export default SocialMedia;