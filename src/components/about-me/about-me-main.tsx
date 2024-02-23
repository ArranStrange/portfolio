import AboutMeLanding from "./about-me-landing";
import { motion } from "framer-motion";
import AboutMeBottom from "./about-me-bottom";
import AboutMeMiddle from "./about-me-middle";
import "./about-me.css";

function AboutMe() {
  return (
    <motion.div
      className="App"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{
        duration: 0.5,
        delay: 0.2,
        ease: [0, 0.71, 0.2, 1.01],
      }}
    >
      <div className="about-me-page-container">
        <div className="scroll-section">
          <AboutMeLanding />
        </div>

        <div className="scroll-section">
          <AboutMeMiddle />
        </div>

        <div className="scroll-section">
          <AboutMeBottom />
        </div>
      </div>
    </motion.div>
  );
}

export default AboutMe;
