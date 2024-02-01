import Container from "@/components/container";
import MiniHero from "@/components/sections/mini-hero";
import ParagraphSection from "@/components/sections/paragraph";
import React from "react";

const TrainingAndEducationPage = () => {
  return (
    <div>
      <MiniHero
        title={"Market Intelligence & Market Research"}
        subTitle={
          "MEDAK enhances market intelligence through industry expertise integration, global association collaboration, and training opportunity facilitation."
        }
        bgImageURL="/images/horizontal-images/market-research.png"
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
        <ParagraphSection contained>
          MEDAK fosters market intelligence 
          through collaborative efforts with global trade associations and industry professionals. 
          This ensures informed adaptation to regulatory trends. 
          With representation from diverse international associations, 
          MEDAK provides access to worldwide expertise. 
          This collaborative environment enables high-quality training, 
          enhancing sustainability, governance, teamwork, and infrastructure expertise.
        </ParagraphSection>
      </Container>
    </div>
  );
};

export default TrainingAndEducationPage;
