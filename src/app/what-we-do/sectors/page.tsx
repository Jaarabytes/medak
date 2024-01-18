import CtaTwo from "@/components/sections/cta-two";
import MiniHero from "@/components/sections/mini-hero";
import React from "react";

const SectorsPage = () => {
  return (
    <div>
      <MiniHero
        title={"Focus or priorities"}
        subTitle={""}
        bgImageURL="/images/imageone.jpg"
      />
      <CtaTwo
        title={" Medical devices"}
        subTitle={"subTitle"}
        description={
          " Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque in harum ea nam debitis, laudantium vero, incidunt corrupti omnis vel molestias dicta maiores dolor perferendis, alias ullam quam repudiandae eius!"
        }
        link={"/"}
        imageURL={"/images/imageone.jpg"}
      />
      {/* <div className="py-8"></div> */}
      <CtaTwo
        title={"In Vitro Diagnostics (IVD)."}
        subTitle={"subTitle"}
        description={
          " Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque in harum ea nam debitis, laudantium vero, incidunt corrupti omnis vel molestias dicta maiores dolor perferendis, alias ullam quam repudiandae eius!"
        }
        left
        link={"/"}
        imageURL={"/images/imageone.jpg"}
      />
    </div>
  );
};

export default SectorsPage;
