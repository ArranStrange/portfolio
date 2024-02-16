/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import "./nav-bar.css";
import { Link as LinkRouter } from "react-router-dom";
import ContactDropdown from "./contact";
import { motion } from "framer-motion";

function NavBar() {
  const [showContact, setShowContact] = useState(false);

  const toggleContact = () => {
    setShowContact(!showContact);
  };

  return (
    <nav>
      <ul>
        <li>
          <LinkRouter to="./about-me">Home</LinkRouter>
        </li>
        <li>
          <LinkRouter to="./frontend">Frontend</LinkRouter>
        </li>
        <li>
          <LinkRouter to="./design">Design</LinkRouter>
        </li>
        <li>
          <LinkRouter to="./git-hub">Git Hub</LinkRouter>
        </li>
        <li>
          <a onClick={toggleContact}>Contact</a>
        </li>
      </ul>
      {showContact && (
        <motion.div
          initial={{ x: "100%", opacity: 1 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <ContactDropdown toggleContact={toggleContact} />
        </motion.div>
      )}
    </nav>
  );
}

export default NavBar;
