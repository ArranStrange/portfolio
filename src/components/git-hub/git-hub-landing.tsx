import { motion } from "framer-motion";
import "./git-hub.css";
import { MdOutlineKeyboardDoubleArrowDown } from "react-icons/md";

function GitHublanding() {
  return (
    <div className="git-hub-title-container">
      <div className="heading-container">
        <motion.h1
          initial={{ y: "100vh", x: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, type: "tween" }}
        >
          GIT
        </motion.h1>
        <motion.h1
          initial={{ y: "100vh", x: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 1, type: "tween" }}
        >
          HUB
        </motion.h1>
      </div>
      <div className="git-hub-profile">
        <motion.img
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 1 }}
          className="git-hub-profile-picture"
          src="https://avatars.githubusercontent.com/u/149064150?v=4"
          alt="Arran Strange github profile picture"
        />
        <motion.img
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4, duration: 1 }}
          src="https://ghchart.rshah.org/<141213>/arranstrange"
          alt="ArranStrange's Github chart"
        />
      </div>

      <div className="git-hub-repos">
        <script src="https://gitlist.himdek.com/GitHubList.js"></script>
      </div>
      <motion.div
        className="arrow"
        initial={{ y: "-100vh", x: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 2, duration: 1, type: "tween" }}
        style={{ marginTop: "-20px" }}
      >
        <MdOutlineKeyboardDoubleArrowDown className="arrow" />
      </motion.div>
    </div>
  );
}

export default GitHublanding;
