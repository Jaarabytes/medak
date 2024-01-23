import Container from "@/components/container";
import SectionHeading from "@/components/section-heading";
import MiniHero from "@/components/sections/mini-hero";
import SingleCommiteeMemberCard from "@/components/single-commitee-member-card";
import SingleLeadershipMemberCard from "@/components/single-leadership-member-card";
import { Button } from "@/components/ui/button";
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
      linkedin: "http://linkedin.com/in/steve-kipkoti-235bb8aa",
      email: "mailto:steve.kipkoti@medtronic.com",
    },
    {
      name: "Mary Kinyanjui",
      position: "Vice-Chairperson",
      image: "/images/headshots/mary-kinyanjui.png",
      bio: "",
      linkedin: "http://linkedin.com/in/mary-kinyanjui",
      email: "mailto:mary.kinyanjui@cepheid.com",
    },
    {
      name: "Njoki Mwangi",
      position: "Treasurer",
      image: "/images/headshots/njoki-mwangi.png",
      bio: "",
      linkedin: "http://linkedin.com/in/njoki-mwangi-10288376",
      email: "mailto:njoki@kijanimed.com",
    },
    {
      name: "Christopher Odero",
      position: "Secretary",
      image: "/images/headshots/christopher-odero.png",
      bio: "Dr. Nelly Bosire is the Chairperson of the Medical Device Association of Kenya (MEDAK). She is the Founder and CEO of the Kenyan based company, MedSource Group, which provides medical devices, equipment, and supplies to the healthcare industry in Kenya and East Africa. She is also the Founder and CEO of the MedSource Foundation, a non-profit organization that provides medical devices and supplies to underserved communities in Kenya. Dr. Bosire is a trained medical doctor and has a Master’s degree in Public Health from the University of Liverpool. She is passionate about improving access to quality healthcare in Kenya and Africa.",
      linkedin:
        "http://linkedin.com/in/christopher-odero-phd-c-msc-pmp-57b4886a",
      email: "mailto:christopher.odero@roche.com/",
    },
    {
      name: "Maureen Njeri",
      position: "Administrative Assistant",
      image: "/images/headshots/maureen-njeri.png",
      bio: "",
      linkedin: "http://linkedin.com/in/maureen-njeri-9b8691122",
      email: "mailto:maureennjeri30@gmail.com/",
    },
  ];

  const committees = [
    {
      name: "Trade, Policy and Regulations",
      members: [
        {
          name: "Margaret Mulwa",
          image: "",
          bio: "",
          linkedin: "https://www.linkedin.com/in/nelly-bosire-7b0b7a1b/",
          email: "mailto:info@mail.com",
        },
        {
          name: "Dr. David Karenye",
          image: "",
          bio: "",
          linkedin: "https://www.linkedin.com/in/nelly-bosire-7b0b7a1b/",
          email: "mailto:info@mail.com",
        },
      ],
    },
    {
      name: "Legal and Compliance",
      members: [
        {
          name: "Brenton Okubasu",
          image: "",
          bio: "",
          linkedin: "https://www.linkedin.com/in/nelly-bosire-7b0b7a1b/",
          email: "mailto:info@mail.com",
        },
      ],
    },
    {
      name: "Government Affairs",
      members: [
        {
          name: "Steve Kipkoti",
          image: "",
          bio: "",
          linkedin: "https://www.linkedin.com/in/nelly-bosire-7b0b7a1b/",
          email: "mailto:info@mail.com",
        },
        {
          name: "Mary Wangui",
          image: "",
          bio: "",
          linkedin: "https://www.linkedin.com/in/nelly-bosire-7b0b7a1b/",
          email: "mailto:info@mail.com",
        },
      ],
    },
    {
      name: "Public Relations and Communications",
      members: [
        {
          name: "Dr. Janki Chauhan",
          image: "/images/headshots/janki-chauhan.png",
          bio: "",
          linkedin: "https://www.linkedin.com/in/dr-janki-c-80b31055",
          email: "mailto:janki.chauhan@surgipharm.com",
        },
        {
          name: "Njoki Mwangi",
          image: "/images/headshots/njoki-mwangi.png",
          bio: "lorem",
          linkedin: "https://www.linkedin.com/in/nelly-bosire-7b0b7a1b/",
          email: "mailto:info@mail.com",
        },
      ],
    },
  ];
  return (
    <div>
      <MiniHero title={"Our Leadership"} subTitle={"Our Leadership"} />
      <Container>
        <div className="mt-6">
          <SectionHeading heading="Secretariat" />
          <div className="grid grid-cols-2 sm:grid-cols-3  md:grid-cols-4 gap-10">
            {management.map((item, index) => (
              // <div key={index} className="group">
              //   <div className="">
              //     <ImageContainer
              //       ratio={1}
              //       alt="image"
              //       imageURL={item.image ? item.image : "/user-placeholder.png"}
              //       object="cover"
              //     />
              //   </div>
              //   <div className="mt-3">
              //     <h3 className="text-primary font-bold group-hover:underline">
              //       {item.name}
              //     </h3>
              //     <p className="text-sm font-semibold">{item.position}</p>
              //   </div>
              // </div>
              <SingleLeadershipMemberCard
                key={index}
                name={item.name}
                imageURL={item.image}
                position={item.position}
                bio={item.bio}
              />
            ))}
          </div>
        </div>

        {/* committees */}
        <div className="my-10 sm:my-12 md:my-16">
          <SectionHeading heading="Committees" />
          {committees.map((committee, index) => (
            <div className="mt-6" key={index}>
              <SectionHeading heading={`${committee.name} committee`} small />
              <div className="grid grid-cols-2 sm:grid-cols-3  md:grid-cols-4 gap-10">
                {committee.members.map((item, index) => (
                  <SingleCommiteeMemberCard
                    key={index}
                    name={item.name}
                    imageURL={item.image}
                    bio={item.bio}
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
