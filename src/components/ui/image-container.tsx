import Image from "next/image";
import React from "react";
import { AspectRatio } from "./aspect-ratio";

const ImageContaier = ({
  imageURL,
  alt,
  ratio,
}: {
  imageURL: string;
  alt: string;
  ratio: number;
}) => {
  return (
    <div>
      <AspectRatio ratio={ratio} className="relative object-contain">
        <Image alt={alt} src={imageURL} fill className="object-contain" />
      </AspectRatio>
    </div>
  );
};

export default ImageContaier;
