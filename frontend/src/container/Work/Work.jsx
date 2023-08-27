/* eslint-disable react-refresh/only-export-components */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import "./work.scss";
import { motion } from "framer-motion";
import { AiFillEye, AiFillGithub } from "react-icons/ai";
import { urlFor, client } from "../../client";
import { AppWrap } from "../../wrapper";

const Work = () => {
  const [works, setWorks] = useState([]);
  const [filterWorks, setFilterWorks] = useState([]);
  const [activeFilter, setActiveFilter] = useState("All");
  const [animateCard, setAnimateCard] = useState({ y: 0, opacity: 1 });

  const handleWorkFilter = (item) => {};

  useEffect(() => {
    const query = '*[_type == "works"]';
    client
      .fetch(query)
      .then((data) => {
        console.log("Works : ", data);
        setWorks(data);
        setFilterWorks(data);
      })
      .catch((error) => {
        console.log("Fetch Work Error : ", error);
      });
  }, []);

  return (
    <>
      <h2 className="head-text">
        My creative
        <span> Portfolio </span>
        <br />
      </h2>
      <div className="app__work-filter">
        {["All", "UI/UX", "Web App", "Mobile App", "React JS"].map(
          (item, index) => (
            <div
              key={index}
              onClick={() => handleWorkFilter(item)}
              className={`app__work-filter-item app__flex p-text ${
                activeFilter === item ? "item-active" : ""
              }`}
            >
              {item}
            </div>
          )
        )}
      </div>
      <motion.div
        animate={animateCard}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className="app__work-portfolio"
      >
        {filterWorks.map((work, index) => (
          <div className="app__work-item app__flex" key={index}>
            <div className="app__work-img app__flex">
              <img src={urlFor(work.imgUrl)} alt={work.name} />
              <motion.div
                whileHover={{opacity: [0, 1]}}
                transition={{duration: .25, ease: 'easeInOut', staggerChildren: 0.5}}
                className='app__work-hover app__flex'  
              >
                <a href={work.projectLink} target="_blank" rel="noreferrer">
                  <motion.div
                    whileHover={{scale: [0, 1]}}
                    whileInView={{scale: [1, 0.9]}}
                    transition={{duration: 0.25}}
                    className='app__flex'
                  >
                    <AiFillEye />
                  </motion.div>
                </a>
                <a href={work.projectLink} target="_blank" rel="noreferrer">
                  <motion.div
                    whileHover={{scale: [0, 1]}}
                    whileInView={{scale: [1, 0.9]}}
                    transition={{duration: 0.25}}
                    className='app__flex'
                  >
                    <AiFillGithub />
                  </motion.div>
                </a>

              </motion.div>
            </div>

            <div className="app__work-content app__flex">
              <h4 className="bold-text">{work.title}</h4>
              <p className="p-text" style={{marginTop: 10}}>{work.description}</p>
              <div className="app__work-tag app__flex">
                <p className="p-text">{work.tags[0]}</p>
              </div>
            </div>
          </div>
        ))}
      </motion.div>
    </>
  );
};

export default AppWrap(Work, 'work');
