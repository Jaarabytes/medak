import React from "react";
import Container from "../container";
import Image from "next/image";
import { Button } from "../ui/button";
import { LuArrowLeft, LuArrowRight } from "react-icons/lu";
import Link from "next/link";

const Hero = ({
  link,
  text,
  imageURL,
}: {
  link: string;
  text: string;
  imageURL: string;
}) => {
  return (
    <section className="">
      <Container>
        <div className="relative">
          <div className="relative aspect-video">
            <Image
              fill
              src={imageURL}
              alt="image"
              className="object-cover object-center"
            />
            <div className="hidden md:block bg-white absolute bottom-0 p-4 sm:p-6 md:px-4 md:py-10 w-8/12 sm:w-5/12 md:w-1/2  ">
              <h1 className="text-base md:text-3xl font-bold">{text}</h1>
              <Link href={link}>
                <Button variant={"link"} className="space-x-2 px-0">
                  <span className="">Get to Know us</span>
                  <span>
                    <LuArrowRight />
                  </span>
                </Button>
              </Link>
            </div>
          </div>
          <div className="py-4 md:hidden">
            <h1 className="text-2xl md:text-3xl font-bold">{text}</h1>
            <Link href={link}>
              <Button variant={"link"} className="space-x-2 px-0">
                <span className="">Get to Know us</span>
                <span>
                  <LuArrowRight />
                </span>
              </Button>
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Hero;
