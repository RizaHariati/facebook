import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import LinkImgButton from "../Buttons/LinkImgButton";

const LogoSearch = () => {
  return (
    <div className="logo-search-container ">
      <div className="logo-search">
        <LinkImgButton
          src="/images/websiteImages/Logo.png"
          href="/"
          text="Home"
          imgClass="img-icon"
        />

        <button className="icon-btn">
          <FontAwesomeIcon icon={faSearch} />
        </button>
      </div>
    </div>
  );
};

export default LogoSearch;
