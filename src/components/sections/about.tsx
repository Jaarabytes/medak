import React from "react";
import Container from "../container";
import { siteData } from "@/site-data";
import { Button } from "../ui/button";
import { CardTitle } from "../ui/card";
import { LucideHome } from "lucide-react";
import { LuHome } from "react-icons/lu";

const AboutAction = ({
  title,
  description,
}: {
  title: string;
  description: string;
}) => {
  return (
    <div className="w-10/12">
      <div className="mb-4 text-4xl">
        <LuHome />
      </div>
      <CardTitle className="mb-2">{title}</CardTitle>
      <p className="text-sm">{description}</p>
    </div>
  );
};

const About = () => {
  return (
    <section>
      <Container>
        <h1 className="text-xl md:text-2xl max-w-5xl mx-auto py-6">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas
          labore minus quasi recusandae excepturi voluptatibus debitis error
          ducimus ut, animi earum ipsam
        </h1>

        <div className="aspect-video bg-slate-600  mx-auto w-full md:w-9/12 md:-mb-[15em]">
          <video src="/vid.mp4" className="h-full w-full" controls />
        </div>
      </Container>

      <div className="bg-primary py-20 text-white">
        <div className="hidden md:block h-[15em]"></div>
        <Container className="grid grid-cols-12 gap-10">
          <div className="col-span-12 md:col-span-5">
            <h3 className="font-bold mb-2">{siteData.title} impact</h3>
            <p className="pr-10">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit
              saepe optio illum exercitationem molestiae quia veritatis at enim
              officiis. Libero eveniet vel nam quia aut facilis inventore
              quibusdam commodi reiciendis.
            </p>
            <Button className="bg-white text-primary hover:bg-primary hover:text-white capitalize mt-8">
              our story
            </Button>
          </div>
          <div className="col-span-12 md:col-span-7 grid grid-cols-2 gap-10">
            <AboutAction
              title="59%"
              description="Lorem ipsum dolor sit amet consectetur adipisicing elit."
            />
            <AboutAction
              title="1/2"
              description="Lorem ipsum dolor sit amet consectetur adipisicing elit."
            />
            <AboutAction
              title="4000 +"
              description="Lorem ipsum dolor sit amet consectetur adipisicing elit."
            />
            <AboutAction
              title="2M"
              description="Lorem ipsum dolor sit amet consectetur adipisicing elit."
            />
          </div>
        </Container>
      </div>
    </section>
  );
};

export default About;
