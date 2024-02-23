import { motion } from "framer-motion";
import "./about-me.css";

function AboutMeLanding() {
  return (
    <div className="about-me-landing-container">
      <motion.div className="title-container">
        <motion.h1
          initial={{ y: "-100vh", x: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1, x: 0 }}
          transition={{ delay: 4.2, duration: 0.8, type: "tween" }}
          className="title-left"
          style={{ marginTop: "175px" }}
        >
          DESIGN
        </motion.h1>
        <motion.h1
          initial={{ y: "-100vh", x: 200, opacity: 0 }}
          animate={{ y: 0, opacity: 1, x: 0 }}
          transition={{ delay: 4.2, duration: 0.6, type: "tween" }}
          className="title-left"
        >
          FOCUSED
        </motion.h1>
        <motion.h1
          initial={{ y: "-100vh", x: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1, x: 0 }}
          transition={{ delay: 4.2, duration: 0.4, type: "tween" }}
          className="title-left"
        >
          FRONTEND
        </motion.h1>
        <motion.h1
          initial={{ y: "-100vh", x: 300, opacity: 0 }}
          animate={{ y: 0, opacity: 1, x: 0 }}
          transition={{ delay: 4.2, duration: 0.2, type: "tween" }}
          className="title-left"
        >
          DEVELOPER
        </motion.h1>
      </motion.div>
    </div>
  );
}

export default AboutMeLanding;
