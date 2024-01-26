import Container from "@/components/container";
import SingleBlogItem from "./components/single-blog-item";
import { blogPosts } from "@/site-data";
import MiniHero from "@/components/sections/mini-hero";

export default function BlogPage() {
  return (
    <>
      <MiniHero
        title={"Our Blog"}
        subTitle={"Get the latest updates from us"}
        bgImageURL="/images/imageone.jpg"
      />

      <Container className="mb-10 mt-2">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4   gap-6">
          {blogPosts.map((post, index) => (
            <SingleBlogItem
              title={post.title}
              key={index}
              link={`/blog/${post.slug}`}
              imageURL={post.imageURL}
              shortDescription={post.shortDescription}
              date={post.date}
            />
          ))}
        </div>
      </Container>
    </>
  );
}
