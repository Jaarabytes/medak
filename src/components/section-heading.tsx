import { cn } from "../lib/utils";
import React from "react";

const SectionHeading = ({
  heading,
  small,
  className,
}: {
  heading: string;
  small?: boolean;
  className?: string;
}) => {
  return (
    <>
      <h1 className={cn("text-4xl font-black ", small && "text-xl", className)}>
        {heading}
      </h1>
    </>
  );
};

export default SectionHeading;
