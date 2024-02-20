import "./design.css";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import recordingTest from "./Assets/Screen Recording 2024-02-19 at 08.13.26.mov";
import BrandingVideo from "./Assets/Branding.mp4";
import WebVideo from "./Assets/Web.mp4";
import PrintVideo from "./Assets/Print.mp4";
import SocialVideo from "./Assets/Socials.mp4";

function DesignMiddle() {
  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [controls, inView]);

  return (
    <div className="design-white-container">
      {/* ACCORDIAN */}
      <motion.div
        initial={{ x: 1500, opacity: 1 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 3, type: "tween" }}
        className="accordion"
      >
        <div className="accordion-item">
          <input
            type="radio"
            className="toggle"
            name="accordion"
            id="toggle1"
          />
          <div className="accordion-title">
            <label htmlFor="toggle1">
              <h4>SOCIALS</h4>
            </label>
          </div>
          <div className="accordion-content">
            <video
              src={SocialVideo}
              autoPlay
              muted
              loop
              className="accordion-video"
            />
          </div>
        </div>

        <div className="accordion-item">
          <input
            type="radio"
            className="toggle"
            name="accordion"
            id="toggle2"
          />
          <div className="accordion-title">
            <label htmlFor="toggle2">
              <h4>WEB</h4>
            </label>
          </div>
          <div className="accordion-content">
            <video
              src={WebVideo}
              autoPlay
              muted
              loop
              className="accordion-video"
            />
          </div>
        </div>

        <div className="accordion-item">
          <input
            type="radio"
            className="toggle"
            name="accordion"
            id="toggle3"
          />
          <div className="accordion-title">
            <label htmlFor="toggle3">
              <h4>PRINT</h4>
            </label>
          </div>
          <div className="accordion-content">
            <video
              src={PrintVideo}
              autoPlay
              muted
              loop
              className="accordion-video"
            />
          </div>
        </div>

        <div className="accordion-item">
          <input
            type="radio"
            className="toggle"
            name="accordion"
            id="toggle4"
          />
          <div className="accordion-title">
            <label htmlFor="toggle4">
              <h4>BRANDING</h4>
            </label>
          </div>
          <div className="accordion-content">
            <video
              src={BrandingVideo}
              autoPlay
              muted
              loop
              className="accordion-video"
            />
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default DesignMiddle;
