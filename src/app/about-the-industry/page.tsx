import Container from "@/components/container";
import CtaOne from "@/components/sections/cta-one";
import MiniHero from "@/components/sections/mini-hero";
import ParagraphSection from "@/components/sections/paragraph";

export default function AboutTheIndustryPage() {
  return (
    <div>
      <MiniHero
        title={"About The Industry"}
        subTitle={
          "The medical technology sector pioneers tools for diagnosis and treatment, elevating global healthcare and patient well-being."
        }
        bgImageURL="/images/horizontal-images/medical-device-industry.png"
      />
      <Container>
        <ParagraphSection contained>
          <span className="">
            Medical technology, or medtech, is integral to healthcare from
            birth, aiding diagnostics and treatment through innovations like
            plasters for minor injuries, glasses for vision correction, and
            advanced devices like stents and MRI scans for serious conditions.
            These technologies, developed and manufactured by medtech companies,
            are central to modern healthcare, revolutionizing disease detection,
            treatment, and monitoring. They enable less invasive procedures,
            ensure safer surgeries, and enhance overall patient care and
            productivity.
          </span>
        </ParagraphSection>
        <ParagraphSection contained>
          <span className="">
            In Kenya, embracing medtech can significantly elevate healthcare by
            integrating state-of-the-art medical devices and diagnostic tools,
            addressing immediate health concerns, and establishing a robust
            future healthcare system. Progressive regulatory frameworks, in
            collaboration with the advancements in medical technology, offer a
            path to a resilient, accessible, and cutting-edge healthcare
            infrastructure, ensuring enhanced health and well-being for all.
          </span>
        </ParagraphSection>
      </Container>

      <CtaOne
        bgColor="bg-primary"
        className="py-8"
        title={" What is a medical device"}
        // subTitle={"subTitle"}
        description={
          "A Medical Device is a product, service or solution that prevent, diagnose, monitor, treat and care for human beings."
        }
        imageURL={"/images/vertical-images/medical-device-mri.png"}
      />

      <Container className="mt-4">
        <ParagraphSection contained>
          <span className="">
            Medical devices in Kenya, ranging from simple syringes, wheelchairs
            and bandages to cardiac pacemakers and advanced MRI machines, are
            classified by risk level and are integral in diagnosing, treating,
            and managing health conditions. Digital health solutions, part of
            this spectrum, harness information and communication technologies to
            enhance healthcare delivery, offering innovative ways for patient
            monitoring, diagnosis, and treatment optimization.
          </span>
        </ParagraphSection>
        <ParagraphSection contained>
          <span className="">
            As an essential component of medical devices, digital health
            technologies play a pivotal role in advancing personalized,
            efficient healthcare. They not only improve patient care but also
            contribute to a more integrated, data-driven healthcare system,
            underscoring the need for their inclusion in regulatory frameworks
            to ensure safety, quality, and efficacy in healthcare delivery.
          </span>
        </ParagraphSection>
      </Container>

      <CtaOne
        className="py-8"
        title={"What is an in-vitro diagnostic (IVD)?"}
        // subTitle={"subTitle"}
        description={
          "IVDs are non-invasive tests used on biological samples, e.g., blood, urine, or tissues, to determine the status of one’s health."
        }
        left
        imageURL={"/images/vertical-images/in-vitro-diagnostic-testtubes.png"}
      />

      <Container className="mt-4">
        <ParagraphSection contained>
          <span className="">
            In-vitro diagnostics, IVDs, are medical devices crucial for
            analyzing biological specimens like blood, urine, or tissues outside
            the human body, providing essential data for diagnosis and
            monitoring. These tests guide healthcare professionals and patients
            in making informed decisions, without having direct physical contact
            with individuals.
          </span>
        </ParagraphSection>
        <ParagraphSection contained>
          <span className="">
            IVDs encompass a diverse array of tests, including clinical
            chemistry for organ function, immuno-assays for infectious diseases,
            molecular diagnostics for genetic analysis, haematology for blood
            conditions, microbiology for identifying pathogens, and
            point-of-care testing for immediate results. Additionally, they
            facilitate critical procedures like blood typing and cross-matching,
            ensuring safe blood transfusions.
          </span>
        </ParagraphSection>
      </Container>
    </div>
  );
}
