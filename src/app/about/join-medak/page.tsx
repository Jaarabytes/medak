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

        <ParagraphSection
          title="Who does MEDAK Represent"
          contained
          className=""
        >
          <p>MEDAK's membership includes:</p>
          <ul className="list-inside list-disc">
            <li>
              Major Multinational or Affiliate of multinational and local
              manufacturers of medical technologies.
            </li>
            <li>Local and international trade associations</li>
            <li>Wholesalers and Distributors</li>
            <li>Retailers</li>
            <li>Consultancies, agencies and emerging startups</li>
          </ul>
          <p>
            With members spanning from multinational corporations to burgeoning
            startups, MEDAK is the unified voice advocating for the medical
            technology industry's interests in Kenya and beyond.
          </p>
        </ParagraphSection>

        <ParagraphSection contained title="Membership Benefits" className="">
          <p>
            Joining MEDAK aligns your company with a premier network of over 400
            entities in the medical technology, diagnostic, and digital health
            sectors, all benefiting from continuous representation in key Kenyan
            healthcare policy spheres. Membership opens doors to a suite of
            exclusive advantages, ensuring your company stays at the forefront
            of industry developments:
          </p>

          <ul className="list-disc list-inside">
            <li>
              <span className="font-bold">Access to Industry Experts:</span>{" "}
              Engage with MEDAK's seasoned professionals for direct support,
              complex issue clarification, and strategic guidance, leveraging
              their extensive knowledge of agency, policy, and industry
              dynamics.
            </li>
            <li>
              <span className="font-bold">
                Insightful Policy & Business Intelligence:{" "}
              </span>{" "}
              Benefit from strategic insights and intelligence that help you
              navigate regulatory, political, or market complexities, saving
              costs and ensuring informed decision-making.
            </li>
            <li>
              <span className="font-bold">
                Product-Specific Working Groups:
              </span>{" "}
              Participate in specialized working groups to share strategies,
              gain insights from peers, and stay abreast of upcoming industry
              developments and innovations.
            </li>
            <li>
              <span className="font-bold">
                Exclusive MedTech Services & Resources:{" "}
              </span>{" "}
              Unlock a variety of benchmarking opportunities and member-only
              services and resources, designed to optimize your operations and
              competitive positioning.
            </li>
            <li>
              <span className="font-bold">
                Active Participation in Groups & Committees:{" "}
              </span>{" "}
              Engage in MEDAK's confidential forums, fostering open discussions
              on industry challenges, potential solutions, and leveraging the
              collective expertise of a diverse membership.
            </li>
            <li>
              <span className="font-bold">Influential Representation:</span>{" "}
              Gain a seat at the table to advocate for your business interests
              and policy priorities alongside key industry stakeholders, peers,
              and competitors.
            </li>
            <li>
              <span className="font-bold">
                Educational Events & Opportunities:
              </span>{" "}
              Access a wide spectrum of events and educational programs covering
              key topics like regulatory submissions, payment, reimbursement,
              and compliance, with exclusive discounts on these events and
              MEDAK’s annual conferences.
            </li>
          </ul>
        </ParagraphSection>

        <ParagraphSection
          contained
          title="Types of Membership/ MEDAK categorises members as follows:"
        >
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
