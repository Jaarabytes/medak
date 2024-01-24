import Container from "@/components/container";
import SingleBlogItem from "./components/single-blog-item";

export const blogPosts = [
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
