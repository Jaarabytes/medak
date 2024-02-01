import Container from "@/components/container";
import SectionHeading from "@/components/section-heading";
import MiniHero from "@/components/sections/mini-hero";
import ParagraphSection from "@/components/sections/paragraph";
import SingleCommiteeMemberCard from "@/components/single-commitee-member-card";
import SingleLeadershipMemberCard from "@/components/single-leadership-member-card";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import ImageContainer from "@/components/ui/image-container";
import { committees, management } from "@/site-data";
import Link from "next/link";
import React from "react";
import { LuLinkedin } from "react-icons/lu";

const OurLeadership = () => {
  return (
    <div>
      <MiniHero
        title={"Our Leadership"}
        subTitle={
          "The MEDAK team, comprised of experienced experts, diligently strives to advance the medtech sector, aiming to enhance patient health outcomes."
        }
        bgImageURL="/images/horizontal-images/leadership-section.png"
      />

      <Container>
        <div className="mt-6">
          <SectionHeading heading="Secretariat" />
          <div className="grid grid-cols-2 sm:grid-cols-3  md:grid-cols-4 gap-10">
            {management.map((item, index) => (
              <SingleLeadershipMemberCard
                key={index}
                name={item.name}
                imageURL={item.image}
                position={item.position}
                bio={item.bio}
                linkedin={item.linkedin}
                email={item.email}
              />
            ))}
          </div>
        </div>

        {/* committees */}
        <div className="my-10 sm:my-12 md:my-16">
          <SectionHeading heading="Committees" />
          {committees.map((committee, index) => (
            <div className="mt-6" key={index}>
              <Dialog>
                <DialogTrigger asChild>
                  <SectionHeading
                    className="hover:text-primary  hover:cursor-pointer"
                    heading={`${committee.name}`}
                    small
                  />
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>
                      <SectionHeading
                        className="text-2xl"
                        heading={`${committee.name}`}
                      />
                    </DialogTitle>
                    <DialogDescription className="text-black">
                      <ParagraphSection
                        className="space-y-2"
                        small
                        title={"Current group priorities"}
                      >
                        <ul className="list-inside list-disc text-sm">
                          {committee.priorities.map((item, index) => (
                            <li key={index}>{item}</li>
                          ))}
                        </ul>
                      </ParagraphSection>
                      <ParagraphSection
                        className="space-y-2"
                        small
                        title={"Benefits of joining"}
                      >
                        <ul className="list-inside list-disc text-sm">
                          {committee.benefits.map((item, index) => (
                            <li key={index}>{item}</li>
                          ))}
                        </ul>
                      </ParagraphSection>
                    </DialogDescription>
                  </DialogHeader>
                </DialogContent>
              </Dialog>
              <div className="mt-4 grid grid-cols-2 sm:grid-cols-3  md:grid-cols-4 gap-10">
                {committee.members.map((item, index) => (
                  <SingleLeadershipMemberCard
                    key={index}
                    name={item.name}
                    imageURL={item.image}
                    bio={item.bio}
                    linkedin={item.linkedin}
                    email={item.email}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default OurLeadership;
