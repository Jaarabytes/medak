import React from "react";
import ImageContaier from "./ui/image-container";
import Link from "next/link";
import slugify from "slugify";
import { Card, CardTitle } from "./ui/card";

const SingleCommiteeMemberCard = ({
  imageURL,
  name,
  bio,
}: {
  imageURL: string;
  name: string;
  bio?: string;
}) => {
  return (
    <>
      {!bio ? (
        <div className="group  ">
          <div className="">
            <ImageContaier
              ratio={1}
              alt="image"
              imageURL={imageURL ? imageURL : "/user-placeholder.png"}
              object="cover"
            />
          </div>
          <div className="mt-3">
            <h3 className=" font-semibold group-hover:text-primary transition-all ease-linear">
              {name}
            </h3>
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
            <h3 className=" font-semibold group-hover:text-primary transition-all ease-linear">
              {name}
            </h3>
          </div>
        </Link>
      )}
    </>
  );
};

export default SingleCommiteeMemberCard;
