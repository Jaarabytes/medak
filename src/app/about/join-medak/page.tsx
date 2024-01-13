import Container from "@/components/container";
import MiniHero from "@/components/sections/mini-hero";
import React from "react";

const JoinMedak = () => {
  return (
    <div>
      <MiniHero
        title={"Join Medak"}
        subTitle={
          "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quae, iste"
        }
      />
      <Container className="mb-10">
        <div className="py-5">
          Serving Kenya in particular, MEDAK represents more than 20 medical
          technology manufacturers, their partners, retailers and distributors
          throughout Africa. MEDAK provides unwavering support to member
          companies and partners, consistently serving patients who rely on
          medical technology daily. Check out the benefits of MedTech services
          and MEDAK membership.
        </div>
        <div className="">
          <h1 className="font-bold text-4xl mb-6 ">Membership benefits</h1>
          <h1 className="font-bold text-xl mb-3">
            Types of Membership/ MEDAK categorises members as follows:
          </h1>
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
        </div>
      </Container>
    </div>
  );
};

export default JoinMedak;
