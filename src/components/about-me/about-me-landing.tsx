import { motion } from "framer-motion";
import "./about-me.css";

function AboutMeLanding() {
  return (
    <div className="about-me-landing-container">
      <motion.div className="title-container">
        <h1 className="title-left landing-clipped-text">DESIGN</h1>
        <h1 className="title-left landing-clipped-text">FOCUSED</h1>
        <h1 className="title-left landing-clipped-text">FRONTEND</h1>
        <h1 className="title-left landing-clipped-text">DEVELOPER</h1>
      </motion.div>
    </div>
  );
}

export default AboutMeLanding;
