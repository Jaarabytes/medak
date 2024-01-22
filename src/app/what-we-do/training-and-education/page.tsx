import Container from "@/components/container";
import MiniHero from "@/components/sections/mini-hero";
import ParagraphSection from "@/components/sections/paragraph";
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
      <Container>
        <ParagraphSection contained>
          At MEDAK, we prioritise capacity-building initiatives that help us
          stay informed about global regulatory trends by combining the
          knowledge of industry professionals with that of trade associations.
          The area will be better able to adapt to global changes if this is
          done. European, American, Asian, and African international
          associations work closely with MEDAK.
        </ParagraphSection>
        <ParagraphSection contained>
          The Medical Devices, IVDs, and Imaging industries are all represented
          at MEDAK, allowing the MEDAK members to draw on the knowledge of
          professionals from around the world. Opportunities for high-quality
          training and capacity-building are made possible through this
          partnership, which also strengthens sustainability, improves
          governance and oversight, encourages teamwork, and strengthens
          infrastructure and expertise.
        </ParagraphSection>
      </Container>
    </div>
  );
};

export default TrainingAndEducationPage;
