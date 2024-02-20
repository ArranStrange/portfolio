import FrontendHeader from "./frontend-header";
import { motion } from "framer-motion";
import FrontendMiddle from "./frontend-middle";
import FrontendAbout from "./frontend-about";
import "./frontend.css";
import FrontendWeatherApp from "./frontend-WeatherApp";
import FrontendSinNombre from "./frontend-SinNombre";
import FrontendToDoList from "./frontend-ToDoList";
import FrontendBottom from "./frontend-bottom";

function Frontend() {
  return (
    <motion.div
      className="App"
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.5,
        delay: 0.2,
        ease: [0, 0.71, 0.2, 1.01],
      }}
    >
      <div className="frontend-page-container">
        <div className="scroll-section">
          <FrontendHeader />
        </div>
        <div className="scroll-section">
          <FrontendMiddle />
        </div>
        <div className="scroll-section">
          <FrontendAbout />
        </div>
        <div className="scroll-section">
          <FrontendBottom />
        </div>
        {/* <div className="scroll-section">
          <FrontendWeatherApp />
        </div>
        <div className="scroll-section">
          <FrontendToDoList />
        </div>
        <div className="scroll-section">
          <FrontendSinNombre />
        </div> */}
      </div>
    </motion.div>
  );
}

export default Frontend;
