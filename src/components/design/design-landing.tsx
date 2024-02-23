import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

import "./design.css";

function DesignLanding() {
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
    <div className="design-landing-container scroll-section">
      <motion.div
        initial={{ opacity: 1 }}
        animate={{ opacity: 0 }}
        transition={{ duration: 1, delay: 3.2 }}
        className="title-container-L"
        style={{ marginTop: -65 }}
      >
        <div>
          <motion.h2
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : { opacity: 1 }}
            transition={{ duration: 0.2, delay: 0.4 }}
          >
            D
          </motion.h2>
          <motion.h2
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : { opacity: 1 }}
            transition={{ duration: 0.2, delay: 0.6 }}
          >
            E
          </motion.h2>
          <motion.h2
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : { opacity: 1 }}
            transition={{ duration: 0.2, delay: 0.8 }}
          >
            S
          </motion.h2>
          <motion.h2
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : { opacity: 1 }}
            transition={{ duration: 0.2, delay: 1 }}
          >
            I
          </motion.h2>
          <motion.h2
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : { opacity: 1 }}
            transition={{ duration: 0.2, delay: 1.2 }}
          >
            G
          </motion.h2>
          <motion.h2
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : { opacity: 1 }}
            transition={{ duration: 0.2, delay: 1.4 }}
          >
            N
          </motion.h2>
        </div>
        <div>
          <motion.h2
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : { opacity: 1 }}
            transition={{ duration: 0.2, delay: 1.6 }}
          >
            &
          </motion.h2>
          <motion.h2
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : { opacity: 1 }}
            transition={{ duration: 0.2, delay: 1.8 }}
          >
            U
          </motion.h2>
          <motion.h2
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : { opacity: 1 }}
            transition={{ duration: 0.2, delay: 2 }}
          >
            I
          </motion.h2>
          <motion.h2
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : { opacity: 1 }}
            transition={{ duration: 0.2, delay: 2.2 }}
          >
            /
          </motion.h2>
          <motion.h2
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : { opacity: 1 }}
            transition={{ duration: 0.2, delay: 2.4 }}
          >
            U
          </motion.h2>
          <motion.h2
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : { opacity: 1 }}
            transition={{ duration: 0.2, delay: 2.6 }}
          >
            X
          </motion.h2>
        </div>
      </motion.div>
      <div className="title-container-R design-clipped-text " ref={ref}>
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 2.8 }}
        >
          FIGMA
        </motion.h1>
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 3 }}
        >
          MILANOTE
        </motion.h1>
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 3.2 }}
        >
          INDESIGN
        </motion.h1>
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 3.4 }}
        >
          PHOTOSHOP
        </motion.h1>
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 3.6 }}
        >
          LIGHTROOM
        </motion.h1>
      </div>
    </div>
  );
}

export default DesignLanding;
