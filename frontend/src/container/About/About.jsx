/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import "./About.scss";
import { images } from '../../constants'
import { motion } from "framer-motion";

const About = () => {
  const abouts = [
    {
      title: "Wed Development",
      description: "I am a good web developer.",
      imgUrl: images.about01,
    },
    {
      title: "Mobile Development",
      description: "I am a good mobile application developer.",
      imgUrl: images.about02,
    },
    {
      title: "Programmer",
      description: "I am a good programmer.",
      imgUrl: images.about03,
    },
    {
      title: "UI/UX designer",
      description: "I am a good UI/UX designer.",
      imgUrl: images.about04,
    },
  ];

  return (
    <>
      <h2 className="head-text">
        I know that
        <span> Good Development </span>
        <br />
        means
        <span> Good Business</span>
      </h2>
      <div className="app__profiles">
        {abouts.map((about, index) => (
            <motion.div
              whileInView={{opacity: 1}}
              whileHover={{ scale: 1.1}}
              transition={{ duration: .5, type: 'tween'}}
              className='app__profile-item'
              key={about.title + index}>
                <img src={about.imgUrl} alt={about.title} />
                <h2 className="bold-text" style={{marginTop: 20}}>{about.title}</h2>
                <p className="p-text" style={{marginTop: 10}}>{about.description}</p>
              </motion.div>
          ))}
      </div>
    </>
  );
};

export default About;
