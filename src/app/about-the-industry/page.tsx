import Container from "@/components/container";
import CtaOne from "@/components/sections/cta-one";
import MiniHero from "@/components/sections/mini-hero";
import ParagraphSection from "@/components/sections/paragraph";

export default function AboutTheIndustryPage() {
  return (
    <div>
      <MiniHero
        title={"About the industry"}
        subTitle={""}
        bgImageURL="/images/imageone.jpg"
      />
      <Container>
        <ParagraphSection contained>
          <span className="">
            Medical technology is always with you, from the moment you are born,
            from pregnancy tests to ultrasound scans. If you scratched your knee
            as a child, you put a plaster on it; if your vision blurs, you get
            glasses. When you are ill, diagnostics and medical devices assist
            healthcare professionals in restoring your health as soon as
            possible.
          </span>
        </ParagraphSection>
        <ParagraphSection contained>
          <span className="">
            Medical technology has come a long way: stents can unclog blood
            vessels, MRI scans can diagnose serious illnesses, and digital
            health tools can monitor your health status and send important data
            to doctors if you need monitoring. If you ever need surgery, medical
            technology will ensure it&lsquo;s safe and minimally invasive.
          </span>
        </ParagraphSection>
        <ParagraphSection contained>
          <span className="">
            Medical technology companies are at the centre of revolutionary
            developments that enable people to experience prolonged health,
            enhanced productivity, and improved overall well-being. Recognised
            as medtech, these notable industries are instrumental in developing,
            manufacturing, and increasing state-of-the-art equipment, diagnostic
            methods, devices, and health information systems. Their
            contributions are revolutionising healthcare by enabling earlier
            disease detection, testing results to help identify or check the
            status of a specific condition, its development and treatment
            selection, facilitating less-invasive procedures, and delivering
            more effective treatments.
          </span>
        </ParagraphSection>
        <ParagraphSection contained>
          <span className="">
            Africa, specifically Kenya, can improve its healthcare
            infrastructure and make quality healthcare more accessible by
            creating an environment that promotes the integration of modern
            medical devices and diagnostic tools. This prospective strategy
            takes care of urgent healthcare issues while simultaneously laying
            the groundwork for a future where medical and regulatory advances
            work hand in hand to make the world a better, more resilient place
            to live. Together, progressive regulatory frameworks and
            game-changing medical technology have the potential to build a
            healthcare system that is not only cutting-edge but accessible to
            all.
          </span>
        </ParagraphSection>
      </Container>

      <CtaOne
        bgColor="bg-dark-teal"
        className="py-8"
        title={" What is a medical device"}
        // subTitle={"subTitle"}
        description={
          "Medical devices are products, services or solutions that prevent, diagnose, monitor, treat and care for human beings."
        }
        imageURL={"/images/imageone.jpg"}
      />

      <Container className="mt-4">
        <ParagraphSection contained>
          <span className="">
            A medical device includes a wide range of items such as instruments,
            apparatuses, appliances, software, implants, in-vitro reagents,
            materials, and other articles intended by the manufacturer to be
            used alone or in combination for humans, and unlike pharmaceuticals
            or biologics, it achieves its purpose of diagnosing, preventing,
            mitigating, treating or curing disease or other conditions by
            physical, structural, or mechanical action rather than chemical or
            metabolic action within or on the body.
          </span>
        </ParagraphSection>
        <ParagraphSection contained>
          <span className="">
            Medical devices such as syringes, wheelchairs, cardiac pacemakers,
            and medical imaging technologies such as MRI, CT, and X-ray machines
            serve various purposes in maintaining and regaining health. Medical
            devices often include accessories and additional items designed by
            the manufacturer to be used alongside the main device. These
            accessories help the device fulfil its intended purpose as a medical
            device or enhance its capabilities.
          </span>
        </ParagraphSection>
        <ParagraphSection contained>
          <span className="">
            Medical devices in Kenya are classified into four categories based
            on their level of risk. Bandages, hospital beds, removable dental
            prostheses, and urinary catheters are Class A and B items with low
            to moderate risk. Class C risks range from moderate to high,
            including urethral stint and contact lenses for long-term continuous
            use. Pacemakers and implantable defibrillators are examples of Class
            D devices.
          </span>
        </ParagraphSection>
      </Container>

      <CtaOne
        className="py-8"
        title={"What is an in-vitro diagnostic (IVD)?"}
        subTitle={"subTitle"}
        description={
          "IVDs are non-invasive tests used on biological samples, e.g., blood, urine, or tissues, to determine the status of one’s health."
        }
        left
        imageURL={"/images/imageone.jpg"}
      />

      <Container className="mt-4">
        <ParagraphSection contained>
          <span className="">
            IVDs, or in-vitro diagnostics, are medical devices intended by the
            manufacturer to be used for the purpose of analysing biological
            specimens external to the human body. Although they do not have
            physical contact with individuals, they play a vital role in
            gathering information through the analysis of samples such as blood,
            urine, or tissues. The data they offer is invaluable for diagnostic
            and monitoring objectives, aiding healthcare professionals and
            patients in making well-informed choices regarding healthcare.
          </span>
        </ParagraphSection>
        <ParagraphSection contained>
          <span className="">
            In-vitro diagnostics (IVDs) comprise a broad spectrum of tests and
            technologies, which include, but are not limited to:
          </span>
          <ul className="list-inside list-disc">
            <li>
              Clinical chemistry tests analyse substances in bodily fluids, such
              as blood or urine, to evaluate organ function and detect diseases
              like diabetes or kidney disorders.
            </li>
            <li>
              Immunoassays; diagnostic tests that identify the existence of
              particular proteins or antibodies in a sample. They are frequently
              employed to screen for infectious diseases, measure hormone
              levels, and conduct allergy tests.
            </li>
            <li>
              Molecular diagnostics examines nucleic acids (DNA or RNA) to
              detect genetic variations, infectious agents, or provide guidance
              for personalised medicine strategies.
            </li>
            <li>
              Haematology tests, which analyse blood cells and parameters to
              provide information about conditions such as anaemia, infections,
              and blood clotting disorders.
            </li>
            <li>
              Microbiology tests, which are used to identify and characterise
              microorganisms, assist in the diagnosis of infectious diseases.
            </li>
            <li>
              Point-of-care testing (POCT) is a testing method specifically
              designed to be used where the patient is receiving care, enabling
              quick testing and providing immediate results, which is essential
              for making timely decisions.
            </li>
            <li>
              Blood typing and cross-matching are used to ascertain the
              compatibility of blood types for blood transfusions.
            </li>
          </ul>
        </ParagraphSection>
      </Container>

      <CtaOne
        className="py-8"
        title={"What are digital health solutions?"}
        subTitle={"subTitle"}
        description={
          "IVDs are non-invasive tests used on biological samples, e.g., blood, urine, or tissues, to determine the status of one’s health."
        }
        imageURL={"/images/imageone.jpg"}
      />

      <Container className="mt-4">
        <ParagraphSection contained>
          <span>
            Digital health and care utilise information and communication
            technologies (ICTs) to enhance health and lifestyle in various
            areas, including prevention, diagnosis, treatment, monitoring, and
            management. Incorporating digital technology in health and care can
            revolutionise and improve the accessibility and quality of care,
            thereby optimising the overall efficiency of the healthcare
            industry.
          </span>
        </ParagraphSection>
        <ParagraphSection contained>
          <span>
            Digital tools play a crucial role in various areas of healthcare
            innovation, offering substantial potential. Data plays a vital role
            as we progress towards a personalised healthcare system that
            predicts needs and guarantees high precision. The future of
            healthcare is expected to involve increased integration, focusing on
            improving patient outcomes, and emphasising the importance of value.
          </span>
        </ParagraphSection>
      </Container>
    </div>
  );
}
