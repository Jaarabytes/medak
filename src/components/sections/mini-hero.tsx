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
      <Container className="">
        <section
          className="relative min-h-[30em]  bg-cover bg-center bg-fixed flex items-center"
          style={{
            backgroundImage: bgImageURL ? `url('${bgImageURL}')` : "none",
          }}
        >
          <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-70"></div>
          <div className="relative z-10 text-white  w-full px-20">
            <>
              <div className=" max-w-xl px-4">
                <h1 className="text-6xl font-semibold mb-6">{title}</h1>
                <p className="text-base font-semibold">{subTitle}</p>
              </div>
            </>
          </div>
        </section>
      </Container>
    </div>
  );
}
