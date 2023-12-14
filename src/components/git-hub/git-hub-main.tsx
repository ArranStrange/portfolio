import GitHubHeader from "./git-hub-header";
import GitHubBody from "./git-hub-body";
import GitHubMiddle from "./git-hub-middle";
import { motion } from "framer-motion";

function GitHub() {
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
      <GitHubHeader />
      <GitHubHeader />
      <GitHubHeader />
      <GitHubHeader />
      <GitHubMiddle />
      <GitHubBody />
    </motion.div>
  );
}

export default GitHub;
