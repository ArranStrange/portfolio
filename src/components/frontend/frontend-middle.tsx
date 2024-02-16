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
    <motion.div className="clipped-text frontend-white-container" ref={ref}>
      <motion.h2
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 1 }}
        style={{ marginTop: 50, fontSize: "9rem" }}
        className="title-right"
      >
        HTML
      </motion.h2>
      <motion.h2
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 1, delay: 0.2 }}
        style={{ fontSize: "9rem" }}
        className="title-right"
      >
        CSS
      </motion.h2>
      <motion.h2
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 1, delay: 0.4 }}
        style={{ fontSize: "9rem" }}
        className="title-right"
      >
        TAILWIND
      </motion.h2>
      <motion.h2
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 1, delay: 0.6 }}
        style={{ fontSize: "9rem" }}
        className="title-right"
      >
        REACT
      </motion.h2>
      <motion.h2
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 1, delay: 0.8 }}
        style={{ fontSize: "9rem" }}
        className="title-right"
      >
        TYPESCRIPT
      </motion.h2>
      <motion.h2
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 1, delay: 0.8 }}
        style={{ fontSize: "9rem" }}
        className="title-right"
      >
        JAVASCRIPT
      </motion.h2>
      <div>
        <MdOutlineKeyboardDoubleArrowDown className="arrow" />
      </div>
    </motion.div>
  );
}

export default FrontendMiddle;
