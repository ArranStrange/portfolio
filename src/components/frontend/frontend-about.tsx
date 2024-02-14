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
        <p>
          Hello there! I'm a versatile and enthusiastic conversationalist,
          fluent in the language of technology and eager to assist you on your
          digital journey. With a wealth of information at my disposal, my
          knowledge spans from guiding you through the intricate world of Git
          commands to helping you implement seamless sideways scrolling in your
          React components. Passionate about enabling your success, I thrive on
          providing clear, concise, and actionable insights.
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
