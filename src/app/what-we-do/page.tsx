import Container from "@/components/container";
import CtaOne from "@/components/sections/cta-one";
import CtaTwo from "@/components/sections/cta-two";
import MiniHero from "@/components/sections/mini-hero";
import ParagraphSection from "@/components/sections/paragraph";
import React from "react";

const FocusPrioritiesPage = () => {
  return (
    <>
      <MiniHero
        title={"What We Do"}
        subTitle={
          "MEDAK focuses on ethical medtech advancement, regulatory harmonization, and improved healthcare outcomes in Kenya and Africa."
        }
        bgImageURL="/images/imageone.jpg"
      />
      <div className="space-y-16 my-16">
        <CtaOne
          title={
            "Policy Shaping & Advocacy"
          }
          description={
            "MEDAK enhances Kenya's medical tech regulations with ethical practices, global standard alignment, and responsive, innovative advocacy."
          }
          link="/what-we-do/regulatory-ethical-practices/"
          imageURL={"/images/imageone.jpg"}
        />

        <CtaOne
          title={"Stakeholder Engagement & Industry Support"}
          description={
            "MEDAK champions patient safety, advocating for ethical standards and innovative medical solutions through rigorous regulatory compliance"
          }
          left
          link="/what-we-do/patient-safety/"
          imageURL={"/images/imageone.jpg"}
        />

        <CtaOne
          title={"Market Intelligence & Market Research"}
          description={
            "MEDAK aids members in mastering Kenya and Africa's regulatory landscape through comprehensive training, resources, and direct engagement."
          }
          link="/what-we-do/training-and-education/"
          imageURL={"/images/imageone.jpg"}
        />

        <CtaOne
          title={"Networking & Collaboration"}
          description={
            "MEDAK cultivates robust networking and collaboration, uniting global industry experts to drive innovation and shared progress."
          }
          left
          link="/what-we-do/networking-and-collaboration/"
          imageURL={"/images/imageone.jpg"}
        />
      </div>
    </>
  );
};

export default FocusPrioritiesPage;
