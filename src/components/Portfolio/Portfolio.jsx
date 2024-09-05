import React from "react";
import { motion } from "framer-motion";
import css from "./Portfolio.module.scss";
import { fadeIn, staggerChildren, textVariant, textVariant2 } from "../../utils/motion";
const Portfolio = () => {
  return (
    <motion.section
    variants={staggerChildren}
    initial="hidden"
    whileInView="show"
    viewport={{ once: false, amount: 0.25 }}
    className={`paddings ${css.wrapper}`}>

      <a className="anchor" id="portfolio"></a>

      <div className={`innerWidth flexCenter ${css.container}`}>


        <motion.div variants={textVariant(.4)} className={`flexCenter ${css.heading}`}>
          <div>
            <span className="primaryText">My Latest Works</span>
            <p style={{marginTop: "10px"}}>Perfect solution for digital experience</p>
          </div>
          <span className="secondaryText">Explore More Works</span>
        </motion.div>


        

<div className={`flexCenter ${css.showCase}`}>
  <motion.a
    href="https://yash24-03.github.io/Property/"
    target="_blank"
    variants={fadeIn("up", "tween", .5, .6)}
    whileHover={{ scale: 1.05 }}
  >
    <motion.img src="./showCase1.png" alt="project 1" />
  </motion.a>

  <motion.a
    href="https://yash24-03.github.io/Makan/"
    target="_blank"
    variants={fadeIn("up", "tween", .7, .6)}
    whileHover={{ scale: 1.05 }}
  >
    <motion.img src="./showCase2.png" alt="project 2" />
  </motion.a>

  <motion.a
    href="https://yash24-03.github.io/tour/"
    target="_blank"
    variants={fadeIn("up", "tween", .9, .6)}
    whileHover={{ scale: 1.05 }}
  >
    <motion.img src="./showCase3.png" alt="project 3" />
  </motion.a>

  <motion.a
    href="https://yash24-03.github.io/archiark/"
    target="_blank"
    variants={fadeIn("up", "tween", .9, .6)}
    whileHover={{ scale: 1.05 }}
  >
    <motion.img src="./showCase4.png" alt="project 4" />
  </motion.a>

  <motion.a
    href="https://yash24-03.github.io/photozone/"
    target="_blank"
    variants={fadeIn("up", "tween", .9, .6)}
    whileHover={{ scale: 1.05 }}
  >
    <motion.img src="./showCase5.png" alt="project 5" />
  </motion.a>
</div>

      </div>
    </motion.section>
  );
};

export default Portfolio;
