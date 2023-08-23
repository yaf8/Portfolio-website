import React from "react";
import { motion } from "framer-motion";
import "./Header.scss";
import { images } from "../../constants";

const Header = () => {
  return (
    <div className="app__header app__flex">
      <motion.div 
      whileInView={{ 
        x: [-100, 0], 
        opacity: [0, 1] 
      }}
      transition={{duration: .5}}
      className="app__header-info">
        <div className="app__header-badge">
          <div className="badge-cmp app__flex">
            <span></span>
          </div>
        </div>

      </motion.div>
    </div>
  );
};

export default Header;
