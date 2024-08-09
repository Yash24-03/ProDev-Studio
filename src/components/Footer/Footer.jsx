import React from "react";
import { footerVariants, staggerChildren } from "../../utils/motion";
import { FaLinkedin } from "react-icons/fa";
import css from "./Footer.module.scss";
import {motion} from 'framer-motion'
const Footer = () => {
  return (
    <motion.section
    variants={staggerChildren}
    initial="hidden"
    whileInView="show"
    viewport={{ once: false, amount: 0.25 }}
    className={`paddings ${css.wrapper}`}>
      
      
      <motion.div
      variants={footerVariants}
      className={`innerWidth yPaddings flexCenter ${css.container}`}>
        <div className={css.left}>
          <span className="primaryText">
            Let's make something <br />
            amazing together.
          </span>
          <span className="primaryText">
            Start by <a href="mailto:infoprodevstudio@gmail.com">saying hi</a>
          </span>
        </div>

        <div className={css.right}>
          <div className={css.info}>
            <span className="secondaryText">Information</span>
            {/* <p>145 New York, FL 5467, USA</p> */}
          </div>
          <ul className={css.menu}>
            <a href="https://www.linkedin.com/company/prodev-studio/"><li>LinkedIn</li></a>
            <a href="https://www.instagram.com/infoprodev/"><li>Instagram</li></a>
            <a href="https://x.com/StudioProdev"><li>Twitter</li></a>
            <li></li>
          </ul>
        </div>
      </motion.div>
    </motion.section>
  );
};

export default Footer;
