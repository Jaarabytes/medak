import Container from "@/components/container";
import SectionHeading from "@/components/section-heading";
import MiniHero from "@/components/sections/mini-hero";
import ImageContaier from "@/components/ui/image-container";
import React from "react";

const MembersPage = () => {
  const members = [
    {
      title: "Industry Members",
      items: [
        {
          title: "abbott laboratories",
          imageURL: "/logos/members/Abbott-Logo.svg",
        },
        {
          title: "b. braun",
          imageURL: "/logos/members/bbraun-logo.svg",
        },
        {
          title: "becton dickinson",
          imageURL: "/logos/members/Becton-Dickinson-logo.svg",
        },
        {
          title: "cepheid",
          imageURL: "/logos/members/cepheid-logo.svg",
        },
        {
          title: "medtronic",
          imageURL: "/logos/members/Medtronic-Logo.svg",
        },
        {
          title: "Johnson & Johnson",
          imageURL: "/logos/members/JNJ-Logo.svg",
        },
        {
          title: "GE Healthcare",
          imageURL: "/logos/members/GEHealthCare-logo.svg",
        },
        {
          title: "F&S Scientific",
          imageURL: "/logos/members/F&S-logo.svg",
        },
        {
          title: "roche",
          imageURL: "/logos/members/roche-logo.svg",
        },
      ],
    },
    {
      title: "Associate members",
      items: [
        {
          title: "amiken limited",
          imageURL: "/logos/members/amikenltd-logo.svg",
        },
        {
          title: "alphamedical manufacturers",
          imageURL: "/logos/members/alphamedicalmanufacturers-logo.svg",
        },
        {
          title: "bel-aire international",
          imageURL: "/logos/members/belaire-international-ltd.svg",
        },
        {
          title: "jeyflex",
          imageURL: "/logos/members/jeyflex-logo.svg",
        },
        {
          title: "surgipharm",
          imageURL: "/logos/members/surgipharm-logo.svg",
        },
        {
          title: "meditec systems",
          imageURL: "/logos/members/meditecsystems-logo.svg",
        },
        {
          title: "meraky healthcare",
          imageURL: "/logos/members/merakyhealthcare--logo.svg",
        },
        {
          title: "statim pharmaceuticals",
          imageURL: "/logos/members/statimpharmaceuticalsltf-logo.svg",
        },
        {
          title: "lochlabs limited",
          imageURL: "/logos/members/lochlabsltdblack-logo.svg",
        },
        {
          title: "imperial logistics",
          imageURL: "/logos/members/imperiallogistics-logo.svg",
        },
        {
          title: "kijani medical",
          imageURL: "/logos/members/kijanimedical-logo.svg",
        },
      ],
    },
  ];

  const partners = [
    {
      title: "advamed",
      imageURL: "/logos/partners/advamed-logo.svg",
    },
    {
      title: "AMDF",
      imageURL: "/logos/partners/AMDF-logo.svg",
    },
    {
      title: "mecomed",
      imageURL: "/logos/partners/mecomed-logo.svg",
    },
    {
      title: "medtech europe",
      imageURL: "/logos/partners/medtecheurope-logo.svg",
    },
  ];
  return (
    <div>
      <MiniHero
        title={"Members and Partners"}
        subTitle={
          "MEDAK unites industry leaders, associates, and partners to advance healthcare innovation and collaboration."
        }
      />
      <Container className="mb-10">
        <div>
          <SectionHeading heading="Our Members" />
          <div className=" space-y-8">
            {members.map((member, index) => (
              <div key={index}>
                <SectionHeading heading={member.title} small />
                <div className="grid grid-cols-2 sm:grid-cols-3  md:grid-cols-4 gap-10">
                  {member.items.map((item, index) => (
                    <div key={index} className="group">
                      <div className="bg-muted">
                        <ImageContaier
                          ratio={16 / 9}
                          alt="image"
                          imageURL={item.imageURL}
                          object="contain"
                        />
                      </div>
                      <div className="mt-3">
                        <h3 className=" font-semibold group-hover:underline group-hover:text-primary capitalize">
                          {item.title}
                        </h3>
                        {/* <p className="text-sm font-semibold">{item.position}</p> */}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* partners */}
        <div className="mt-10">
          <h1 className="text-4xl font-bold">Partners</h1>
          <div className="mt-6 space-y-8">
            <div className="grid grid-cols-2 sm:grid-cols-3  md:grid-cols-4 gap-10">
              {partners.map((item, index) => (
                <div key={index} className="group">
                  <div className="bg-muted">
                    <ImageContaier
                      ratio={16 / 9}
                      alt="image"
                      imageURL={item.imageURL}
                      object="contain"
                    />
                  </div>
                  <div className="mt-3">
                    <h3 className=" font-semibold group-hover:underline group-hover:text-primary capitalize">
                      {item.title}
                    </h3>
                    {/* <p className="text-sm font-semibold">{item.position}</p> */}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default MembersPage;
