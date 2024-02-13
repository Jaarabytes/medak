import Container from "@/components/container";
import MiniHero from "@/components/sections/mini-hero";
import ParagraphSection from "@/components/sections/paragraph";
import React from "react";

const PatientSafetyPage = () => {
  return (
    <div>
      <MiniHero
        title={"Stakeholder Engagement & Industry Support"}
        subTitle={
          "MEDAK engages stakeholders through collaboration, offering industry support to advance healthcare technology ethically and reliably."
        }
        bgImageURL="/images/horizontal-images/stakeholder-engagement-small.png"
      />

      <Container>
        <ParagraphSection contained>
          MEDAK actively engages stakeholders and provides industry support 
          to foster dynamic networking and collaboration, 
          driving innovation and shaping the future of medical technology. 
          With a core focus on patient safety, 
          MEDAK integrates seamlessly with its commitment to enhancing access to medical technology and in vitro diagnostics (IVDs), 
          all while upholding the highest ethical standards.
        </ParagraphSection>
        <ParagraphSection contained>
          Through its robust ethical framework and diligent adherence to its Code of Conduct, 
          MEDAK ensures that every interaction 
          and communication regarding medical devices and IVDs 
          is transparent, accurate, and ethically sound. 
          This commitment not only guides member companies in maintaining integrity 
          but also reinforces the reliability 
          and quality of medical technologies in the market.
        </ParagraphSection>
        <ParagraphSection contained>
          MEDAK's advocacy for patient access to medical technology 
          is deeply intertwined with its dedication to patient safety. 
          By promoting the availability of advanced, high-quality medical devices 
          and IVDs and ensuring accessibility for all, 
          MEDAK actively contributes to a healthcare environment where safety, innovation, and accessibility are interconnected.
        </ParagraphSection>
        <ParagraphSection contained>
          Through stakeholder engagement initiatives and industry support programs, 
          MEDAK facilitates collaboration among industry leaders, healthcare professionals, regulators, and patients. 
          These efforts encourage knowledge sharing, drive innovation, 
          and ensure that the development and deployment of medical technologies 
          align with patient safety and well-being.
        </ParagraphSection>
      </Container>
    </div>
  );
};

export default PatientSafetyPage;
