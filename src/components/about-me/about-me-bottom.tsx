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
          In September 2023 I decided to dive into a career change. I aimed to
          take on the challenge of converting my knowledge of design and my
          experience in Photoshop, InDesign and other Adobe software into
          creating beautiful and practical applications. Using all of my spare
          time to study and put my newly learnt skills to work I’ve managed to
          not only create a whole array of web applications and static sites,
          but have also become a confident React.js developer. I’m currently
          looking to step into my first Developer role, Recruiters and Hiring
          Managers please don’t hesitate to contact me.
        </p>
      </motion.div>
    </div>
  );
}

export default AboutMeBottom;
