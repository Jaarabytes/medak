import React from "react";
import Container from "../container";
import { siteData } from "@/site-data";
import { Button } from "../ui/button";
import { CardTitle } from "../ui/card";
import { LucideHome } from "lucide-react";
import { LuHome } from "react-icons/lu";
import { FaChartLine, FaDollarSign, FaPeopleCarry } from "react-icons/fa";
import { GrGrow } from "react-icons/gr";

const AboutAction = ({
  title,
  description,
  icon,
}: {
  title: string;
  description: string;
  icon?: React.ReactNode;
}) => {
  return (
    <div className=" md:w-10/12 ">
      <div className="mb-4 text-4xl">{icon ? <>{icon}</> : <LuHome />}</div>

      <CardTitle className="mb-2">{title}</CardTitle>
      <p className="text-sm ">{description}</p>
    </div>
  );
};

const About = () => {
  return (
    <section>
      <Container>
        <h1 className="text-xl md:text-2xl max-w-5xl mx-auto py-6 text-center font-semibold">
          MEDAK is an organization that unites stakeholders to enhance
          healthcare across Africa with advanced medical technologies and
          ethical practices.
        </h1>
        <div className="aspect-video bg-slate-600  mx-auto w-full md:w-9/12 md:-mb-[15em]">
          <video src="/vid.mp4" className="h-full w-full" controls />
        </div>
      </Container>

      <div className="bg-primary py-20 text-white">
        <div className="hidden md:block h-[15em]"></div>
        <Container className=" ">
          <div className="grid grid-cols-12 space-y-10 md:space-y-0">
            <div className="col-span-12 md:col-span-5">
              <h3 className="font-bold mb-2 text-xl">
                {siteData.title.toUpperCase()}'s Impact
              </h3>
              <p className="pr-10">
                MEDAK pioneers in advancing Kenya's healthcare, championing
                access to medical technology for improved diagnosis and
                treatment. With a thriving $350M market, we tackle health
                challenges, fostering ethical innovation and unified standards
                to enhance patient care and drive sector growth.
              </p>
              {/* <Button className="bg-white text-primary hover:bg-primary hover:text-white capitalize mt-8">
              our story
            </Button> */}
            </div>
            <div className="col-span-12 md:col-span-7  ">
              <div className="grid grid-cols-2 gap-10 md:gap-10 ">
                <AboutAction
                  icon={<FaPeopleCarry />}
                  title="55.6M"
                  description="Enriching the lives of 55.6 million Kenyans"
                />
                <AboutAction
                  icon={<FaDollarSign />}
                  title="$350M "
                  description="Driving a US$350 million healthcare revolution."
                />
                <AboutAction
                  icon={<GrGrow />}
                  title="2X"
                  description="Addressing both communicable and non-communicable diseases head-on"
                />
                <AboutAction
                  icon={<FaChartLine />}
                  title="4.06%"
                  description="Propelling healthcare with a steady 4.06% annual growth."
                />
              </div>
            </div>
          </div>
        </Container>
      </div>
    </section>
  );
};

export default About;
