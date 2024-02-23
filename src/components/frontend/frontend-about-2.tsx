import "./frontend.css";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import { MdOutlineKeyboardDoubleArrowDown } from "react-icons/md";

function FrontendAbout2() {
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
    <div className="frontend-white-container">
      <motion.div
        ref={ref}
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 4 }}
        className="frontend-bottom-content"
      >
        <p style={{ marginTop: "-50px", textAlign: "start" }}>
          I live to build applications in the sweet spot where design and
          engineering meet — products that look great but are also built well
          behind the scenes.
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

export default FrontendAbout2;
