import ProductsList from "@/components/ProductsList";
import Navbar from "../components/Navbar";
import Image from "next/image";
import { IoIosArrowForward } from "react-icons/io";
import FooterBanner from "@/components/FooterBanner";
import Footer from "@/components/Footer";

const products = [
  {
    id: 1,
    name: "Syltherine",
    style: "Stylish cafe chair",
    price: 250,
    descount: "30%",
    priceBefore: 350,
    image: "/products/cafe-chair.png",
    isNew: false,
  },
  {
    id: 2,
    name: "Leviosa",
    style: "Stylish cafe chair",
    price: 250,
    descount: "",
    priceBefore: 0,
    image: "/products/leviosa.png",
    isNew: false,
  },
  {
    id: 3,
    name: "Lolito",
    style: "Luxury big sofa",
    price: 700,
    descount: "50%",
    priceBefore: 1400,
    image: "/products/big-sofa.png",
    isNew: false,
  },
  {
    id: 4,
    name: "Respira",
    style: "Outdoor bar table and stool",
    price: 500,
    descount: "",
    priceBefore: 0,
    image: "/products/bar-table-stool.png",
    isNew: true,
  },
  {
    id: 5,
    name: "Grifo",
    style: "Night lamp",
    price: 150,
    descount: "",
    priceBefore: 0,
    image: "/products/night-lamp.png",
    isNew: false,
  },
  {
    id: 6,
    name: "Muggo",
    style: "Small mug",
    price: 50,
    descount: "",
    priceBefore: 0,
    image: "/products/small-mug.png",
    isNew: true,
  },
  {
    id: 7,
    name: "Pingky",
    style: "Cute bed set",
    price: 700,
    descount: "50%",
    priceBefore: 1400,
    image: "/products/cute-bed-set.png",
    isNew: false,
  },
  {
    id: 8,
    name: "Potty",
    style: "Minimalist flower pot",
    price: 30,
    descount: "",
    priceBefore: 0,
    image: "/products/mini-flower-pot.png",
    isNew: true,
  },
  {
    id: 9,
    name: "Syltherine",
    style: "Stylish cafe chair",
    price: 250,
    descount: "30%",
    priceBefore: 350,
    image: "/products/cafe-chair.png",
    isNew: false,
  },
  {
    id: 10,
    name: "Leviosa",
    style: "Stylish cafe chair",
    price: 250,
    descount: "",
    priceBefore: 0,
    image: "/products/leviosa.png",
    isNew: false,
  },
  {
    id: 11,
    name: "Lolito",
    style: "Luxury big sofa",
    price: 700,
    descount: "50%",
    priceBefore: 1400,
    image: "/products/big-sofa.png",
    isNew: false,
  },
  {
    id: 12,
    name: "Respira",
    style: "Outdoor bar table and stool",
    price: 500,
    descount: "",
    priceBefore: 0,
    image: "/products/bar-table-stool.png",
    isNew: true,
  },
  {
    id: 13,
    name: "Grifo",
    style: "Night lamp",
    price: 150,
    descount: "",
    priceBefore: 0,
    image: "/products/night-lamp.png",
    isNew: false,
  },
  {
    id: 14,
    name: "Muggo",
    style: "Small mug",
    price: 50,
    descount: "",
    priceBefore: 0,
    image: "/products/small-mug.png",
    isNew: true,
  },
  {
    id: 15,
    name: "Pingky",
    style: "Cute bed set",
    price: 700,
    descount: "50%",
    priceBefore: 1400,
    image: "/products/cute-bed-set.png",
    isNew: false,
  },
  {
    id: 16,
    name: "Potty",
    style: "Minimalist flower pot",
    price: 30,
    descount: "",
    priceBefore: 0,
    image: "/products/mini-flower-pot.png",
    isNew: true,
  },
];

export default function Shop() {
  return (
    <>
      <Navbar />
      <div className="flex w-full relative">
        <div className="flex w-full pb-[170px] lg:pb-[300px] relative">
          <Image
            src="/shop-hero.png"
            alt=""
            className="absolute h-full w-full object-cover blur-[2px]"
            width={10000}
            height={10000}
          />
        </div>

        <div className="flex flex-col w-full h-full absolute items-center justify-center gap-y-[16px]">
          <h3 className="text-[32px] font-medium">Tienda</h3>
          <div className="flex text-[18px] gap-x-[8px] items-center">
            <span className="flex items-center font-medium">Inicio</span>
            <IoIosArrowForward className="text-[20px]" />
            <span>Tienda</span>
          </div>
        </div>
      </div>
      <div className="flex flex-col w-full gap-y-[64px]">
        <ProductsList products={products} header={true} pagination={true} />
        <FooterBanner />
      </div>
      <Footer />
    </>
  );
}
