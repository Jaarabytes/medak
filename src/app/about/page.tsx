import Container from "@/components/container";
import MiniHero from "@/components/sections/mini-hero";
import ParagraphSection from "@/components/sections/paragraph";

export default function AboutUsPage() {
  return (
    <div>
      <MiniHero
        title={"About Medak"}
        subTitle={
          "MEDAK unites healthcare stakeholders, advocating for medical technology innovation and ethical practices in Kenya and across Africa."
        }
        bgImageURL="/images/imageone.jpg"
      />
      <Container>
        <ParagraphSection contained className="">
          <p>
            MEDAK, the industry trade association for medical devices, imaging,
            and diagnostics in Kenya, representing international medical
            technology manufacturers, was formed in April 2019 due to a need for
            an industry trade association to represent the medical device
            industry in Kenya and across diverse regions in Africa.
          </p>
        </ParagraphSection>
        <ParagraphSection contained title={"Mission and Vision"}>
          <p>
          MEDAK strives to unite healthcare stakeholders, 
          fostering the well-being of people across Africa, particularly in Kenya. 
          MEDAK is dedicated to promptly integrating medical technology advancements 
          that contribute to the overall health and prosperity of the African community. 
          </p>
          <p>
            We advocate for ethical business conduct and encourage responsible citizenship, 
            collaborating actively with healthcare professionals, regional organisations, 
            and governmental bodies to provide superior solutions that enhance patient outcomes.
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
