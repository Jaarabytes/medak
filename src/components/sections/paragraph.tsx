import React from "react";

const ParagraphSection = ({
  title,
  children,
}: {
  title?: string;
  children: React.ReactNode;
}) => {
  return (
    <div className="py-4">
      {title && <h1 className="text-4xl font-semibold mb-4">{title}</h1>}
      <div className="text-base">{children}</div>
    </div>
  );
};

export default ParagraphSection;
