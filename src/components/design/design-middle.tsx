import "./design.css";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

function DesignMiddle() {
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
      className="clipped-text design-white-container scroll-section"
      ref={ref}
    >
      <motion.h1
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 1 }}
        style={{ marginTop: 50 }}
        className="title-right"
      >
        CARDIFF
      </motion.h1>
      <motion.h1
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 1, delay: 0.2 }}
        className="title-right"
      >
        BASED
      </motion.h1>
      <motion.h1
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 1, delay: 0.4 }}
        className="title-right"
      >
        FRONTEND
      </motion.h1>
      <motion.h1
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 1, delay: 0.6 }}
        className="title-right"
      >
        DEVELOPER
      </motion.h1>
    </motion.div>
  );
}

export default DesignMiddle;
