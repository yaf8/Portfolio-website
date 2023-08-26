/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import "./work.scss";
import { motion } from "framer-motion";
import { AiFillEye, AiFillGuthub } from "react-icons/ai";
import { urlFor, client } from "../../client";
import { AppWrap } from "../../wrapper";

const Work = () => {
  return (
    <>
      <h2 className="head-text">
        I know that
        <span> Good Development </span>
        <br />
        means
        <span> Good Business</span>
      </h2>
    </>
  );
};

export default Work;
