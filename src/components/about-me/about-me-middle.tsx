import React, { useRef, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

import "./about-me.css";

// Motion Framer object to control visible & hidden
const fadeInVariants = {
  visible: { opacity: 1, scale: 1, transition: { duration: 5 } },
  hidden: { opacity: 0, scale: 1 },
};

function AboutMeMiddle() {
  // import Motion Framer useAnimation hook
  // import inView from react-intersection-observer to ref view point - returns boolean true if in view, false if not.
  const controls = useAnimation();
  // inView used as reference to trigger useEffect when components are in view
  const [ref, inView] = useInView();

  const carouselControls = useAnimation();
  const carouselRef = useRef<HTMLDivElement | null>(null);

  // Scroll event handler
  const handleScroll = () => {
    if (carouselRef.current) {
      const scrollPosition = window.scrollX;
      const elementOffset = carouselRef.current.offsetLeft;
      const distanceFromStart = scrollPosition - elementOffset;

      carouselControls.start({ x: -distanceFromStart });
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    // if statement to set use object visible when useInView hoot return true
    if (inView) {
      controls.start("visible");
    }
    // dependencies
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      animate={controls}
      initial="hidden"
      variants={fadeInVariants}
      className="clipped-text about-me-white-container"
    >
      <h1 className=" title-right">CARDIFF</h1>
      <h1 className=" title-right">Based</h1>
      <h1 className=" title-right">JUNOIR</h1>
      <h1 className=" title-right">DEVELOPER</h1>
    </motion.div>
  );
}

export default AboutMeMiddle;
