import GitHubHeader from "./git-hub-header";
import GitHubBody from "./git-hub-body";
import GitHubLanding from "./git-hub-landing";
import { motion } from "framer-motion";
import GitHubMiddle from "./git-hub-middle";

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
      <div className="git-hub-page-container">
        <div className="about-me-scroll-section-1">
          <GitHubHeader />
          <GitHubHeader />
          <GitHubHeader />
          <GitHubHeader />
          <GitHubLanding />
          <GitHubBody />
        </div>
        <div className="about-me-scroll-section-2">
          <GitHubMiddle />
        </div>
      </div>
    </motion.div>
  );
}

export default GitHub;
