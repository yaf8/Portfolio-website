/* eslint-disable no-unused-vars */
/* eslint-disable react-refresh/only-export-components */
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Tooltip } from "react-tooltip";

import { AppWrap, MotionWrap } from "../../wrapper";
import { urlFor, client } from "../../client";
import "./Skills.scss";

const Skills = () => {
  const [skills, setSkills] = useState([]);
  const [experiences, setExperiences] = useState([]);
  useEffect(() => {
    const skillsQuery = '*[_type == "skills"]';
    const query = '*[_type == "experiences"]';

    client
      .fetch(skillsQuery)
      .then((data) => {
        console.log("Sills : ", data);
        setSkills(data);
      })
      .catch((error) => {
        console.err("Skills fetch error : ", error);
      });

    client
      .fetch(query)
      .then((data) => {
        console.log("Experiences : ", data);
        setExperiences(data);
      })
      .catch((error) => {
        console.err("Experiences fetch error : ", error);
      });
  }, []);

  return (
    <>
    <h2 className="head-text">Skills & Experiences</h2>

    <div className="app__skills-container">
      <motion.div className="app__skills-list">
        {skills.map((skill) => (
          <motion.div
            whileInView={{ opacity: [0, 1] }}
            transition={{ duration: 0.5 }}
            className="app__skills-item app__flex"
            key={skill.name}
          >
            <div
              className="app__flex"
              style={{ backgroundColor: skill.bgColor }}
            >
              <img src={urlFor(skill.icon)} alt={skill.name} />
            </div>
            <p className="p-text">{skill.name}</p>
          </motion.div>
        ))}
      </motion.div>
      <div className="app__skills-exp">
        {experiences.map((experience) => (
          <motion.div
            className="app__skills-exp-item"
            key={experience.year}
          >
            <div className="app__skills-exp-year">
              <p className="bold-text">{experience.year}</p>
            </div>
            <motion.div className="app__skills-exp-works">
              {experience.works.map((work) => (
                <>
                  <motion.div
                    whileInView={{ opacity: [0, 1] }}
                    transition={{ duration: 0.5 }}
                    className="app__skills-exp-work"
                    data-tip
                    data-for={work.name}
                    key={work.name}
                  >
                    <div className="tool-tip-id">
                      <h4 className="bold-text">{work.name}</h4>
                    <p className="p-text">{work.company}</p>
                    </div>
                    
                  </motion.div>



                  <Tooltip
                    anchorSelect=".tool-tip-id"
                    place="top"
                    id={work.name}
                    effect="solid"
                    arrowColor="#fff"
                    className="skills-tooltip"
                  >
                    {work.desc}
                  </Tooltip>
                </>
              ))}
            </motion.div>
          </motion.div>
        ))}
      </div>
    </div>
  </>
  );
};

export default AppWrap(
  MotionWrap(Skills, 'app__skills'),
  'skills',
  'app__whitebg',
);
