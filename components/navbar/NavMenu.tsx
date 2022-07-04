import {
  faAdd,
  faBell,
  faBellConcierge,
  faMessage,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import IconButton from "../Buttons/IconButton";
import LinkImgButton from "../Buttons/LinkImgButton";

const NavMenu = () => {
  return (
    <div className="nav-menu-container">
      <div className="nav-menu">
        <IconButton icon={faAdd} text="Create" />
        <IconButton icon={faMessage} text="Messenger" />
        <IconButton icon={faBell} text="Notification" />

        <LinkImgButton
          src="/images/websiteImages/profile.jpg"
          href="/profile"
          text="Your Profile"
          imgClass="img-icon"
        />
      </div>
    </div>
  );
};

export default NavMenu;
