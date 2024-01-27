import { Button } from "@/components/ui/button";
import { CardDescription } from "@/components/ui/card";
import ImageContaier from "@/components/ui/image-container";
import Link from "next/link";
import { LuLinkedin, LuMail } from "react-icons/lu";
import slugify from "slugify";

const SingleBlogItem = ({
  title,
  imageURL,
  shortDescription,
  link,
  date,
  author,
}: {
  title: string;
  imageURL: string;
  shortDescription: string;
  link: string;
  date: string;
  author: string;
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
          <h2 className="font-semibold group-hover:text-primary  text-xl mt-2">
            {title}
          </h2>
          <div className="text-xs capitalize mt-2">
            <p>author: {author}</p>
            <p className="">{date}</p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default SingleBlogItem;
