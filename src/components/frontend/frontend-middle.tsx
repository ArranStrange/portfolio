import "./frontend.css";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import { MdOutlineKeyboardDoubleArrowDown } from "react-icons/md";

// Motion Framer object to control visible & hidden
const fadeInVariants = {
  visible: { opacity: 1, scale: 1, transition: { duration: 2 } },
  hidden: { opacity: 0, scale: 1 },
};

function FrontendMiddle() {
  // import Motion Framer useAnimation hook
  // import inView from react-intersection-observer to ref view point - returns boolean true if in view, false if not.
  const controls = useAnimation();
  const [ref, inView] = useInView();
  useEffect(() => {
    // if statement to set use object visible when useInView hoot return true
    if (inView) {
      controls.start("visible");
    }
    // dependencies
  }, [controls, inView]);

  return (
    <div className="frontend-white-container">
      <div className="frontend-middle-text">
        <motion.div
          ref={ref}
          animate={controls}
          initial="hidden"
          variants={fadeInVariants}
          className="frontend-middle-text"
        >
          <motion.h3
            ref={ref}
            initial={{ x: -1000, opacity: 1 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -2000 }}
            transition={{ duration: 1, type: "tween", delay: inView ? 0 : 2 }}
          >
            HTML
          </motion.h3>
          <motion.h3
            ref={ref}
            initial={{ x: -2000, opacity: 1 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -2000 }}
            transition={{ duration: 1, type: "tween", delay: 0.2 }}
            style={{ marginTop: "-10px" }}
          >
            CSS
          </motion.h3>
          <motion.h3
            ref={ref}
            initial={{ x: -2000, opacity: 1 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -2000 }}
            transition={{ duration: 1, type: "tween", delay: 0.4 }}
            style={{ marginTop: "-10px" }}
          >
            TAILWIND
          </motion.h3>
          <motion.h3
            ref={ref}
            initial={{ x: -2000, opacity: 1 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -2000 }}
            transition={{ duration: 1, type: "tween", delay: 0.6 }}
            style={{ marginTop: "-10px" }}
          >
            JAVASCRIPT
          </motion.h3>
          <motion.h3
            ref={ref}
            initial={{ x: -2000, opacity: 1 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -2000 }}
            transition={{ duration: 1, type: "tween", delay: 0.8 }}
            style={{ marginTop: "-10px" }}
          >
            TYPESCRIPT
          </motion.h3>
          <motion.h3
            ref={ref}
            initial={{ x: -2000, opacity: 1 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -2000 }}
            transition={{ duration: 1, type: "tween", delay: 0.1 }}
            style={{ marginTop: "-10px" }}
          >
            REACT
          </motion.h3>
        </motion.div>
      </div>
      <motion.div
        className="arrow"
        initial={{ y: "-100vh", x: -20, opacity: 0 }}
        animate={inView ? { y: 0, opacity: 1 } : { y: -1000 }}
        transition={{ delay: 0.2, duration: 1, type: "tween" }}
        style={{ marginTop: "-20px" }}
      >
        <MdOutlineKeyboardDoubleArrowDown className="arrow" />
      </motion.div>
    </div>
  );
}

export default FrontendMiddle;
