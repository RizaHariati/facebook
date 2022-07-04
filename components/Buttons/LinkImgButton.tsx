import Image from "next/image";
import Link from "next/link";
import React from "react";

interface Props {
  src: string;
  href: string;
  text?: string;
  imgClass: string;
}
const LinkImgButton = ({ src, href, text, imgClass }: Props) => {
  return (
    <Link href={href}>
      <button className={imgClass}>
        <Image
          src={src}
          width={50}
          height={50}
          layout="responsive"
          className="img-base rounded-full"
        />
        {text && <p className="icon-note">{text}</p>}
      </button>
    </Link>
  );
};

export default LinkImgButton;

// <LinkImgButton
//   src="/images/websiteImages/profile.jpg"
//   href="/profile"
//   text="Your Profile"
//   imgClass="img-icon"
// />;
