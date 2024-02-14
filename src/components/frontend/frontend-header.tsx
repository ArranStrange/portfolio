import "./frontend.css";
import { motion } from "framer-motion";
import { MdOutlineKeyboardDoubleArrowDown } from "react-icons/md";

function FrontendHeader() {
  return (
    <div className="frontend-section">
      <div className="frontend-title-container">
        <motion.h1
          initial={{ y: "100vh", x: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, type: "tween" }}
        >
          FRONT
        </motion.h1>
        <motion.h1
          initial={{ y: "100vh", x: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 1, type: "tween" }}
          style={{ marginTop: "-15px" }}
        >
          END
        </motion.h1>
      </div>
      <motion.div
        className="arrow"
        initial={{ y: "-100vh", x: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2, duration: 1, type: "tween" }}
        style={{ marginTop: "-20px" }}
      >
        <MdOutlineKeyboardDoubleArrowDown className="arrow" />
      </motion.div>
    </div>
  );
}

export default FrontendHeader;
