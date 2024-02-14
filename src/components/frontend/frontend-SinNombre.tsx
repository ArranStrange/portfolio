import "./frontend.css";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import { MdOutlineKeyboardDoubleArrowDown } from "react-icons/md";
import TodoListVideo from "./Assets/Todo List.mp4";
import SinNombreVideo from "./Assets/Sin Nombre.mp4";
import WeatherAppVideo from "./Assets/Weather App.mp4";

// Motion Framer object to control visible & hidden
const fadeInVariants = {
  visible: { opacity: 1, scale: 1, transition: { duration: 2 } },
  hidden: { opacity: 0, scale: 1 },
};

function FrontendSinNombre() {
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
      >
        <video
          src={SinNombreVideo}
          autoPlay
          muted
          loop
          className="project-video"
        />
        <p className="description">
          Static Site made with Typescript, React & Tailwind CSS
        </p>
      </motion.div>
      <motion.div
        className="arrow"
        initial={{ y: "-100vh", x: -20, opacity: 0 }}
        animate={
          inView ? { y: 0, opacity: 1, rotate: 0 } : { y: -800, rotate: 0 }
        }
        transition={{ delay: 0.2, duration: 1, type: "tween" }}
        style={{ marginTop: "20px" }}
      >
        <MdOutlineKeyboardDoubleArrowDown className="arrow" />
      </motion.div>
    </div>
  );
}

export default FrontendSinNombre;
