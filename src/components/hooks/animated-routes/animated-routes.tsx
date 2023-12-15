import { Route, Routes, useLocation } from "react-router-dom";
import AboutMe from "../../about-me/about-me-main";
import Frontend from "../../frontend/frontend-main";
import Design from "../../design/design-main";
import { AnimatePresence } from "framer-motion";
import "./animated-routes.css";
import GitHub from "../../git-hub/git-hub-main";

function AnimatedRoutes() {
  const location = useLocation();
  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<AboutMe />} />
        <Route path="/about-me" element={<AboutMe />} />
        <Route path="/frontend" element={<Frontend />} />
        <Route path="/design" element={<Design />} />
        <Route path="/git-hub" element={<GitHub />} />
      </Routes>
    </AnimatePresence>
  );
}

export default AnimatedRoutes;
