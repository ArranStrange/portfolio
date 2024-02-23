import FrontendHeader from "./frontend-header";
import { motion } from "framer-motion";
import FrontendMiddle from "./frontend-middle";
import FrontendAbout from "./frontend-about";
import "./frontend.css";
import FrontendBottom from "./frontend-bottom";
import FrontendAbout2 from "./frontend-about-2";
import FrontendAbout3 from "./frontend-about-3";

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
        <div className="scroll-section">
          <FrontendHeader />
        </div>
        <div className="scroll-section">
          <FrontendMiddle />
        </div>
        <div className="scroll-section">
          <FrontendAbout />
        </div>
        <div className="scroll-section">
          <FrontendAbout2 />
        </div>
        <div className="scroll-section">
          <FrontendAbout3 />
        </div>
        <div className="scroll-section">
          <FrontendBottom />
        </div>
      </div>
    </motion.div>
  );
}

export default Frontend;
