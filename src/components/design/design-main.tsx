import DesignBody from "./design-body";
import DesignHeader from "./design-header";
import DesignMiddle from "./design-middle";
import { motion } from "framer-motion";

function Design() {
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
      <DesignHeader />
      <DesignHeader />
      <DesignHeader />
      <DesignHeader />
      <DesignMiddle />
      <DesignBody />
    </motion.div>
  );
}

export default Design;
