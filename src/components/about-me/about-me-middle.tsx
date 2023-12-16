import "./about-me.css";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

// Motion Framer object to control visible & hidden
const fadeInVariants = {
  visible: { opacity: 1, scale: 1, transition: { duration: 5 } },
  hidden: { opacity: 0, scale: 1 },
};

function AboutMeMiddle() {
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
    <div className="about-me-middle-container">
      <motion.div
        ref={ref}
        animate={controls}
        initial="hidden"
        variants={fadeInVariants}
        className="about-me-middle-content"
      >
        <h1>UK BASED FRONTEND DEV & UI/UX DESIGNER</h1>
      </motion.div>
    </div>
  );
}

export default AboutMeMiddle;
