import { Route, Routes, useLocation } from "react-router-dom";
import AboutMe from "../about-me/about-me-main";
import Frontend from "../frontend/frontend-main";
import Design from "../design/design-main";
import { AnimatePresence } from "framer-motion";
import { motion } from "framer-motion";
import "./animated-routes.css";

function AnimatedRoutes() {
  const location = useLocation();
  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        {/* <motion.div
          className="slide-in"
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 0 }}
          exit={{ scaleY: 1 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        ></motion.div> */}
        <Route path="/" element={<AboutMe />} />
        <Route path="/about-me" element={<AboutMe />} />
        <Route path="/frontend" element={<Frontend />} />
        <Route path="/design" element={<Design />} />
        {/* <motion.div
          className="slide-out"
          initial={{ scaleY: 1 }}
          animate={{ scaleY: 1 }}
          exit={{ scaleY: 1 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        ></motion.div> */}
      </Routes>
    </AnimatePresence>
  );
}

export default AnimatedRoutes;
