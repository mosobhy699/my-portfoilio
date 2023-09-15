import React from 'react';
import { AiFillLinkedin } from "react-icons/ai"
import { BsWhatsapp } from 'react-icons/bs';
import { FaFacebookF } from 'react-icons/fa';

const SocialMedia = () => (
  <div className="app__social">
    <div>
      <a href="https://www.linkedin.com/in/mohamed-sobhy-40b2b1290/" target='_blank' ><AiFillLinkedin /></a>

    </div>
    <div>
      <a href='https://wa.me/201550327073' target='_blank' ><BsWhatsapp /></a>

    </div>
    <div>
      <a href='https://www.facebook.com/profile.php?id=100073344736494' target='_blank' ><FaFacebookF /></a>

    </div>

  </div>
);

export default SocialMedia;