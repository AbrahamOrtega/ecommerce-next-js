import ProductsList from "@/components/ProductList";
import Navbar from "../components/Navbar";
import FooterBanner from "@/components/FooterBanner";
import Footer from "@/components/Footer";
import BannerPage from "@/components/BannerPage";

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
      <BannerPage title="Tienda" />
      <div className="flex flex-col w-full gap-y-[64px]">
        <ProductsList products={products} header={true} pagination={true} />
        <FooterBanner />
      </div>
      <Footer />
    </>
  );
}
