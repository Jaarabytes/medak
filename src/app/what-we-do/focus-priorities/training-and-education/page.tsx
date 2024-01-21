import MiniHero from "@/components/sections/mini-hero";
import React from "react";

const TrainingAndEducationPage = () => {
  return (
    <div>
      <MiniHero
        title={"Training and education."}
        subTitle={
          "MEDAK aids members in mastering Kenya and Africa's regulatory landscape through comprehensive training, resources, and direct engagement."
        }
        bgImageURL="/images/imageone.jpg"
      />
    </div>
  );
};

export default TrainingAndEducationPage;
