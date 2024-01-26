import { AspectRatio } from "@radix-ui/react-aspect-ratio";
import Image from "next/image";
import React from "react";

const AppLogo = ({
  white,
  width,
  height,
}: {
  white?: boolean;
  width?: number;
  height?: number;
}) => {
  return (
    <div className="relative">
      {white ? (
        <Image
          src="/logos/medak-logo-white.svg"
          width={width ? width : 60}
          height={height ? height : 10}
          alt="logo"
        />
      ) : (
        <Image src="/logos/medak-logo.svg" width={60} height={10} alt="logo" />
      )}
    </div>
  );
};

export default AppLogo;
