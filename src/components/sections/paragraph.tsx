import { cn } from "@/lib/utils";
import React from "react";

const ParagraphSection = ({
  title,
  children,
  className,
  contained,
}: {
  title?: string;
  children: React.ReactNode;
  className?: string;
  contained?: boolean;
}) => {
  return (
    <div className={cn("mb-8", contained && "max-w-4xl mx-auto", className)}>
      {title && <h1 className="text-4xl font-black mb-6">{title}</h1>}
      <div className="text-base">{children}</div>
    </div>
  );
};

export default ParagraphSection;
