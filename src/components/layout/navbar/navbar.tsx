import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="bg-gray-100 shadow-lg py-6">
      <div className="container mx-auto flex justify-between items-center">
        {/* logo */}
        <Link href={"/"}>
          <Image
            src="/logos/medak-logo.png"
            width={100}
            height={20}
            alt="logo"
          />
        </Link>

        {/* links */}
        <div>
          links
          {/* home - image and cta, sectors, medtech market impact, industry updates, what we work on, partners and affiliates, testimonials, sign up process */}
          {/* about us - our leadership (executive management team), committees, mission and vision, members, partners, contact us*/}
          {/* about the industry - what is medical technology, value of medical technology, attach PPB guidelines*/}
          {/* what we do - regulatory Ethical Practices and Patient Safety, Regulatory framework and strengthening, Advocacy and Compliance, Representation of Member Interests, Harmonization of Standards, Education and Training Programs, Networking and Collaboration*/}
          {/* events - all events, online, in-person */}
          {/* blog - */}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
