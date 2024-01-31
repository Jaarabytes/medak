import AppLogo from "@/components/app-logo";
import Container from "@/components/container";
import { Button } from "@/components/ui/button";
import { siteData } from "@/site-data";
import Link from "next/link";
import React from "react";
import {
  LuArrowRight,
  LuFacebook,
  LuInstagram,
  LuLinkedin,
  LuTwitter,
  LuX,
  LuYoutube,
} from "react-icons/lu";

const FooterLink = ({ href, children }: { href: string; children: string }) => {
  return (
    <div>
      <Link
        className="text-sm text-white capitalize font-semibold hover:underline"
        href={href}
      >
        {children}
      </Link>
    </div>
  );
};

const Footer = () => {
  const socialLinks = [
    {
      icon: <LuYoutube />,
      link: "https://www.facebook.com",
    },
    {
      icon: <LuLinkedin />,
      link: "https://www.facebook.com",
    },
    {
      icon: <LuFacebook />,
      link: "https://www.facebook.com",
    },
    {
      icon: <LuX />,
      link: "https://www.facebook.com",
    },
    {
      icon: <LuInstagram />,
      link: "https://www.facebook.com",
    },
  ];

  return (
    <footer>
      {/* top section */}
      <div className="bg-primary">
        <Container className=" py-20 flex flex-col md:flex-row space-y-8 md:space-y-0 md:items-center justify-between text-white">
          <div>
            <div className="mb-4">
              <AppLogo height={20} width={80} white />
            </div>
            <div>
              <p className="mb-4 font-semibold">
                Stay up to date with {siteData.title.toUpperCase()}.
              </p>
              <Link href={"/"} className="">
                <Button variant={"destructive"} className="space-x-2 ">
                  <span>Join Us</span>
                  <span>
                    <LuArrowRight />
                  </span>
                </Button>
              </Link>
            </div>
          </div>
          <div className="space-y-8 md:space-y-0 md:flex md:space-x-8 items-start">
            <div className="">
              <h4 className="font-semibold mb-2 uppercase space-y-2">Links</h4>
              {[
                {
                  title: "about us",
                  link: "/about",
                },
                {
                  title: "about the industry",
                  link: "/about-the-industry",
                },
                {
                  title: "what we do",
                  link: "/what-we-do",
                },
                {
                  title: "industry updates",
                  link: "/blog",
                },
              ].map((item, index) => (
                <FooterLink key={index} href={item.link}>
                  {item.title}
                </FooterLink>
              ))}
            </div>

            <div className="">
              <h4 className="font-semibold mb-2 uppercase">Address</h4>
              <ul className="font-semibold text-sm space-y-2">
                <li>
                  Phone Number: <span className="">+254 758 074 040</span>
                </li>
                <li>P.O. Box: 19528-00202, Nairobi,Kenya</li>
                <li>Mail: info@medak.or.ke</li>
              </ul>
            </div>
          </div>
        </Container>
      </div>

      {/* bottom section with social links */}
      <div className="bg-primary/90 py-4 text-white">
        <Container className="flex flex-col md:flex-row justify-between md:items-center">
          {/* links and copyright */}
          <div>
            <h6 className="text-sm font-semibold">
              Copyright 2024 {siteData.title.toUpperCase()}
            </h6>
          </div>

          {/* social links */}
          <div className="flex space-x-1">
            {socialLinks.map((socialLink, index) => (
              <Link href={socialLink.link} key={index}>
                <Button className="hover:text-primary" variant={"ghost"}>
                  {socialLink.icon}
                </Button>
              </Link>
            ))}
          </div>
        </Container>
      </div>
    </footer>
  );
};

export default Footer;
