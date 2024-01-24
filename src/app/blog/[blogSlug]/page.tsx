import Container from "@/components/container";
import MiniHero from "@/components/sections/mini-hero";
import React from "react";
import { blogPosts } from "../page";
import slugify from "slugify";
import BlogContent from "../components/blog-content";

const SingleBlogPage = async ({
  params,
}: {
  params: {
    blogSlug: string;
  };
}) => {
  const blogPost = blogPosts.find((event) => {
    return slugify(event.title.toLowerCase()) == params.blogSlug.toLowerCase();
  });

  return (
    <>
      {blogPost ? (
        <>
          <MiniHero
            title={blogPost.title}
            subTitle={blogPost.shortDescription}
          />
          <Container className="mb-10 mt-4">
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
