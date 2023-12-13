import AboutMeHeader from "./about-me-header";
import AboutMeBody from "./about-me-body";
import AboutMeMiddle from "./about-me-middle";
import { motion } from "framer-motion";

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
      <AboutMeHeader />
      <AboutMeHeader />
      <AboutMeHeader />
      <AboutMeHeader />
      <AboutMeMiddle />
      <AboutMeBody />
    </motion.div>
  );
}

export default AboutMe;
