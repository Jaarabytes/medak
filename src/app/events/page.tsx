import Container from "@/components/container";
import SingleBlogItem from "../blog/components/single-blog-item";
import slugify from "slugify";
import { events } from "@/site-data";

export default function EventsPage() {
  return (
    <Container className="mb-10 mt-2">
      <div className="grid grid-cols-3 gap-6">
        {events.map((post, index) => (
          <SingleBlogItem
            title={post.title}
            key={index}
            link={`/events/${slugify(post.slug)}`}
            imageURL={post.imageURL}
            shortDescription={post.shortDescription}
          />
        ))}
      </div>
    </Container>
  );
}
