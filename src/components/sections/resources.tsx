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
      title: "resource one",
      category: "category one",
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorem hic repudiandae omnis.",
    },
    {
      imageURL: "/images/imageone.jpg",
      title: "resource two",
      category: "category two",
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorem hic repudiandae omnis.",
    },
    {
      imageURL: "/images/imageone.jpg",
      title: "resource three",
      category: "category three",
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorem hic repudiandae omnis.",
    },
    {
      imageURL: "/images/imageone.jpg",
      title: "resource four",
      category: "category four",
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorem hic repudiandae omnis.",
    },
  ];
  return (
    <section className="py-14">
      <Container>
        <div className="mb-6">
          <h1 className="text-4xl font-bold">Our latest Resources</h1>
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
          <Link href={"/"}>
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
