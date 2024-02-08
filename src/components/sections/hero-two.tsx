import { cn } from "@/lib/utils";
import Container from "../container";
import { bg } from "date-fns/locale";
import { Button } from "../ui/button";
import Link from "next/link";

export default function HeroTwo({
  title,
  subTitle,
  bgImageURL,
  bgColor,
}: {
  title: string;
  subTitle: string;
  bgImageURL?: string;
  bgColor?: string;
}) {
  return (
    <div className="bg-muted pb-10">
      <div className="">
        <section
          className="relative min-h-[80vh]  bg-cover bg-center bg-fixed flex items-center"
          style={{
            backgroundImage: bgImageURL ? `url('${bgImageURL}')` : "none",
          }}
        >
          <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-40"></div>

          <div className="container mx-auto relative z-10 text-white  w-full  py-10">
            <>
              <div className=" px-4">
                <h1 className="text-4xl  md:text-6xl font-bold mb-4 text-center">
                  {title}
                </h1>
                <p className="max-w-4xl  mx-auto text-4xl  md:text-6xl text-center font-bold">
                  {subTitle}
                </p>
                <br />
                <p className="text-center">
                  <Link href="/about">
                    <Button>Get To know Us</Button>
                  </Link>
                </p>
              </div>
            </>
          </div>
        </section>
      </div>
    </div>
  );
}
