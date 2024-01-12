import Container from "@/components/container";
import MiniHero from "@/components/sections/mini-hero";
import ParagraphSection from "@/components/sections/paragraph";

export default function AboutUsPage() {
  return (
    <div>
      <MiniHero
        title={"About Medak"}
        subTitle={
          "Medak is a non-profit organization that brings together stakeholders in the medical device industry in Kenya."
        }
        bgImageURL="/images/imageone.jpg"
      />
      <Container>
        <ParagraphSection>
          <p>
            MEDAK, the industry trade association for medical devices, imaging,
            and diagnostics in Kenya, representing international medical
            technology manufacturers, was formed in April 2019 due to a need for
            an industry trade association to represent the medical device
            industry in Kenya and across diverse regions in Afric
          </p>
        </ParagraphSection>
        <ParagraphSection title={"Mission and Vision"}>
          <p>
            MEDAK, the industry trade association for medical devices, imaging,
            and diagnostics in Kenya, representing international medical
            technology manufacturers, was formed in April 2019 due to a need for
            an industry trade association to represent the medical device
            industry in Kenya and across diverse regions in Africa
          </p>
          <ul className="list-disc pl-5 mt-2">
            <li>
              Promote and safeguard the common interests of the Members,
              including interests relating to the design, manufacture,
              importation, exportation, marketing, distribution and sale (retail
              and wholesale), application, use, and/or other application of
              medical devices and medical or healthcare technology, the
              regulation of any aspect of the aforegoing, and/or in relation to
              the industry in which the Members operate.
            </li>
            <li>
              Encourage the adoption and implementation by the Members of
              ethical principles and practices in the conduct of their
              businesses and affairs.
            </li>
            <li>Promote innovation and improve patient outcomes.</li>
            <li>
              Effectively represent the interests of the Members with all
              relevant authorities, whether public or private.
            </li>
            <li>
              Advance the harmonisation of the standards and regulatory
              requirements applicable to Medical Technology and the Medical
              Technology Industry in Kenya and Africa.
            </li>
          </ul>
        </ParagraphSection>
      </Container>
    </div>
  );
}
