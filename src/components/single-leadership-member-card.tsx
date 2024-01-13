import React from "react";
import ImageContaier from "./ui/image-container";
import Link from "next/link";
import slugify from "slugify";

const SingleLeadershipMemberCard = ({
  imageURL,
  name,
  position,
  bio,
}: {
  imageURL: string;
  name: string;
  position: string;
  bio?: string;
}) => {
  return (
    <>
      {!bio ? (
        <div className="group">
          <div className="">
            <ImageContaier
              ratio={1}
              alt="image"
              imageURL={imageURL ? imageURL : "/user-placeholder.png"}
              object="cover"
            />
          </div>
          <div className="mt-3">
            <h3 className="text-primary font-bold group-hover:underline">
              {name}
            </h3>
            <p className="text-sm font-semibold">{position}</p>
          </div>
        </div>
      ) : (
        <Link
          href={`/about/our-leadership/${slugify(name.toLowerCase())}`}
          className="group"
        >
          <div className="">
            <ImageContaier
              ratio={1}
              alt="image"
              imageURL={imageURL ? imageURL : "/user-placeholder.png"}
              object="cover"
            />
          </div>
          <div className="mt-3">
            <h3 className="text-primary font-bold group-hover:underline">
              {name}
            </h3>
            <p className="text-sm font-semibold">{position}</p>
          </div>
        </Link>
      )}
    </>
  );
};

export default SingleLeadershipMemberCard;
