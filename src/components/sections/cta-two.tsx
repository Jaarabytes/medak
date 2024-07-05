"use client";

import React from "react";
import Container from "../container";
import { Button } from "../ui/button";
import Image from "next/image";
import { LuArrowRight } from "react-icons/lu";
import { cn } from "../../lib/utils";
import Link from "next/link";
import { AspectRatio } from "@radix-ui/react-aspect-ratio";

const CtaTwo = ({
  title,
  subTitle,
  description,
  link,
  imageURL,
  onClick,
  left,
  btnText,
  downloadable = false,
}: {
  title: string;
  subTitle: string;
  description: string;
  link: string;
  imageURL: string;
  left?: boolean;
  onClick?: () => void;
  btnText?: string;
  downloadable?: boolean;
}) => {
  return (
    <section className="py-10">
      <Container>
        <div className="relative md:flex md:flex-col">
          <div className="md:absolute md:top-0 w-full h-full  flex items-center">
            <div
              className={cn(
                "bg-muted grid grid-cols-12 items-center py-10 px-6 md:space-x-8 space-y-8 ",
                left ? "rounded-tl-[2.5em]" : "rounded-br-[2.5em]"
              )}
            >
              <div
                className={cn(
                  "col-span-12 md:col-span-5",
                  left ? "md:order-2" : ""
                )}
              >
                <div className="md:hidden w-full">
                  <AspectRatio ratio={7 / 10}>
                    <Image
                      src={imageURL}
                      alt="image"
                      fill
                      className="object-cover"
                    />
                  </AspectRatio>
                </div>
              </div>
              <div
                className={cn(
                  "col-span-12 md:col-span-7 pr-2",
                  left ? "md:order-1" : ""
                )}
              >
                <div className={cn("")}>
                  <h6 className="text-sm font-semibold">{subTitle}</h6>
                  <h1 className="text-3xl font-bold w-10/12 mt-4">{title}</h1>
                  <p className="mt-4"> {description}</p>
                  <div className="mt-8">
                    {link && (
                      <>
                        {downloadable ? (
                          <a href={link} download>
                            <Button variant={"destructive"}>
                              {btnText ? btnText : "Read More"}
                              <div className="ml-1">
                                <LuArrowRight />
                              </div>
                            </Button>
                          </a>
                        ) : (
                          <Link href={link}>
                            <Button variant={"destructive"}>
                              {btnText ? btnText : "Read More"}
                              <div className="ml-1">
                                <LuArrowRight />
                              </div>
                            </Button>
                          </Link>
                        )}
                      </>
                    )}
                    {onClick && (
                      <Button onClick={onClick} variant={"destructive"}>
                        {btnText ? btnText : "Read More"}
                        <div className="ml-1">
                          <LuArrowRight />
                        </div>
                      </Button>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className={cn(
              "hidden md:flex",
              left ? "md:justify-end mr-4" : "ml-4"
            )}
          >
            <div className="w-5/12">
              <AspectRatio ratio={7 / 10}>
                <Image
                  src={imageURL}
                  alt="image"
                  fill
                  className="object-cover"
                />
              </AspectRatio>
            </div>
          </div>
          {/* <div className={cn("hidden md:flex", left && "justify-end")}>
            <div className={cn("pl-4 w-1/2", left ? "pr-4" : "pl-4")}>
              <AspectRatio className="" ratio={5 / 6}>
                <Image
                  src={imageURL}
                  fill
                  alt="imare"
                  className="object-cover"
                />
              </AspectRatio>
            </div>
          </div> */}
        </div>
      </Container>
    </section>
  );
};

export default CtaTwo;
