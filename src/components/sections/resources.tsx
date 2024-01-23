"use client";

import React from "react";
import SingleResourceCard from "../single-resource-card";
import Container from "../container";
import { Button } from "../ui/button";
import { LuArrowRight } from "react-icons/lu";
import Link from "next/link";

const Resources = () => {
  const resources = [
    {
      imageURL: "/images/imageone.jpg",
      title: "Medical Device & IVD Registration Guidelines",
      category: "Regulatory Affairs",
      description:
        "PPB guidelines ensure stringent, transparent registration of medical devices and IVDs, prioritising safety.",
    },
    {
      imageURL: "/images/imageone.jpg",
      title: "Kenya Medical Devices Report",
      category: "category two",
      description:
        "Kenya's medical device market is set to grow, driven by imports, universal health coverage initiatives, and increasing investment opportunities.",
    },
    {
      imageURL: "/images/imageone.jpg",
      title: "MDRC Global Standards Enhancement",
      category: "Regulatory Affairs",
      description:
        "MDRC, fostering global collaboration, boosts medical device standards, ensuring safety, quality, and economic growth in developing regions, including Kenya.",
    },
    {
      imageURL: "/images/imageone.jpg",
      title: "Securing Africa: Local Manufacturing ",
      category: "Business development",
      description:
        "Local Manufacturing in Medical Devices and IVDs: Propelling Africa's Trade and Development",
    },
  ];
  return (
    <section className="py-14">
      <Container>
        <div className="mb-6">
          <h1 className="text-4xl font-bold">Our Latest Resources</h1>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 ">
          {resources.map((resource, index) => {
            return (
              <SingleResourceCard
                imageURL={resource.imageURL}
                category={resource.category}
                description={resource.description}
                title={resource.title}
                key={index}
              />
            );
          })}
        </div>
        <div className="mt-6">
          <Link href={"/blog"}>
            <Button className="float-right space-x-2">
              <span>More Resources</span>
              <span>
                <LuArrowRight />
              </span>
            </Button>
          </Link>
        </div>
      </Container>
    </section>
  );
};

export default Resources;
