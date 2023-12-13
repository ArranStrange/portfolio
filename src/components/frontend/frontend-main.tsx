import FrontendBody from "./frontend-body";
import FrontendHeader from "./frontend-header";
import FrontendMiddle from "./frontend-middle";
import { motion } from "framer-motion";

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
      <FrontendHeader />
      <FrontendHeader />
      <FrontendHeader />
      <FrontendHeader />
      <FrontendMiddle />
      <FrontendBody />
    </motion.div>
  );
}

export default Frontend;
