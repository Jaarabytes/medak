import Container from "@/components/container";
import MiniHero from "@/components/sections/mini-hero";
import React from "react";
import slugify from "slugify";
import BlogContent from "@/app/blog/components/blog-content";
import { events } from "@/site-data";

const SingleEventPage = async ({
  params,
}: {
  params: {
    eventSlug: string;
  };
}) => {
  const event = events.find((event) => {
    return slugify(event.title.toLowerCase()) == params.eventSlug.toLowerCase();
  });

  return (
    <>
      {event ? (
        <>
          <MiniHero title={event.title} subTitle={event.shortDescription} />
          <Container className="mb-10 mt-4">
            <BlogContent content={event.content} />
          </Container>
        </>
      ) : (
        <div>event not found</div>
      )}
    </>
  );
};

export default SingleEventPage;
