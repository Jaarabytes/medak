import Container from "@/components/container";
import SingleBlogItem from "../blog/components/single-blog-item";
import slugify from "slugify";
import { events } from "@/site-data";
import MiniHero from "@/components/sections/mini-hero";
import Link from "next/link";
import ImageContaier from "@/components/ui/image-container";

export default function EventsPage() {
  return (
    <>
      <MiniHero
        title={"Our Events"}
        subTitle={"Get invited to the latest events from"}
        bgImageURL="/images/imageone.jpg"
      />
      <Container className="mb-10 mt-2">
        <div className="grid grid-cols-3 gap-6">
          {events.map((post, index) => (
            <Link href={`/events/${slugify(post.slug)}`} key={index}>
              <div className="group">
                <ImageContaier
                  alt={post.title + `- image`}
                  imageURL={post.imageURL}
                  ratio={1 / 1}
                  object="cover"
                />

                <div>
                  <h2 className="font-semibold group-hover:text-primary  text-xl mt-2">
                    {post.title}
                  </h2>
                  <div className="text-xs capitalize mt-2">
                    <p className="">
                      start date: <span>12/12/2021</span> - end date
                      <span>12/12/2021</span>
                    </p>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </Container>
    </>
  );
}
