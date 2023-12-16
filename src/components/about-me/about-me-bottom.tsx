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
          Hello there! I'm a versatile and enthusiastic conversationalist,
          fluent in the language of technology and eager to assist you on your
          digital journey. With a wealth of information at my disposal, my
          knowledge spans from guiding you through the intricate world of Git
          commands to helping you implement seamless sideways scrolling in your
          React components. Passionate about enabling your success, I thrive on
          providing clear, concise, and actionable insights. Whether you're
          navigating the intricacies of version control or exploring the
          possibilities of React, I'm here to support and empower you. With a
          commitment to continuous learning, I keep my knowledge up-to-date to
          ensure that our conversations are always on the cutting edge. In our
          exchanges, we've delved into the intricacies of committing changes,
          resolving conflicts, and even ventured into the realm of React
          component design. Beyond the lines of code, I'm your virtual companion
          on the path to mastering the art of software development. So, let's
          continue this exciting journey together, exploring the vast landscape
          of technology and weaving your success story one command at a time!
        </p>
      </motion.div>
    </div>
  );
}

export default AboutMeBottom;
