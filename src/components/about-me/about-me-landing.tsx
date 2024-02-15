import { motion } from "framer-motion";
import "./about-me.css";

function AboutMeLanding() {
  return (
    <div className="about-me-landing-container">
      <motion.div>
        <h1 className="title-left">DESIGN</h1>
        <h1 className="title-left">FOCUSED</h1>
        <h1 className="title-left">FRONTEND</h1>
        <h1 className="title-left">DEVELOPER</h1>
      </motion.div>
    </div>
  );
}

export default AboutMeLanding;
