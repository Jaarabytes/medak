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
    <section>
      <Container>
        <div
          className={cn(
            "h-96   relative",
            bgImageURL
              ? `bg-center bg-cover bg-fixed`
              : bgColor
              ? bgColor
              : "bg-primary"
          )}
          style={{
            backgroundImage: bgImageURL ? `url('${bgImageURL}')` : "none",
          }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
          <div className="absolute inset-0 flex items-center ">
            <div className=" max-w-xl px-4">
              <h1 className="text-white text-5xl font-bold mb-6">{title}</h1>
              <p className="text-white font-semibold  text-lg">{subTitle}</p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
