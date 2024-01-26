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
import Link from "next/link";
import React from "react";
import { LuLinkedin } from "react-icons/lu";

const OurLeadership = () => {
  const management = [
    {
      name: "Steve Kipkoti",
      position: "Chairperson",
      image: "/images/headshots/steve-kipkoti.png",
      bio: "",
      linkedin: "https://linkedin.com/in/steve-kipkoti-235bb8aa",
      email: "mailto:steve.kipkoti@medtronic.com",
    },
    {
      name: "Mary Kinyanjui",
      position: "Vice-Chairperson",
      image: "/images/headshots/mary-kinyanjui.png",
      bio: "Mary Kinyanjui, a dynamic leader in the medical technology sector, boasts an illustrious academic background with a BSc in Pharmaceutical Sciences and Technology from Maseno University and a postgraduate Diploma in Public Health from Kenyatta University. Her career spans over seven years, marked by profound expertise in regulatory affairs and Quality Assurance within the Pharma manufacturing industry. Serving as the esteemed Vice Chair for MEDAK and an active member of the Regulatory and Trade Committee, Mary's influence extends beyond borders. Since 2020, she has been instrumental at Cepheid, where she excels as the Regulatory Affairs Senior Specialist for Global Market Expansion, skillfully navigating the diverse markets of East, West, and North Africa. Her pivotal role and rich experience make her a cornerstone of MEDAK's leadership and vision.",
      linkedin: "https://linkedin.com/in/mary-kinyanjui",
      email: "mailto:mary.kinyanjui@cepheid.com",
    },
    {
      name: "Njoki Mwangi",
      position: "Treasurer",
      image: "/images/headshots/njoki-mwangi.png",
      bio: "",
      linkedin: "https://linkedin.com/in/njoki-mwangi-10288376",
      email: "mailto:njoki@kijanimed.com",
    },
    {
      name: "Christopher Odero",
      position: "Secretary",
      image: "/images/headshots/christopher-odero.png",
      bio: "Christopher Odero, with nearly two decades in public health, is committed to enhancing healthcare access across Africa. As Manager for Regulatory Policies and Intelligence at Roche Diagnostics Africa, he expertly guides medical device and IVD initiatives. Serving as the Secretary of MEDAK, Christopher's leadership is pivotal in driving industry standards and advocacy. His impactful tenure at PATH involved critical policy formulation and malaria intervention across the continent. In his work with KEMRI/CDC, he spearheaded extensive malaria research and interventions. Renowned for shaping healthcare policies and fostering strategic partnerships, Christopher's dedication is integral to enhancing healthcare infrastructure and ensuring equitable access to quality care throughout Africa..",
      linkedin:
        "https://linkedin.com/in/christopher-odero-phd-c-msc-pmp-57b4886a",
      email: "mailto:christopher.odero@roche.com/",
    },
    {
      name: "Maureen Njeri",
      position: "Administrative Assistant",
      image: "/images/headshots/maureen-njeri.png",
      bio: "Maureen Njeri, the administrative assistant at MEDAK, is the backbone of the association's seamless operation. She expertly manages communications, ensuring prompt correspondence and stakeholder engagement. Her meticulous document management safeguards confidentiality, while her adept handling of membership duties strengthens community ties. Maureen excels in meeting coordination, adeptly organizing logistics and documenting proceedings. She diligently maintains financial records and the annual event calendar, ensuring operational efficiency. Committed to upholding MEDAK's mission, Maureen keeps abreast of industry trends, contributing valuable insights. Her dedication to enhancing MEDAK's public image shines through her meticulous management of digital platforms, reflecting the association's dynamic presence in the medical technology sector.",
      linkedin: "https://linkedin.com/in/maureen-njeri-9b8691122",
      email: "mailto:maureennjeri30@gmail.com/",
    },
  ];

  const committees = [
    {
      name: "Trade, Policy and Regulations",
      priorities: [
        "Actively engaging in shaping the regulatory environment in the region, by communicating the latest regulatory intelligence, and advocating industry challenges.",
        "Building capacity initiatives with internal and external stakeholders: educational sessions and training for members and regulators.",
        "Strengthening execution of the committee agreed upon objectives, mainly RA databank update and other internal projects.",
        "Building the wider network by cooperating with other trade associations and Cross-Committee Collaboration on industry priorities.",
      ],
      benefits: [
        "Synergy of a unified industry approach to ensure issues are escalated and discussed properly with authorities and awareness is created in alignment with international standards.",
        "Access to database information on the regulatory requirements per country.",
        " First-hand members’ updates on the regulatory changes in the region.",
        "Access to the regulators via group delegations and regulatory symposium, a platform for cooperation between regulators and the industry.",
      ],
      members: [
        {
          name: "Esther Mokaya",
          image: "/images/headshots/esther-mokaya.png",
          bio: "",
          linkedin: "https://www.linkedin.com/in/esther-mokaya-66929529",
          email: "mailto:info@mail.com",
        },
      ],
    },
    {
      name: "Legal & Compliance",
      priorities: [
        " Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus beatae iste, sapiente voluptas a saepe cum sint nam amet deleniti",
        " Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus beatae iste, sapiente voluptas a saepe cum sint nam amet deleniti",
        " Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus beatae iste, sapiente voluptas a saepe cum sint nam amet deleniti",
        " Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus beatae iste, sapiente voluptas a saepe cum sint nam amet deleniti",
      ],
      benefits: [
        " Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus beatae iste, sapiente voluptas a saepe cum sint nam amet deleniti",
        " Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus beatae iste, sapiente voluptas a saepe cum sint nam amet deleniti",
        " Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus beatae iste, sapiente voluptas a saepe cum sint nam amet deleniti",
        " Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus beatae iste, sapiente voluptas a saepe cum sint nam amet deleniti",
      ],
      members: [
        {
          name: "Brenton Okubasu",
          image: "/images/headshots/brenton-okubasu.png",
          bio: "",
          linkedin: "https://www.linkedin.com/in/brenton-o-a044b154",
          email: "mailto:info@mail.com",
        },
      ],
    },
    {
      name: "Government Affairs",
      priorities: [
        " Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus beatae iste, sapiente voluptas a saepe cum sint nam amet deleniti",
        " Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus beatae iste, sapiente voluptas a saepe cum sint nam amet deleniti",
        " Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus beatae iste, sapiente voluptas a saepe cum sint nam amet deleniti",
        " Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus beatae iste, sapiente voluptas a saepe cum sint nam amet deleniti",
      ],
      benefits: [
        " Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus beatae iste, sapiente voluptas a saepe cum sint nam amet deleniti",
        " Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus beatae iste, sapiente voluptas a saepe cum sint nam amet deleniti",
        " Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus beatae iste, sapiente voluptas a saepe cum sint nam amet deleniti",
        " Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus beatae iste, sapiente voluptas a saepe cum sint nam amet deleniti",
      ],
      members: [
        {
          name: "Steve Kipkoti",
          image: "",
          bio: "",
          linkedin: "https://www.linkedin.com/in/nelly-bosire-7b0b7a1b",
          email: "mailto:info@mail.com",
        },
        {
          name: "Mary Wangui",
          image: "",
          bio: "",
          linkedin: "https://www.linkedin.com/in/nelly-bosire-7b0b7a1b",
          email: "mailto:info@mail.com",
        },
      ],
    },
    {
      name: "Education & Training",
      priorities: [
        " Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus beatae iste, sapiente voluptas a saepe cum sint nam amet deleniti",
        " Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus beatae iste, sapiente voluptas a saepe cum sint nam amet deleniti",
        " Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus beatae iste, sapiente voluptas a saepe cum sint nam amet deleniti",
        " Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus beatae iste, sapiente voluptas a saepe cum sint nam amet deleniti",
      ],
      benefits: [
        " Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus beatae iste, sapiente voluptas a saepe cum sint nam amet deleniti",
        " Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus beatae iste, sapiente voluptas a saepe cum sint nam amet deleniti",
        " Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus beatae iste, sapiente voluptas a saepe cum sint nam amet deleniti",
        " Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus beatae iste, sapiente voluptas a saepe cum sint nam amet deleniti",
      ],
      members: [
        {
          name: "Dr. Jerusha Kamau",
          image: "/images/headshots/jerusha-kamau.png",
          bio: "",
          linkedin: "https://www.linkedin.com/in/jerusha-kamau-0a611070",
          email: "mailto:info@mail.com",
        },
      ],
    },
    {
      name: "Public Relations and Marketing",
      priorities: [
        " Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus beatae iste, sapiente voluptas a saepe cum sint nam amet deleniti",
        " Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus beatae iste, sapiente voluptas a saepe cum sint nam amet deleniti",
        " Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus beatae iste, sapiente voluptas a saepe cum sint nam amet deleniti",
        " Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus beatae iste, sapiente voluptas a saepe cum sint nam amet deleniti",
      ],
      benefits: [
        " Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus beatae iste, sapiente voluptas a saepe cum sint nam amet deleniti",
        " Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus beatae iste, sapiente voluptas a saepe cum sint nam amet deleniti",
        " Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus beatae iste, sapiente voluptas a saepe cum sint nam amet deleniti",
        " Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus beatae iste, sapiente voluptas a saepe cum sint nam amet deleniti",
      ],
      members: [
        {
          name: "Dr. Janki Chauhan",
          image: "/images/headshots/janki-chauhan.png",
          bio: "Dr. Janki Chauhan, a seasoned RA & QA pharmacist at Surgipharm Ltd, brings over five years of rich experience to the medical field. She has broadened her expertise into the medical device and surgical sector, aspiring to become a prominent figure among Kenya's female pharmacists specializing in regulatory affairs. Beyond her professional pursuits, Janki indulges in cooking, painting, and swimming. As the dynamic leader of MEDAK's PR - Public Relations Committee, she ensures transparent and timely communication, positioning MEDAK as a trusted interface between stakeholders and the public. Dr. Chauhan's leadership in the PR, Comms, and Marketing committee signifies her commitment to fostering collaboration and informed engagement across the healthcare ecosystem.",
          linkedin: "https://www.linkedin.com/in/dr-janki-c-80b31055",
          email: "mailto:janki.chauhan@surgipharm.com",
        },
      ],
    },
  ];

  return (
    <div>
      <MiniHero
        title={"Our Leadership"}
        subTitle={
          "The MEDAK team, comprised of experienced experts, diligently strives to advance the medtech sector, aiming to enhance patient health outcomes."
        }
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
