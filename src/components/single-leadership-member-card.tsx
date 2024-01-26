import React from "react";
import ImageContainer from "./ui/image-container";
import Link from "next/link";
import slugify from "slugify";
import { CardDescription } from "./ui/card";
import { Button } from "./ui/button";
import { LuLinkedin, LuMail } from "react-icons/lu";

const SingleLeadershipMemberCard = ({
  imageURL,
  name,
  position,
  bio,
  linkedin,
  email,
}: {
  imageURL: string;
  name: string;
  position?: string;
  bio?: string;
  linkedin?: string;
  email?: string;
}) => {
  return (
    <>
      <div className="group">
        {bio ? (
          <Link
            href={
              bio ? `/about/our-leadership/${slugify(name.toLowerCase())}` : ""
            }
            className=""
          >
            <ImageContainer
              ratio={1}
              alt="image"
              imageURL={imageURL ? imageURL : "/user-placeholder.png"}
              object="cover"
            />
          </Link>
        ) : (
          <div className="">
            <ImageContainer
              ratio={1}
              alt="image"
              imageURL={imageURL ? imageURL : "/user-placeholder.png"}
              object="cover"
            />
          </div>
        )}

        <div className="mt-3">
          {bio ? (
            <Link
              href={
                bio
                  ? `/about/our-leadership/${slugify(name.toLowerCase())}`
                  : ""
              }
              className=""
            >
              <h3 className=" font-bold group-hover:text-primary">{name}</h3>
            </Link>
          ) : (
            <div className="">
              <h3 className=" font-bold group-hover:text-primary">{name}</h3>
            </div>
          )}

          {position && (
            <CardDescription className="text-sm font-semibold">
              {position}
            </CardDescription>
          )}
          <>
            <div className="flex">
              {email && (
                <a target="_blank" href={email}>
                  <Button
                    className="h-8 w-8 flex items-center justify-center"
                    variant="ghost"
                  >
                    <span>
                      <LuMail />
                    </span>
                  </Button>
                </a>
              )}

              {linkedin && (
                <a target="_blank" href={linkedin}>
                  <Button
                    className="h-8 w-8 flex items-center justify-center"
                    variant="ghost"
                  >
                    <span>
                      <LuLinkedin />
                    </span>
                  </Button>
                </a>
              )}
            </div>
          </>
        </div>
      </div>
    </>
  );
};

export default SingleLeadershipMemberCard;
