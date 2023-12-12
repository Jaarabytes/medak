import Image from "next/image";

export default function Home() {
  return (
    <div className="relative aspect-square w-1/2 bg-red-200" >
      
      <Image
        src="/images/diabetes-testing.jpg"
        fill
        alt="Diabetes Test"
        className="object-cover"
      />
    </div>
  );
}
