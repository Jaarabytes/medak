import Container from "@/components/container";
import MiniHero from "@/components/sections/mini-hero";
import ParagraphSection from "@/components/sections/paragraph";
import React from "react";

const RegulatoryEthicalPracticesPage = () => {
  return (
    <div>
      <MiniHero
        title={
          "Policy Shaping & Advocacy"
        }
        subTitle={
          "The innovative advocacy, global standards alignment, and ethics of MEDAK greatly improve Kenya's medical technology regulations. "
        }
        bgImageURL="/images/imageone.jpg"
      />
      <Container>
        <ParagraphSection contained>
          Since its inception, MEDAK has been proactively collaborating with
          regional regulatory bodies to establish a regulatory framework that
          aligns with global standards and best practices. This collaboration is
          pivotal for providing patients in Kenya, and more broadly in Africa,
          with access to advanced and secure medical technology. As we navigate
          the transition from a free market system to a regulated environment,
          MEDAK champions this progression through dedicated efforts in
          harmonizing standards, responsive advocacy, and stringent compliance:
        </ParagraphSection>

        <ParagraphSection
          contained
          small
          title="Harmonizing Standards and Strategic Regulation:"
        >
          Engagements with PPB: Regular quarterly meetings with the Pharmacy and
          Poisons Board (PPB) focus not just on marketing high-quality
          Healthcare Products & Technologies (HPTs) in Kenya but also on
          aligning local standards with international benchmarks, ensuring a
          globally competitive regulatory environment.
        </ParagraphSection>

        <ParagraphSection
          small
          contained
          title="Responsive Industry Engagement:"
        >
          <ul className="list-inside list-disc">
            <li>
              Resolving IVD Double Regulation: MEDAK's involvement led to the
              resolution of the double regulation issue by KMLTTB and PPB,
              exemplifying effective advocacy and streamlined regulatory
              compliance.
            </li>
            <li>
              Advocating for VAT Exemption/Zero Rating: MEDAK's successful
              advocacy for VAT exemption and ongoing efforts for zero-rating
              reflect its commitment to responsive and beneficial regulatory
              changes.
            </li>
            <li>
              Collaboration with KEBS: The revision of the Pre-Export
              Verification of Conformity (PVoC) manual and the push for the
              elimination of technical trade barriers like 3rd party test
              reports for CoC issuance represent MEDAK's dedication to
              harmonizing standards and removing unnecessary regulatory hurdles.
            </li>
          </ul>
        </ParagraphSection>

        <ParagraphSection
          small
          contained
          title="Ongoing Dialogue for Compliance:"
        >
          Negotiation and Communication: Continuous negotiation and open
          dialogue ensure not just compliance with current regulations but also
          a responsive approach to upcoming changes. MEDAK ensures clear
          transition timelines, proper notifications, and the availability of
          comprehensive guidance documents, reflecting its commitment to
          responsive advocacy.
        </ParagraphSection>

        <ParagraphSection contained>
          Through these concerted efforts in harmonizing standards, engaging in
          responsive advocacy, and ensuring compliance, MEDAK is not only
          enhancing the regulatory landscape but also ensuring that it
          effectively caters to the evolving needs of the Kenyan market. MEDAK's
          approach fosters a regulatory environment where innovation thrives,
          standards are internationally competitive, and medical technologies
          are both advanced and aligned with the paramount goal of patient
          safety and access
        </ParagraphSection>
      </Container>
    </div>
  );
};

export default RegulatoryEthicalPracticesPage;
