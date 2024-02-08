import { cn } from "@/lib/utils";
import Container from "../container";
import { bg } from "date-fns/locale";

export default function MiniHero({
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
          className="relative min-h-[30em]  bg-cover bg-center bg-fixed flex items-center"
          style={{
            backgroundImage: bgImageURL ? `url('${bgImageURL}')` : "none",
          }}
        >
          <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-30"></div>

          <div className="container mx-auto relative z-10 text-white  w-full  py-10">
            <>
              <div className="  px-4">
                <h1 className="text-4xl  md:text-6xl font-bold mb-6">
                  {title}
                </h1>
                <p className="max-w-xl text-base font-semibold">{subTitle}</p>
              </div>
            </>
          </div>
        </section>
      </div>
    </div>
  );
}
