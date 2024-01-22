import { cn } from "@/lib/utils";
import React from "react";
import SectionHeading from "../section-heading";

const ParagraphSection = ({
  title,
  children,
  className,
  contained,
  small,
}: {
  title?: string;
  children: React.ReactNode;
  className?: string;
  contained?: boolean;
  small?: boolean;
}) => {
  return (
    <div className={cn("mb-8", contained && "max-w-4xl mx-auto", className)}>
      {title && <SectionHeading small={small} heading={title} />}
      <div className="text-base">{children}</div>
    </div>
  );
};

export default ParagraphSection;
