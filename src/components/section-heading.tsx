import { cn } from "@/lib/utils";
import React from "react";

const SectionHeading = ({
  heading,
  small,
}: {
  heading: string;
  small?: boolean;
}) => {
  return (
    <>
      <h1 className={cn("text-4xl font-black mb-8", small && "text-xl")}>
        {heading}
      </h1>
    </>
  );
};

export default SectionHeading;
