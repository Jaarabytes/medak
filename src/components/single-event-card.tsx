import React from "react";
import { CardDescription, CardTitle } from "./ui/card";

const SingleEventCard = ({
  category,
  title,
  description,
}: {
  category: string;
  title: string;
  description: string;
}) => {
  return (
    <div className="group hover:shadow-lg py-2 pl-2">
      <CardDescription className="capitalize text-foreground">
        {category}
      </CardDescription>
      <CardTitle className="text-base text-primary group-hover:underline mb-2">
        {title}
      </CardTitle>
      <CardDescription>{description}</CardDescription>
    </div>
  );
};

export default SingleEventCard;
