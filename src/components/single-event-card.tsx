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
    <div className="group">
      <CardDescription className="capitalize text-foreground">
        {category}
      </CardDescription>
      <CardTitle className="text-base text-primary group-hover:underline">
        {title}
      </CardTitle>
      <CardDescription>{description}</CardDescription>
    </div>
  );
};

export default SingleEventCard;
