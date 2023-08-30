/* eslint-disable no-unused-vars */
import React from 'react';
import { BsInstagram, BsLinkedin } from 'react-icons/bs';
import { FaTelegram } from 'react-icons/fa';

const SocialMedia = () => (
  <div className="app__social">
    <div>
      <a href='https://t.me/Yafetema' target='_blank' rel="noreferrer">
        <FaTelegram />
      </a>
    </div>
    <div>
    <a href='https://linkedin.com/in/yaf8' target='_blank' rel="noreferrer">
        <BsLinkedin />
      </a>
    </div>
    <div>
    <a href='https://www.instagram.com/yaf8ema/' target='_blank' rel="noreferrer">
        <BsInstagram />
      </a>
    </div>
  </div>
);

export default SocialMedia;