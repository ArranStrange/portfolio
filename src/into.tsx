import { useEffect, useState } from "react";
import { motion } from "framer-motion";

function IntroGif() {
  const [isVisible, setIsVisible] = useState(true);
  const setTime = 3400;

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsVisible(false);
    }, setTime);

    return () => clearTimeout(timeout);
  }, []);

  if (!isVisible) {
    return null;
  }

  return (
    <div style={{ zIndex: 999 }} className="intro-pop-up-div fade-out">
      {isVisible && (
        <motion.div
          className="into-pop-up"
          initial={{ opacity: 1 }}
          animate={{ opacity: 0 }}
          transition={{
            delay: 2.5,
            duration: 0.2,
          }}
        >
          <motion.h3 className="pop-up-clipped-text">Arran</motion.h3>
          <motion.h3 className="pop-up-clipped-text"> Oxley</motion.h3>
          <motion.h3 className="pop-up-clipped-text"> Strange</motion.h3>
        </motion.div>
      )}
    </div>
  );
}

export default IntroGif;
