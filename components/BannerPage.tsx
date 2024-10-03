import Image from "next/image";
import { IoIosArrowForward } from "react-icons/io";
import Link from "next/link";

export default function BannerPage(props: { title: string }) {
  return (
    <>
      <div className="flex w-full relative">
        <div className="flex w-full pb-[170px] lg:pb-[300px] relative">
          <Image
            src="/shop-hero.png"
            alt="background"
            className="absolute h-full w-full object-cover blur-[2px]"
            width={10000}
            height={10000}
          />
        </div>

        <div className="flex flex-col w-full h-full absolute items-center justify-center gap-y-[16px]">
          <Image src={"/logo.png"} alt="logo" width={50} height={50} />
          <h3 className="text-[32px] font-medium">{props.title}</h3>
          <div className="flex text-[18px] gap-x-[8px] items-center">
            <Link href={"/"} className="flex items-center font-medium">
              Inicio
            </Link>
            <IoIosArrowForward className="text-[20px]" />
            <span>{props.title}</span>
          </div>
        </div>
      </div>
    </>
  );
}
