import FrontendHeader from "./frontend-header";
import FrontendLanding from "./frontend-landing";
import { motion } from "framer-motion";
import FrontendMiddle from "./frontend-middle";
import FrontendBottom from "./fronend-bottom";
import "./frontend.css";

function Frontend() {
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
      <div className="frontend-page-container">
        <div className="about-me-scroll-section-1">
          <FrontendHeader />
          <FrontendHeader />
          <FrontendHeader />
          <FrontendHeader />
          <FrontendLanding />
        </div>
        <div className="about-me-scroll-section-2">
          <FrontendMiddle />
        </div>
        <div className="about-me-scroll-section-3">
          <FrontendBottom />
        </div>
      </div>
    </motion.div>
  );
}

export default Frontend;
