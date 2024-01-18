import { AspectRatio } from "@radix-ui/react-aspect-ratio";
import Image from "next/image";
import React from "react";

const AppLogo = ({ white }: { white?: boolean }) => {
  return (
    <div className="relative">
      {white ? (
        <Image
          src="/logos/medak-logo-white.svg"
          width={60}
          height={10}
          alt="logo"
        />
      ) : (
        <Image src="/logos/medak-logo.svg" width={60} height={10} alt="logo" />
      )}
    </div>
  );
};

export default AppLogo;
