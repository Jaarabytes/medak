import { CardDescription } from "@/components/ui/card";
import ImageContaier from "@/components/ui/image-container";
import Link from "next/link";
import slugify from "slugify";

const SingleBlogItem = ({
  title,
  imageURL,
  shortDescription,
  link,
}: {
  title: string;
  imageURL: string;
  shortDescription: string;
  link: string;
}) => {
  return (
    <Link href={link}>
      <div className="group">
        <ImageContaier
          alt={title + `- image`}
          imageURL={imageURL}
          ratio={1 / 1}
          object="cover"
        />

        <div>
          <h2 className="font-semibold group-hover:text-primary mt-2">
            {title}
          </h2>
          <CardDescription className="mt-1">
            {shortDescription.slice(0, 100) + "..."}
          </CardDescription>
        </div>
      </div>
    </Link>
  );
};

export default SingleBlogItem;
