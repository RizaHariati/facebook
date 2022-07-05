import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

interface Props {
  text: string;
  icon: IconProp;
  btnClass?: string;
}

const IconButton = ({ icon, text, btnClass }: Props) => {
  return (
    <button className={btnClass ? btnClass : "icon-btn"}>
      <FontAwesomeIcon icon={icon} />
      <p className="icon-note">{text}</p>
    </button>
  );
};

export default IconButton;
