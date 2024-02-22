import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

import "./design.css";

function DesignBottom() {
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
    <div className="design-black-container">
      <div className="design-bottom-content">
        <p style={{ marginTop: "-50px", textAlign: "start" }}>
          I’ve learnt design and built my repertoire on the job. From a
          photography beginning, I’ve spent years building brands and developing
          design skill and an extensive knowledge of design softwares, in
          particular Adobe systems. I get engrossed when translating designs
          into web and find myself obsessing over the finer details.
        </p>
      </div>
    </div>
  );
}

export default DesignBottom;
