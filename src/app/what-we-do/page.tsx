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
        title={"What we do"}
        subTitle={
          "MEDAK focuses on ethical medtech advancement, regulatory harmonization, and improved healthcare outcomes in Kenya and Africa."
        }
        bgImageURL="/images/imageone.jpg"
      />
      <div className="space-y-16 my-16">
        <CtaOne
          title={
            "Regulatory Ethical Practices/ Medical Tech Regulations in Kenya"
          }
          description={
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima tempore dolore corporis repudiandae assumenda fuga impedit illum corrupti"
          }
          link="/what-we-do/regulatory-ethical-practices/"
          imageURL={"/images/imageone.jpg"}
        />

        <CtaOne
          title={"Patient Safety."}
          description={
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima tempore dolore corporis repudiandae assumenda fuga impedit illum corrupti"
          }
          left
          link="/what-we-do/patient-safety/"
          imageURL={"/images/imageone.jpg"}
        />

        <CtaOne
          title={"Harmonisation of Standards."}
          description={
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima tempore dolore corporis repudiandae assumenda fuga impedit illum corrupti"
          }
          link="/what-we-do/harmonization-of-standards/"
          imageURL={"/images/imageone.jpg"}
        />

        <CtaOne
          title={"Responsive advocacy and compliance."}
          description={
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima tempore dolore corporis repudiandae assumenda fuga impedit illum corrupti"
          }
          left
          link="/what-we-do/responsive-advocacy/"
          imageURL={"/images/imageone.jpg"}
        />

        <CtaOne
          title={"Training and education."}
          description={
            "MEDAK aids members in mastering Kenya and Africa's regulatory landscape through comprehensive training, resources, and direct engagement."
          }
          link="/what-we-do/training-and-education/"
          imageURL={"/images/imageone.jpg"}
        />

        <CtaOne
          title={"Networking and collaboration."}
          description={
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima tempore dolore corporis repudiandae assumenda fuga impedit illum corrupti"
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
