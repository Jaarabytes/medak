import About from "@/components/sections/about";
import CtaOne from "@/components/sections/cta-one";
import CtaTwo from "@/components/sections/cta-two";
import Events from "@/components/sections/events";
import Hero from "@/components/sections/hero";
import MembersAndPartners from "@/components/sections/members-and-partners";
import Resources from "@/components/sections/resources";

export default function Home() {
  return (
    <div className="space-y-2">
      <Hero
        link="/about"
        text="Empowering Kenya's Medtech Industry Collaboratively."
        imageURL="/images/horizontal-images/MEDICS-LOOKING-AT-AN-X-RAY-IMAGE.jpg"
      />

      <About />

      <CtaOne
        // this is the title of the cta section
        title={"Medical Technology Regulations in Kenya"}
        // this is the subtitle of the cta section
        subTitle={"Our Work"}
        // this is the description of the cta section
        description={
          " MEDAK collaborates with key stakeholders across Kenya, advocating for top medtech priorities, enhancing regulatory frameworks, and ensuring broader access to innovative medical technologies for improved healthcare outcomes."
        }
        // this is image url of the image in the cta section
        imageURL={"/images/horizontal-images/medak-ustda-meeting.png"}
        // when the link prop is passed the button in the cta section becomes a link (obviously) also there is an additional onClick prop which makes the button just a normal button with a click fuction and for f**ks sake just use one at a time
        link={"/what-we-do/regulatory-ethical-practices"}
        // the below prop (bgColor) can be used to change the background color of the cta section and the btnStyled one can be used to modify the styles or the appearance of the button in the cta section
        bgColor="bg-green-500"
        btnStyles="bg-green-700 hover:bg-green-900"
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
        imageURL={"/images/imageone.jpg"}
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
        description={" Medtech enhances healthcare in Kenya, offering tools from simple bandages to advanced MRI scans, ensuring effective diagnosis, treatment, and improved patient well-being."
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
        link={"/"}
        left
        imageURL={"/images/imageone.jpg"}
      />
      <Events />
    </div>
  );
}
