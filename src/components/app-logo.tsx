import { AspectRatio } from "@radix-ui/react-aspect-ratio";
import Image from "next/image";
import React from "react";

const AppLogo = () => {
  return (
    <div className="relative">
      <Image src="/logos/medak-logo.png" width={60} height={10} alt="logo" />
    </div>
  );
};

export default AppLogo;
