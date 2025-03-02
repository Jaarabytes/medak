"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import Container from "../container";

// import swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import ImageContaier from "../ui/image-container";

const MembersAndPartners = ({
  title,
  description,
}: {
  title: string;
  description: string;
}) => {
  const members = [
    {
      title: "abbot",
      imageURL: "/logos/members/Abbott-Logo.svg",
    },
    {
      title: "alphamedical manufacturers",
      imageURL: "/logos/members/alphamedicalmanufacturers-logo.svg",
    },
    {
      title: "amiken limited",
      imageURL: "/logos/members/amikenltd-logo.svg",
    },
    {
      title: "bbraun",
      imageURL: "/logos/members/bbraun-logo.svg",
    },
    {
      title: "becton dickinson",
      imageURL: "/logos/members/Becton-Dickinson-logo.svg",
    },
    {
      title: "F & S",
      imageURL: "/logos/members/F&S-logo.svg",
    },
    {
      title: "GE Healthcare",
      imageURL: "/logos/members/GEHealthCare-logo.svg",
    },
    {
      title: "imperial logistics",
      imageURL: "/logos/members/imperiallogistics-logo.svg",
    },
    {
      title: "jeyflex",
      imageURL: "/logos/members/jeyflex-logo.svg",
    },
    {
      title: "JNJ",
      imageURL: "/logos/members/JNJ-Logo.svg",
    },
    {
      title: "kijanimedical",
      imageURL: "/logos/members/kijanimedical-logo.svg",
    },
    {
      title: "lochlabs limited",
      imageURL: "/logos/members/lochlabsltdblack-logo.svg",
    },
    {
      title: "meditec systems",
      imageURL: "/logos/members/meditecsystems-logo.svg",
    },
    {
      title: "medtronic",
      imageURL: "/logos/members/Medtronic-Logo.svg",
    },
    {
      title: "meraky healthcare",
      imageURL: "/logos/members/merakyhealthcare--logo.svg",
    },
    {
      title: "roche",
      imageURL: "/logos/members/roche-logo.svg",
    },
    {
      title: "statim pharmaceuticals",
      imageURL: "/logos/members/statimpharmaceuticalsltf-logo.svg",
    },
    {
      title: "surgipharm",
      imageURL: "/logos/members/surgipharm-logo.svg",
    },
  ];

  const partners = [
    {
      title: "advamed",
      imageURL: "/logos/partners/advamed-logo.svg",
    },
    {
      title: "AMDF",
      imageURL: "/logos/partners/AMDF-logo.svg",
    },
    {
      title: "mecomed",
      imageURL: "/logos/partners/mecomed-logo.svg",
    },
    {
      title: "medtech europe",
      imageURL: "/logos/partners/medtecheurope-logo.svg",
    },
  ];

  return (
    <section className="bg-blue-100/50 py-16">
      <Container>
        <h1 className="text-4xl font-bold mb-6">{title}</h1>
        <p className="mb-6 md:max-w-4xl">{description}</p>
        <div className="">
          {/* members slider section */}
          <div>
            <Swiper
              slidesPerView={2}
              spaceBetween={30}
              pagination={{
                clickable: true,
              }}
              autoplay={{
                delay: 1000,
                disableOnInteraction: false,
              }}
              modules={[Autoplay]}
              className="mySwiper"
              loop={true}
              breakpoints={{
                640: {
                  slidesPerView: 3,
                  spaceBetween: 20,
                },
                768: {
                  slidesPerView: 4,
                  spaceBetween: 40,
                },
                1024: {
                  slidesPerView: 5,
                  spaceBetween: 50,
                },
              }}
            >
              {members.map((member, index) => (
                <SwiperSlide key={index} className="">
                  <ImageContaier
                    alt={member.title}
                    ratio={16 / 9}
                    imageURL={member.imageURL}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          {/* partners slider section */}
          <div className="mt-2">
            <Swiper
              slidesPerView={2}
              spaceBetween={30}
              pagination={{
                clickable: true,
              }}
              autoplay={{
                delay: 1000,
                disableOnInteraction: false,
              }}
              loop={true}
              modules={[Autoplay]}
              className="mySwiper"
              breakpoints={{
                640: {
                  slidesPerView: 3,
                  spaceBetween: 20,
                },
                768: {
                  slidesPerView: 4,
                  spaceBetween: 40,
                },
                1024: {
                  slidesPerView: 4,
                  spaceBetween: 50,
                },
              }}
            >
              {partners.map((partner, index) => (
                <SwiperSlide key={index} className="">
                  <ImageContaier
                    alt={partner.title}
                    ratio={16 / 9}
                    imageURL={partner.imageURL}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default MembersAndPartners;
