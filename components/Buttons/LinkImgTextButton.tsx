import Image from "next/image";
import Link from "next/link";
import React from "react";

interface Props {
  href: string;
  src: string;
  text: string;
  icon?: string;
}
const LinkImgTextButton = ({ href, src, text, icon }: Props) => {
  return (
    <Link href={href}>
      <button className="icon-round-text-btn">
        <div className={icon ? icon : "img-icon-small"}>
          <Image
            src={src}
            width={30}
            height={30}
            layout="responsive"
            className="img-base rounded-full"
          />
        </div>
        <p className="text-textMedium">{text}</p>
      </button>
    </Link>
  );
};

export default LinkImgTextButton;

//  <LinkImgTextButton
//    href="/profile"
//    src="/images/profile/profile.jpg"
//    text="Riza Hariati"
//    icon=""
//  />;
