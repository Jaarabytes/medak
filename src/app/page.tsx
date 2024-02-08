import About from "@/components/sections/about";
import CtaOne from "@/components/sections/cta-one";
import CtaTwo from "@/components/sections/cta-two";
import Events from "@/components/sections/events";
import Hero from "@/components/sections/hero";
import HeroTwo from "@/components/sections/hero-two";
import MembersAndPartners from "@/components/sections/members-and-partners";
import Resources from "@/components/sections/resources";

export default function Home() {
  return (
    <div className="space-y-2">
      {/* <HeroTwo
        title={"Medak"}
        subTitle={"Empowering Kenya's Medtech Industry Collaboratively."}
        bgImageURL="/images/horizontal-images/medical-technology-stethoscope.png"
      /> */}

      <Hero
        link="/about"
        text="Empowering Kenya's Medtech Industry Collaboratively."
        imageURL="/images/horizontal-images/medical-technology-stethoscope.png"
      />

      <About />

      <CtaOne
        title={"Medical Technology Regulations in Kenya"}
        subTitle={"Our Work"}
        description={
          " MEDAK collaborates with key stakeholders across Kenya, advocating for top medtech priorities, enhancing regulatory frameworks, and ensuring broader access to innovative medical technologies for improved healthcare outcomes."
        }
        imageURL={"/images/horizontal-images/medak-ustda-meeting.png"}
        link={"/what-we-do/regulatory-ethical-practices"}
        bgColor="bg-green-500"
        btnStyles="bg-green-700 hover:bg-green-900"
        btntext="Read More"
      />

      <CtaOne
        title={" News, Research & Policy Papers"}
        subTitle={"Latest Updates"}
        description={
          " Discover cutting-edge insights and trends in our latest research, news, and policy papers, shaping the future of the medtech industry."
        }
        link={"/blog"}
        // this one has the left prop meaning the image moves from the side it was to the opposite side (very obvious again)
        left
        imageURL={"/images/vertical-images/research-papers-files.png"}
      />

      <Resources />

      <MembersAndPartners
        title={" Members & Partners"}
        description={
          " Collaborating with global leaders and local stakeholders to shape the future of medical technology in Africa."
        }
      />

      <CtaTwo
        title={" Medtech Industry Overview "}
        subTitle={"About Medical Technology "}
        description={
          " Medtech enhances healthcare in Kenya, offering tools from simple bandages to advanced MRI scans, ensuring effective diagnosis, treatment, and improved patient well-being."
        }
        link={"/about-the-industry"}
        imageURL={"/images/vertical-images/blood-pressure-testing.png"}
      />

      <CtaTwo
        title={" Our Code of Ethics"}
        subTitle={"Compliance"}
        description={
          " MEDAK's Code of Ethics champions integrity, guiding member companies in ethical healthcare interactions, fostering innovation, transparency, and commitment to compliance in medical technology practices."
        }
        link={"/documents/MEDAK-CODE-OF-ETHICAL-BUSINESS-PRACTICE.pdf"}
        downloadable
        left
        imageURL={"/images/vertical-images/medak-code-of-ethics.png"}
      />
      <Events />
    </div>
  );
}
