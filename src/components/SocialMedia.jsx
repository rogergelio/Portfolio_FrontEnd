import React from 'react';
import { BsInstagram, BsLinkedin } from 'react-icons/bs';

const SocialMedia = () => (
  <div className="app__social">
    <a href='https://www.linkedin.com/in/rogelio-torres-2b43711a0/'>
      <div>
        <BsLinkedin />
    </div>
    </a>
    <a href='https://www.instagram.com/rogergelioo/?hl=en'>
      <div>
      <BsInstagram />
    </div>
    </a>
    
  </div>
);

export default SocialMedia;