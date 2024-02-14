import AboutMeHeader from "./about-me-header";
import AboutMeLanding from "./about-me-landing";
import { motion } from "framer-motion";
import AboutMeBottom from "./about-me-bottom";
import AboutMeMiddle from "./about-me-middle";
import "./about-me.css";

function AboutMe() {
  return (
    <motion.div
      className="App"
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.5,
        delay: 0.2,
        ease: [0, 0.71, 0.2, 1.01],
      }}
    >
      <div className="about-me-page-container">
        <div className="about-me-scroll-section-1">
          <AboutMeLanding />
        </div>

        <div className="about-me-scroll-section-2">
          <AboutMeMiddle />
        </div>

        <div className="about-me-scroll-section-3">
          <AboutMeBottom />
        </div>
      </div>
    </motion.div>
  );
}

export default AboutMe;
