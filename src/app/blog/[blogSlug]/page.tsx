import Container from "@/components/container";
import MiniHero from "@/components/sections/mini-hero";
import React from "react";

import slugify from "slugify";
import BlogContent from "../components/blog-content";
import { blogPosts, siteData } from "@/site-data";
import { slugifyBlogTitle } from "@/lib/utils";
import SectionHeading from "@/components/section-heading";
import ParagraphSection from "@/components/sections/paragraph";
import { Button } from "@/components/ui/button";
import { LuArrowLeft } from "react-icons/lu";
import Link from "next/link";
import ImageContaier from "@/components/ui/image-container";

const SingleBlogPage = async ({
  params,
}: {
  params: {
    blogSlug: string;
  };
}) => {
  const blogPost = blogPosts.find((event) => {
    return slugifyBlogTitle(event.title) == params.blogSlug;
  });

  return (
    <>
      {blogPost ? (
        <>
          {/* <MiniHero
            title={blogPost.title}
            subTitle={blogPost.shortDescription}
          /> */}
          <Container className="mb-10 mt-4">
            <Link href="/blog">
              <Button className="space-x-2 mb-4">
                <LuArrowLeft />
                <span>{siteData.title.toUpperCase()}'s blog</span>
              </Button>
            </Link>
            <ParagraphSection title={blogPost.title}>
              <div className="font-semibold text-muted-foreground">
                <p>{blogPost.author}</p>
                <p>{blogPost.date}</p>
              </div>
            </ParagraphSection>
            <div className="w-9/12 md:w-1/2 mb-4 mx-auto">
              <ImageContaier
                imageURL={blogPost.imageURL}
                ratio={1 / 1}
                alt={blogPost.title + " image"}
                object="cover"
              />
            </div>
            <BlogContent content={blogPost.content} />
          </Container>
        </>
      ) : (
        <div>blogPost not found</div>
      )}
    </>
  );
};

export default SingleBlogPage;
