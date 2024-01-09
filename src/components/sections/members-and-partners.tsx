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

const MembersAndPartners = () => {
  const members = [
    {
      title: "abbot",
      imageURL: "/logos/members/Abbott-Logo.png",
    },
    {
      title: "alphamedical manufacturers",
      imageURL: "/logos/members/alphamedicalmanufacturers-logo.png",
    },
    {
      title: "amiken limited",
      imageURL: "/logos/members/amikenltd-logo.png",
    },
    {
      title: "bbraun",
      imageURL: "/logos/members/bbraun-logo.png",
    },
    {
      title: "becton dickinson",
      imageURL: "/logos/members/Becton-Dickinson-logo.png",
    },
    {
      title: "F & S",
      imageURL: "/logos/members/F&S-logo.png",
    },
    {
      title: "GE Healthcare",
      imageURL: "/logos/members/GEHealthCare-logo.png",
    },
    {
      title: "imperial logistics",
      imageURL: "/logos/members/imperiallogistics-logo.png",
    },
    {
      title: "jeyflex",
      imageURL: "/logos/members/jeyflex-logo.png",
    },
    {
      title: "JNJ",
      imageURL: "/logos/members/JNJ-Logo.png",
    },
    {
      title: "kijanimedical",
      imageURL: "/logos/members/kijanimedical-logo.png",
    },
    {
      title: "lochlabs limited",
      imageURL: "/logos/members/lochlabsltdblack-logo.png",
    },
    {
      title: "meditec systems",
      imageURL: "/logos/members/meditecsystems-logo.png",
    },
    {
      title: "medtronic",
      imageURL: "/logos/members/medtronic-logo.png",
    },
    {
      title: "meraky healthcare",
      imageURL: "/logos/members/merakyhealthcare-logo.png",
    },
    {
      title: "roche",
      imageURL: "/logos/members/roche-logo.png",
    },
    {
      title: "statim pharmaceuticals",
      imageURL: "/logos/members/statimpharmaceuticalsltf-logo.png",
    },
    {
      title: "surgipharm",
      imageURL: "/logos/members/surgipharm-logo.png",
    },
  ];

  const partners = [
    {
      title: "advamed",
      imageURL: "/logos/partners/advamed-logo.png",
    },
    {
      title: "AMDF",
      imageURL: "/logos/partners/AMDF.png",
    },
    {
      title: "mecomed",
      imageURL: "/logos/partners/mecomed-logo.png",
    },
    {
      title: "medtech europe",
      imageURL: "/logos/partners/medtecheurope-logo.png",
    },
  ];
  return (
    <section className="bg-muted py-16">
      <Container>
        <h1 className="text-4xl font-bold mb-6">Members and Partners</h1>
        <p className="mb-6 md:max-w-4xl">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Enim
          accusantium accusamus, ducimus necessitatibus ex blanditiis
          reprehenderit nihil doloribus voluptate quaerat ipsam aliquid ut
          aliquam quis laboriosam ea nemo rerum facilis!
        </p>

        {/* members slider section */}
        <div>
          <Swiper
            slidesPerView={4}
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
          >
            {members.map((member, index) => (
              <SwiperSlide key={index} className="bg-white">
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
            slidesPerView={4}
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
          >
            {partners.map((partner, index) => (
              <SwiperSlide key={index} className="bg-white">
                <ImageContaier
                  alt={partner.title}
                  ratio={16 / 9}
                  imageURL={partner.imageURL}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </Container>
    </section>
  );
};

export default MembersAndPartners;
