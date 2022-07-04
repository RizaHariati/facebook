import {
  faThumbsUp as ThumbsUp,
  faComment,
  faLaugh,
  faImage,
  faStickyNote,
} from "@fortawesome/free-regular-svg-icons";
import {
  faCamera,
  faCircle,
  faEllipsis,
  faGlobeAsia,
  faHeart,
  faShare,
  faThumbsUp,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import LinkImgButton from "../Buttons/LinkImgButton";
interface Props {
  id: string;
  name: string;
  time: string;
}
const Post = () => {
  return (
    <div className="post-container">
      {/* -------------------------- postHeader -------------------------- */}
      <PostHeader />

      {/* -------------------------- postContent ------------------------- */}
      <PostContent />
      {/* ------------------------- postReaction ------------------------- */}
      <div className="flex items-center justify-center gap-2 text-center h-10 px-5 border-y border-primaryMedium">
        <button className="icon-btn-square w-full text-sm font-medium gap-2">
          <FontAwesomeIcon icon={ThumbsUp} className="text-xl " />
          Like
        </button>
        <button className="icon-btn-square w-full text-sm font-medium gap-2">
          <FontAwesomeIcon icon={faComment} className="text-xl " />
          Comment
        </button>
        <button className="icon-btn-square w-full text-sm font-medium gap-2">
          <FontAwesomeIcon icon={faShare} className="text-xl " />
          Share
        </button>
      </div>

      {/* -------------------------- postComment ------------------------- */}
      <div className="grid grid-cols-9 mt-5 px-5">
        <LinkImgButton
          src="/images/websiteImages/profile.jpg"
          href="/profile"
          imgClass="img-icon-small"
        />

        <form className="post-comment-form">
          <textarea
            placeholder="Write a comment"
            className="post-comment-input "
          />
          <div className="flex gap-2 ml-auto float-left text-textDark">
            <FontAwesomeIcon icon={faLaugh} className="text-lg" />
            <FontAwesomeIcon icon={faCamera} className="text-lg" />
            <FontAwesomeIcon icon={faImage} className="text-lg" />
            <FontAwesomeIcon icon={faStickyNote} className="text-lg" />
          </div>
        </form>
      </div>
      <div className="my-2">
        <div className="grid grid-cols-9 mt-5 px-5 ">
          <LinkImgButton
            src="/images/profile/girl1.jpg"
            href="/profile"
            imgClass="img-icon-small"
          />

          <div className="col-span-7 w-full bg-primaryMedium rounded-3xl h-fit py-2 px-4">
            <p className="text-xs font-medium">Danielle Gordanier</p>
            <p>
              These things always make me think of the awkward headlines
              whenever someone is hit by my city's light rail. It's like the
              journalist is stretching to make it more interesting for the
              common reader. One woman who was killed just a half mile from my
              home
            </p>
          </div>
          <button className="icon-btn h-8 w-8 bg-primaryMediumDark hover:bg-primaryMedium place-self-center">
            <FontAwesomeIcon icon={faEllipsis} className="text-lg" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Post;

const PostHeader = () => {
  return (
    <div className="grid grid-cols-9 gap-2 px-5 ">
      <LinkImgButton
        src="/images/profile/boy1.jpg"
        href="/profile"
        imgClass="img-icon m-0 p-0"
      />

      <div className=" col-span-7 text-textMedium text-sm font-medium    cursor-pointer hover:underline-offset-2 underline-offset-auto ">
        <h4>Dog Lovers by Greater Good</h4>
        <p className="flex gap-2 items-center text-textDark text-xs">
          21 h
          <FontAwesomeIcon icon={faCircle} style={{ fontSize: "3px" }} />
          <FontAwesomeIcon icon={faGlobeAsia} className="text-xs" />
        </p>
      </div>
      <button className="icon-btn bg-primaryMediumDark hover:bg-primaryMedium">
        <FontAwesomeIcon icon={faEllipsis} className="text-xl" />
      </button>
    </div>
  );
};

const PostContent = () => {
  return (
    <div className=" text-textMedium">
      <div className="px-5 py-3">
        <p>How to keep your Dog Safe on 4 of July Part 1</p>
        <p>This holiday can represent fear for our dogs</p>
        <p>It is importan to understand why and how can we create</p>
      </div>
      <div className=" w-full h-80 img-base overflow-hidden z-0">
        <Image
          src={`/images/main/image (1).jpg`}
          width={450}
          height={450}
          layout="responsive"
          className="img-base z-0"
        />
      </div>
      <div className="grid grid-cols-9 px-5 py-3 text-textDark">
        <div className=" col-span-7 flex items-center gap-1 ">
          <div className="w-5 h-5 flex items-center justify-center bg-blue-600 rounded-full">
            <FontAwesomeIcon
              icon={faThumbsUp}
              className=" text-textMedium w-3 h-3 rounded-full"
            />
          </div>
          <div className="w-5 h-5 flex items-center justify-center bg-red-600 rounded-full">
            <FontAwesomeIcon
              icon={faHeart}
              className=" text-textMedium w-3 h-3 rounded-full"
            />
          </div>
          Sylvia Organ, Jennifer navare, and 66 others
        </div>
        <div className=" col-span-2 text-right">11 comments</div>
      </div>
    </div>
  );
};
