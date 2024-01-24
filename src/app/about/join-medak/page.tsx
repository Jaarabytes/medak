import Container from "@/components/container";
import SectionHeading from "@/components/section-heading";
import MiniHero from "@/components/sections/mini-hero";
import ParagraphSection from "@/components/sections/paragraph";
import React from "react";

const JoinMedak = () => {
  return (
    <div>
      <MiniHero
        title={"Join MEDAK"}
        subTitle={
          "Be part of a community that is shaping medical technology policy, advocacy and improving patient outcomes in Africa."
        }
      />
      <Container className="mb-10">
        <ParagraphSection contained className="">
          <span>
            Serving Kenya in particular, MEDAK represents more than 20 medical
            technology manufacturers, their partners, retailers and distributors
            throughout Africa. MEDAK provides unwavering support to member
            companies and partners, consistently serving patients who rely on
            medical technology daily. Check out the benefits of MedTech services
            and MEDAK membership.
          </span>
        </ParagraphSection>
        <ParagraphSection contained className="">
          <span>
          Who Does MEDAK Represent?
          MEDAK’s membership includes:
          Major Multinational / Affiliate of multinational and local manufacturers of medical technologies.
          Local and international trade associations
          Wholesaler/ Distributor
          Retailer
          Consultancy/ agency and emerging startups in the medical technology industry
          </span>
        </ParagraphSection>
        
        <ParagraphSection contained title="Membership Benefits" className="">
          <SectionHeading
            heading=" Types of Membership/ MEDAK categorises members as follows:"
            small
          />
          <p>
            The MEDAK Constitution provides for membership to be made up of:
          </p>
          <ul className="list-disc list-inside">
            <li>
              <span className="font-bold">Ordinary Members</span>
              <p>
                These are voting members whose primary business is the design,
                manufacture, importation, exportation, marketing, sale,
                application, use, wholesaling, and/or other application of
                medical technology. <br />
                For the purposes of registration and annual subscriptions, these
                members are categorised as microenterprises, medium enterprises,
                and macroenterprises
              </p>
            </li>
            <li>
              <span className="font-bold">Associate Members</span>
              <p>
                These are non-voting members who do not qualify as ordinary
                members but trade with and/or provide services to the medical
                technology industry.
              </p>
            </li>
            <li>
              <span className="font-bold">Healthcare Association members</span>
              <p>
                These are voting members who do not qualify as ordinary members
                or associate members but have some overlapping objectives and
                interests with those of ordinary members within the medical
                technology industry or relating to medical technology.
              </p>
            </li>
            <li>
              <span className="font-bold">Honorary Members.</span>
              <p>
                These are natural persons who are non-voting, non-Board Member,
                or Association Member who, in the opinion of the Executive
                Committee, have rendered exceptionally valuable or exemplary
                services to the association or the medical technology industry
                and have been granted honorary membership by the EC and who may
                attend meetings of members but not be entitled to vote but may
                receive general communications and may be invited to the
                association’s activities and functions. Honorary members shall
                be eligible for nomination to the Advisory Board.
              </p>
            </li>
          </ul>
        </ParagraphSection>
      </Container>
    </div>
  );
};

export default JoinMedak;
