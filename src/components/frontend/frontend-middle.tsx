import "./frontend.css";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

// Motion Framer object to control visible & hidden
const fadeInVariants = {
  visible: { opacity: 1, scale: 1, transition: { duration: 5 } },
  hidden: { opacity: 0, scale: 1 },
};

function FrontendMiddle() {
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
    <div className="frontend-middle-container">
      <motion.div
        ref={ref}
        animate={controls}
        initial="hidden"
        variants={fadeInVariants}
        className="frontend-middle-content"
      >
        <div className="frontend-body">
          From HTML and CSS beginnings, I embraced React and became a responsive
          design advocate. Evolving with TypeScript, I navigated complex
          challenges, prioritizing cross-browser compatibility. In agile
          environments, I collaborated with tools like Webpack and Git.
        </div>
      </motion.div>
    </div>
  );
}

export default FrontendMiddle;
