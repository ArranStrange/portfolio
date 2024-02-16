import React, { useEffect } from "react";
import {
  AiFillFacebook,
  AiFillGithub,
  AiFillLinkedin,
  AiFillMail,
  AiFillMessage,
} from "react-icons/ai";
import { AiFillInstagram } from "react-icons/ai";

interface ContactDropdownProps {
  toggleContact: () => void;
}

export default function ContactDropdown(props: ContactDropdownProps) {
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      const dropdown = document.querySelector(".contact");
      if (dropdown && !dropdown.contains(event.target as Node)) {
        setTimeout(() => {
          props.toggleContact();
        });
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [props]);

  return (
    <div className="contact">
      <div className="content">
        <div className="icons">
          <a
            href="https://www.linkedin.com/in/arranoxleystrange/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <AiFillLinkedin className="icon" style={{ fontSize: "50px" }} />
          </a>
          <a
            href="https://github.com/ArranStrange"
            target="_blank"
            rel="noopener noreferrer"
          >
            <AiFillGithub className="icon" style={{ fontSize: "50px" }} />
          </a>
          <a
            href="https://www.instagram.com/arranstrange/"
            target="_blank"
            rel="noreferrer"
          >
            <AiFillInstagram className="icon" style={{ fontSize: "50px" }} />
          </a>
          <a
            href="https://www.facebook.com/profile.php?id=100005652047015"
            target="_blank"
            rel="noreferrer"
          >
            <AiFillFacebook className="icon" style={{ fontSize: "50px" }} />
          </a>

          <a
            href="https://www.messenger.com/t/100005652047015"
            target="_blank"
            rel="noopener noreferrer"
          >
            <AiFillMessage className="icon" style={{ fontSize: "50px" }} />
          </a>
          <a
            href="mailto:arranstrange@googlemail.com?subject=Lets Work Together!"
            target="_blank"
            rel="noopener noreferrer"
          >
            <AiFillMail className="icon" style={{ fontSize: "57px" }} />
          </a>
        </div>
      </div>
    </div>
  );
}
