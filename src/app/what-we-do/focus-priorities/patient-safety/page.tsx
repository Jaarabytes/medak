import MiniHero from "@/components/sections/mini-hero";
import React from "react";

const PatientSafetyPage = () => {
  return (
    <div>
      <MiniHero
        title={"Patient Safety."}
        subTitle={
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima tempore dolore corporis repudiandae assumenda fuga impedit illum corrupti"
        }
        bgImageURL="/images/imageone.jpg"
      />
    </div>
  );
};

export default PatientSafetyPage;
