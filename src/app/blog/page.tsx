import Container from "@/components/container";
import SingleBlogItem from "./components/single-blog-item";
import { blogPosts } from "@/site-data";

export default function BlogPage() {
  return (
    <Container className="mb-10 mt-2">
      <div className="grid grid-cols-3 gap-6">
        {blogPosts.map((post, index) => (
          <SingleBlogItem
            title={post.title}
            key={index}
            link={`/blog/${post.slug}`}
            imageURL={post.imageURL}
            shortDescription={post.shortDescription}
          />
        ))}
      </div>
    </Container>
  );
}
