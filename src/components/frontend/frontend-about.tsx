import "./frontend.css";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import { MdOutlineKeyboardDoubleArrowDown } from "react-icons/md";

// Motion Framer object to control visible & hidden
const fadeInVariants = {
  visible: { opacity: 1, scale: 1, transition: { duration: 5 } },
  hidden: { opacity: 0, scale: 1 },
};

function FrontendAbout() {
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
    <div className="frontend-black-container">
      <motion.div
        ref={ref}
        animate={controls}
        initial="hidden"
        variants={fadeInVariants}
        className="frontend-bottom-content"
      >
        <p style={{ marginTop: "-50px", textAlign: "start" }}>
          My focus is to build great user-flow for beautiful applications. I
          love minimalism and a clean UI; and that goes the same for
          functionality, I write my code clearly and concisely. I enjoy building
          software in the sweet spot where design and engineering meet —
          products that look great but are also built well behind the scenes.
        </p>
      </motion.div>
      <motion.div
        className="arrow"
        initial={{ y: "-100vh", x: -20, opacity: 0 }}
        animate={inView ? { y: 0, opacity: 1 } : { y: -1000 }}
        transition={{ delay: 0.2, duration: 1, type: "tween" }}
        style={{ marginBottom: "25px" }}
      >
        <MdOutlineKeyboardDoubleArrowDown className="arrow" />
      </motion.div>
    </div>
  );
}

export default FrontendAbout;
