import Container from "@/components/container";
import SingleBlogItem from "../blog/components/single-blog-item";
import slugify from "slugify";

export const events = [
  {
    title: "Lorem ipsum dolor sit amet",
    date: "2021-01-01",
    slug: "lorem-ipsum-dolor-sit-amet",
    shortDescription:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsa, perferendis. Corporis suscipit amet qui magnam nam, tempora excepturi illo ",
    content: "lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    imageURL: "https://picsum.photos/seed/1/800/600",
  },
  {
    title: "Lorem ipsum dolor sit amet",
    date: "2021-01-01",
    slug: "lorem-ipsum-dolor-sit-amet",
    shortDescription:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsa, perferendis. Corporis suscipit amet qui magnam nam, tempora excepturi illo ",
    content: "lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    imageURL: "https://picsum.photos/seed/1/800/600",
  },
  {
    title: "Lorem ipsum dolor sit amet",
    date: "2021-01-01",
    slug: "lorem-ipsum-dolor-sit-amet",
    shortDescription:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsa, perferendis. Corporis suscipit amet qui magnam nam, tempora excepturi illo ",
    content: "lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    imageURL: "https://picsum.photos/seed/1/800/600",
  },
  {
    title: "Lorem ipsum dolor sit amet",
    date: "2021-01-01",
    slug: "lorem-ipsum-dolor-sit-amet",
    shortDescription:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsa, perferendis. Corporis suscipit amet qui magnam nam, tempora excepturi illo ",
    content: "lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    imageURL: "https://picsum.photos/seed/1/800/600",
  },
  {
    title: "Lorem ipsum dolor sit amet",
    date: "2021-01-01",
    slug: "lorem-ipsum-dolor-sit-amet",
    shortDescription:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsa, perferendis. Corporis suscipit amet qui magnam nam, tempora excepturi illo ",
    content: "lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    imageURL: "https://picsum.photos/seed/1/800/600",
  },
];

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
