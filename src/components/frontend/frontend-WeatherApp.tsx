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

function FrontendWeatherApp() {
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
        <a
          href="https://arranstrange.github.io/weather-api-app/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <video
            src={WeatherAppVideo}
            autoPlay
            muted
            className="project-video"
          />
        </a>
        <p className="description">
          Weather App using Typescript, React & Axios API
        </p>
      </motion.div>

      <motion.div
        className="arrow"
        initial={{ y: "-100vh", x: -20, opacity: 0 }}
        animate={inView ? { y: 0, opacity: 1 } : { y: -1000 }}
        transition={{ delay: 0.2, duration: 1, type: "tween" }}
        style={{ marginTop: "-20px" }}
      >
        <MdOutlineKeyboardDoubleArrowDown className="arrow" />
      </motion.div>
    </div>
  );
}

export default FrontendWeatherApp;
