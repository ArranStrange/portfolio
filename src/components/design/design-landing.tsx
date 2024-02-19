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
      <div className="landing-title-L">
        <motion.div
          initial={{ opacity: 1 }}
          animate={inView ? { opacity: 0 } : { opacity: 0 }}
          transition={{ duration: 0.2, delay: 5 }}
          className="column-1"
        >
          <motion.h1
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : { opacity: 1 }}
            transition={{ duration: 0.2, delay: 0.6 }}
            className="title-left"
          >
            D
          </motion.h1>
          <motion.h1
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : { opacity: 1 }}
            transition={{ duration: 0.2, delay: 0.8 }}
            className="title-left"
          >
            E
          </motion.h1>
          <motion.h1
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : { opacity: 1 }}
            transition={{ duration: 0.2, delay: 1 }}
            className="title-left"
          >
            S
          </motion.h1>
          <motion.h1
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : { opacity: 1 }}
            transition={{ duration: 0.2, delay: 1.2 }}
            className="title-left"
          >
            I
          </motion.h1>
          <motion.h1
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : { opacity: 1 }}
            transition={{ duration: 0.2, delay: 1.4 }}
            className="title-left"
          >
            G
          </motion.h1>
          <motion.h1
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : { opacity: 1 }}
            transition={{ duration: 0.2, delay: 1.6 }}
            className="title-left"
          >
            N
          </motion.h1>
        </motion.div>
        <motion.div
          initial={{ opacity: 1 }}
          animate={inView ? { opacity: 0 } : { opacity: 0 }}
          transition={{ duration: 0.2, delay: 5 }}
          className="column-2"
        >
          <motion.h1
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : { opacity: 1 }}
            transition={{ duration: 0.2, delay: 1.8 }}
            className="title-left"
          >
            &
          </motion.h1>
          <motion.h1
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : { opacity: 1 }}
            transition={{ duration: 0.2, delay: 2 }}
            className="title-left"
          >
            U
          </motion.h1>
          <motion.h1
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : { opacity: 1 }}
            transition={{ duration: 0.2, delay: 2.2 }}
            className="title-left"
          >
            I
          </motion.h1>
          <motion.h1
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : { opacity: 1 }}
            transition={{ duration: 0.2, delay: 2.4 }}
            className="title-left"
          >
            /
          </motion.h1>
          <motion.h1
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : { opacity: 1 }}
            transition={{ duration: 0.2, delay: 2.6 }}
            className="title-left"
          >
            U
          </motion.h1>
          <motion.h1
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : { opacity: 1 }}
            transition={{ duration: 0.2, delay: 2.8 }}
            className="title-left"
          >
            X
          </motion.h1>
        </motion.div>
      </div>

      <div className="landing-title-R">
        <motion.div
          className="clipped-text-design design-landing-container-R scroll-section"
          ref={ref}
        >
          <motion.h1
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 1, delay: 2.9 }}
            style={{ marginTop: 50 }}
            className="title-right"
          >
            FIGMA
          </motion.h1>
          <motion.h1
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 1, delay: 3.1 }}
            className="title-right"
          >
            INDESIGN
          </motion.h1>
          <motion.h1
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 1, delay: 3.3 }}
            className="title-right"
          >
            PHOTOSHOP
          </motion.h1>
          <motion.h1
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 1, delay: 3.6 }}
            className="title-right"
          >
            LIGHTROOM
          </motion.h1>
        </motion.div>
      </div>
    </div>
  );
}

export default DesignLanding;
