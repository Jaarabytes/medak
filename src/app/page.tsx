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
        text="Experience patient-centric innovation in Kenya."
        imageURL="/images/horizontal images/MEDICS-LOOKING-AT-AN-X-RAY-IMAGE.jpg"
      />

      <About />

      <CtaOne
        // this is the title of the cta section
        title={"Wow some new title."}
        // this is the subtitle of the cta section
        subTitle={"Lorem ipsum dolor"}
        // this is the description of the cta section
        description={
          " Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque in harum ea nam debitis, laudantium vero, incidunt corrupti omnis vel molestias dicta maiores dolor perferendis, alias ullam quam repudiandae eius!"
        }
        // this ist image url of the image in the cta section
        imageURL={"/images/imageone.jpg"}
        // when the link prop is passed the button in the cta section becomes a link (obviously) also there is an additional onClick prop which makes the button just a normal button with a click fuction and for f**ks sake just use one at a time
        link={"/"}
        // the below prop (bgColor) can be used to change the background color of the cta section and the btnStyled one can be used to modify the styles or the appearance of the button in the cta section
        bgColor="bg-green-500"
        btnStyles="bg-green-700 hover:bg-green-900"
      />
      <CtaOne
        title={" Lorem ipsum dolor sit amet consectetur adipisicing elit."}
        subTitle={"subTitle"}
        description={
          " Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque in harum ea nam debitis, laudantium vero, incidunt corrupti omnis vel molestias dicta maiores dolor perferendis, alias ullam quam repudiandae eius!"
        }
        link={"/"}
        // this one has the left prop meaning the image moves from the side it was to the opposite side (very obvious again)
        left
        imageURL={"/images/imageone.jpg"}
      />
      <Resources />
      <MembersAndPartners
        title={" Members and partners."}
        description={
          " Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque in harum ea nam debitis, laudantium vero, incidunt corrupti omnis vel molestias dicta maiores dolor perferendis, alias ullam quam repudiandae eius!"
        }
      />
      <CtaTwo
        title={" Lorem ipsum dolor sit amet consectetur adipisicing elit."}
        subTitle={"subTitle"}
        description={
          " Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque in harum ea nam debitis, laudantium vero, incidunt corrupti omnis vel molestias dicta maiores dolor perferendis, alias ullam quam repudiandae eius!"
        }
        link={"/"}
        imageURL={"/images/imageone.jpg"}
      />
      <CtaTwo
        title={" Lorem ipsum dolor sit amet consectetur adipisicing elit."}
        subTitle={"subTitle"}
        description={
          " Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque in harum ea nam debitis, laudantium vero, incidunt corrupti omnis vel molestias dicta maiores dolor perferendis, alias ullam quam repudiandae eius!"
        }
        link={"/"}
        left
        imageURL={"/images/imageone.jpg"}
      />
      <Events />
    </div>
  );
}
