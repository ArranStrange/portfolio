import "./frontend.css";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import { MdOutlineKeyboardDoubleArrowDown } from "react-icons/md";

function FrontendMiddle() {
  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [controls, inView]);

  return (
    <motion.div
      className="frontend-clipped-text frontend-white-container"
      ref={ref}
    >
      <div className="title-container">
        <motion.h1
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 1 }}
        >
          CSS
        </motion.h1>
        <motion.h1
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          HTML
        </motion.h1>
        <motion.h1
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
        >
          REACT
        </motion.h1>
        <motion.h1
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
        >
          TAILWIND
        </motion.h1>
        <motion.h1
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
        >
          TYPESCRIPT
        </motion.h1>
        {/* <motion.h1
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 1, delay: 1 }}
        >
          JAVASCRIPT
        </motion.h1> */}
      </div>
      <motion.div
        className="arrow"
        initial={{ y: "-100vh", x: -20, opacity: 0 }}
        animate={inView ? { y: 0, opacity: 1 } : { y: -1000 }}
        transition={{ delay: 0.2, duration: 1, type: "tween" }}
        style={{ marginBottom: "25px" }}
      >
        <MdOutlineKeyboardDoubleArrowDown className="arrow" />
      </motion.div>
    </motion.div>
  );
}

export default FrontendMiddle;
