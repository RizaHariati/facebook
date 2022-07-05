import { faAdd } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";
import React from "react";
type Story = {
  name: string;
  profileImage: string;
  mainImage: string;
};
const stories: Story[] = [
  { name: "Lie lie siaw", profileImage: "girl1", mainImage: "image (1)" },
  { name: "Cesar Millan", profileImage: "boy1", mainImage: "image (2)" },
  { name: "Off the leash", profileImage: "girl2", mainImage: "image (3)" },
  { name: "Dog Lovers", profileImage: "boy2", mainImage: "image (4)" },
];
const Stories = () => {
  return (
    <div className="stories-container">
      {/* -------------------------- user-story -------------------------- */}

      <div className="story">
        <div className="row-span-3 overflow-hidden img-base hover:scale-110 transition-all z-0">
          <Image
            src="/images/websiteImages/profile.jpg"
            width={350}
            height={500}
            layout="responsive"
            className="img-base z-0"
          />
        </div>
        <div className="row-span-1 bg-primaryMediumDark z-10 flex items-center justify-center relative">
          <button className="icon-btn bg-accentMain border-4 border-primaryMediumDark absolute -top-5 left-1/2 -translate-x-1/2">
            <FontAwesomeIcon icon={faAdd} />
          </button>
          <p className="text-xs font-semibold">Create Story</p>
        </div>
      </div>

      {/* ------------------------ friends-stories ----------------------- */}

      {stories.map((story, index) => {
        return (
          <div
            key={index}
            className={index === 0 ? "story story-last" : "story"}
          >
            <div className="absolute w-full h-full top-0 left-0 img-base hover:scale-110 transition-all z-0">
              <Image
                priority
                src={`/images/main/${story.mainImage}.jpg`}
                width={350}
                height={700}
                layout="responsive"
                className="img-base z-0"
              />
            </div>
            <Link href="/profile">
              <button className="img-icon absolute top-2 left-2 border-accentMain border-2 rounded-full">
                <Image
                  src={`/images/profile/${story.profileImage}.jpg`}
                  width={50}
                  height={50}
                  layout="responsive"
                  className="img-base rounded-full"
                />
                <p className="icon-note">Search</p>
              </button>
            </Link>
            <div className="row-start-4 row-span-1 bg-primaryMediumDark bg-opacity-50 z-10 flex items-end justify-start p-2 relative">
              <p className="text-xs font-semibold">{story.name}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Stories;
