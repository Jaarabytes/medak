import React from "react";
import { Card, CardDescription, CardTitle } from "./ui/card";
import Image from "next/image";
import { AspectRatio } from "@radix-ui/react-aspect-ratio";
import Link from "next/link";

const SingleResourceCard = ({
  imageURL,
  title,
  category,
  description,
  link,
}: {
  imageURL: string;
  title: string;
  category: string;
  description: string;
  link: string;
}) => {
  return (
    <Link href={link} target={link.includes("http") ? "_blank" : "_self"}>
      <Card className="border-none bg-muted">
        <div className="flex space-x-2">
          <div className="w-2/12 relative">
            <AspectRatio ratio={7 / 10} className="relative">
              <Image src={imageURL} alt="image" fill className="object-cover" />
            </AspectRatio>
          </div>
          <div className="flex-1 space-y-3 py-2 pr-2">
            <CardDescription className="font-semibold capitalize">
              {category}
            </CardDescription>
            <CardTitle className="capitalize">{title}</CardTitle>
            <CardDescription>{description}</CardDescription>
          </div>
        </div>
      </Card>
    </Link>
  );
};

export default SingleResourceCard;
