"use client";

import React from "react";
import Container from "../container";
import { Button } from "../ui/button";
import Image from "next/image";
import { LuArrowRight } from "react-icons/lu";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { AspectRatio } from "@radix-ui/react-aspect-ratio";

const CtaOne = ({
  title,
  subTitle,
  description,
  link,
  imageURL,
  onClick,
  left,
  bgColor,
  btnStyles,
  className,
  btntext,
}: {
  title: string;
  subTitle?: string;
  description: string;
  link?: string;
  imageURL: string;
  left?: boolean;
  onClick?: () => void;
  bgColor?: string;
  btnStyles?: string;
  className?: string;
  btntext?: string;
}) => {
  return (
    <section className={cn("bg-muted", className)}>
      <Container>
        <div className="grid grid-cols-12">
          <div
            className={cn(
              "col-span-12 md:col-span-6  relative",

              left && "md:order-2"
            )}
          >
            <div className="hidden md:block">
              <Image
                src={imageURL}
                fill
                alt="image"
                className="object-cover w-full"
              />
            </div>
            <div className="md:hidden">
              <AspectRatio className="" ratio={9 / 9}>
                <Image
                  src={imageURL}
                  fill
                  alt="image"
                  className="object-cover w-full"
                />
              </AspectRatio>
            </div>
          </div>
          <div
            className={cn(
              " col-span-12 md:col-span-6 bg-primary py-10 md:py-20 px-6 text-white",
              bgColor,
              left && "md:order-1"
            )}
          >
            {subTitle && <h6 className="text-sm font-semibold">{subTitle}</h6>}
            <h1 className="text-xl md:text-3xl font-bold w-10/12 mt-4">
              {title}
            </h1>
            <p className="mt-4"> {description}</p>
            <div className="mt-8">
              {link && (
                <Link href={link}>
                  <Button variant={"destructive"} className={cn(btnStyles)}>
                    {btntext ? btntext : "Read More"}

                    <div className="ml-1">
                      <LuArrowRight />
                    </div>
                  </Button>
                </Link>
              )}
              {onClick && (
                <Button
                  onClick={onClick}
                  variant={"destructive"}
                  className={cn(btnStyles)}
                >
                  {btntext ? btntext : "Read More"}
                  <div className="ml-1">
                    <LuArrowRight />
                  </div>
                </Button>
              )}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default CtaOne;
