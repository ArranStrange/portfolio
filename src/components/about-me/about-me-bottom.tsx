import "./about-me.css";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

// Motion Framer object to control visible & hidden
const fadeInVariants = {
  visible: { opacity: 1, scale: 1, transition: { duration: 5 } },
  hidden: { opacity: 0, scale: 1 },
};

function AboutMeBottom() {
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
    <div className="about-me-bottom-container">
      <motion.div
        ref={ref}
        animate={controls}
        initial="hidden"
        variants={fadeInVariants}
        className="about-me-bottom-content"
      >
        <p>
          I'm a creative developer that specialises in bringing web to life
          through enticing design, natural animation and fluid functionality,
          primarily through CSS, Typescript & React.
        </p>
      </motion.div>
    </div>
  );
}

export default AboutMeBottom;
