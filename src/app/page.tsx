import CtaOne from "@/components/sections/cta-one";
import CtaTwo from "@/components/sections/cta-two";
import Events from "@/components/sections/events";
import Hero from "@/components/sections/hero";
import Resources from "@/components/sections/resources";
import Image from "next/image";

export default function Home() {
  return (
    <div className="space-y-2">
      <Hero
        link="/"
        text="Bringing innovation to patient care worldwide"
        imageURL="/images/imageone.jpg"
      />
      <CtaOne
        title={" Lorem ipsum dolor sit amet consectetur adipisicing elit."}
        subTitle={"Lorem ipsum dolor"}
        description={
          " Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque in harum ea nam debitis, laudantium vero, incidunt corrupti omnis vel molestias dicta maiores dolor perferendis, alias ullam quam repudiandae eius!"
        }
        link={"/"}
        imageURL={"/images/imageone.jpg"}
      />
      <CtaOne
        title={" Lorem ipsum dolor sit amet consectetur adipisicing elit."}
        subTitle={"subTitle"}
        description={
          " Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque in harum ea nam debitis, laudantium vero, incidunt corrupti omnis vel molestias dicta maiores dolor perferendis, alias ullam quam repudiandae eius!"
        }
        link={"/"}
        left
        imageURL={"/images/imageone.jpg"}
      />
      <Resources />
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
