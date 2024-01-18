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
    // <section
    //   className={cn(
    //     " relative"
    //     // bgImageURL
    //     //   ? `bg-center bg-cover bg-fixed`
    //     //   : bgColor
    //     //   ? bgColor
    //     //   : "bg-primary"
    //   )}
    //   // style={{
    //   //   backgroundImage: bgImageURL ? `url('${bgImageURL}')` : "none",
    //   // }}
    // >
    //   <div
    //     className="py-20 w-full
    //   "
    //   >
    //     {/* <Container className="">
    //       <div className="flex items-center ">
    //         <div className=" max-w-xl px-4">
    //           <h1 className="text-white text-5xl font-bold mb-6">{title}</h1>
    //           <p className="text-white font-semibold  text-lg">{subTitle}</p>
    //         </div>
    //       </div>
    //     </Container> */}

    //     <span className="font-black text-white">
    //       Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque ipsum
    //       ducimus omnis ullam suscipit quaerat, reprehenderit quos? Optio totam
    //       amet consequatur blanditiis voluptates ratione, mollitia minus, odio,
    //       eveniet id doloribus.
    //     </span>
    //   </div>
    //   <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 "></div>
    // </section>
    <Container>
      <section
        className="relative min-h-[40vh]  bg-cover bg-center flex items-center"
        style={{
          backgroundImage: bgImageURL ? `url('${bgImageURL}')` : "none",
        }}
      >
        <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50"></div>
        <div className="relative z-10 text-white  w-full p-8">
          <Container>
            <div className=" max-w-xl px-4">
              <h1 className="text-4xl font-bold mb-2">{title}</h1>
              <p className="text-lg">{subTitle}</p>
            </div>
          </Container>
        </div>
      </section>
    </Container>
  );
}
