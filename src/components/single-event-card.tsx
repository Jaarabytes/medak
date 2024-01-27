import React from "react";
import { CardDescription, CardTitle } from "./ui/card";
import { slugifyBlogTitle } from "@/lib/utils";
import Link from "next/link";

const SingleEventCard = ({
  category,
  title,
  date,
  author,
}: {
  category: string;
  title: string;
  author: string;
  date: string;
}) => {
  return (
    <Link href={`/blog/${slugifyBlogTitle(title)}`}>
      <div className="group hover:shadow-lg py-2 pl-2">
        <CardDescription className="capitalize text-foreground">
          {category}
        </CardDescription>
        <CardTitle className="text-base text-primary group-hover:underline mb-2">
          {title}
        </CardTitle>
        <CardDescription>
          {date} | {author}
        </CardDescription>
      </div>
    </Link>
  );
};

export default SingleEventCard;
