import {
  faAdd,
  faBell,
  faListDots,
  faMessage,
} from "@fortawesome/free-solid-svg-icons";
import { signIn, signOut, useSession } from "next-auth/react";

import React from "react";
import IconButton from "../Buttons/IconButton";
import LinkImgButton from "../Buttons/LinkImgButton";

const NavMenu = () => {
  const { data: session } = useSession();
  return (
    <div className="nav-menu-container">
      <div className="nav-menu ">
        {session && (
          <>
            <IconButton
              icon={faAdd}
              text="Create"
              btnClass="icon-btn xl:hidden"
            />
            <IconButton
              icon={faListDots}
              text="Menu"
              btnClass="icon-btn hidden xl:block"
            />
            <IconButton icon={faMessage} text="Messenger" />
            <IconButton icon={faBell} text="Notification" />
          </>
        )}

        <LinkImgButton
          src={
            session?.user?.image
              ? session.user.image
              : "/images/profile/profile.png"
          }
          href={session ? "/profile" : "/"}
          text={session ? "Your Profile" : "Login"}
          imgClass="img-icon"
          onClick={session ? signOut : signIn}
        />
      </div>
    </div>
  );
};

export default NavMenu;
