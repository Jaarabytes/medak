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
        bgImageURL="/images/horizontal-images/networking.png"
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
          imageURL={"/images/horizontal-images/medak-ustda-meeting.png"}
        />

        <CtaOne
          title={"Stakeholder Engagement & Industry Support"}
          description={
            "MEDAK promotes stakeholder involvement, offering industry backing to advance healthcare technology ethically and reliably."
          }
          left
          link="/what-we-do/patient-safety/"
          imageURL={"/images/vertical-images/stakeholder-engagement.png"}
        />

        <CtaOne
          title={"Market Intelligence & Market Research"}
          description={
            "MEDAK facilitates market intelligence by integrating industry expertise, collaborating with global associations, and fostering training opportunities."
          }
          link="/what-we-do/training-and-education/"
          imageURL={"/images/vertical-images/market-research.png"}
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
