import Navbar from "@/components/Navbar";
import { IoIosArrowForward } from "react-icons/io";
import Image from "next/image";
import { useState } from "react";
import { FaRegStar } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import { FaCheck } from "react-icons/fa";
import { FaPlus } from "react-icons/fa";
import { FaMinus } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { IoLogoLinkedin } from "react-icons/io";
import { FaSquareTwitter } from "react-icons/fa6";
import Link from "next/link";
import ProductList from "@/components/ProductList";
import SeeMoreBtn from "@/components/SeeMoreBtn";
import Footer from "@/components/Footer";

const Reviews = [
  {
    id: 124365476,
    autor: "John Doe",
    title: "Great product",
    review:
      "I love this product, it's amazing. I will buy more products from this store.",
    rating: 5,
    date: "2021-09-12T00:00:00Z",
  },
  {
    id: 124345476,
    autor: "John Doe",
    title: "Great product",
    review:
      "I love this product, it's amazing. I will buy more products from this store.",
    rating: 4,
    date: "2021-09-12T00:00:00Z",
  },
  {
    id: 124315576,
    autor: "John Doe",
    title: "Great product",
    review:
      "I love this product, it's amazing. I will buy more products from this store.",
    rating: 3,
    date: "2021-09-12T00:00:00Z",
  },
];

const product = {
  id: 12324546,
  name: "Asgaard GiSofa",
  pagraph:
    "Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound.",
  description:
    "Embodying the raw, wayward spirit of rock ‘n’ roll, the Kilburn portable active stereo speaker takes the unmistakable look and sound of Marshall, unplugs the chords, and takes the show on the road. \n Weighing in under 7 pounds, the Kilburn is a lightweight piece of vintage styled engineering. Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound that is both articulate and pronounced. The analogue knobs allow you to fine tune the controls to your personal preferences while the guitar-influenced leather strap enables easy and stylish travel.",
  imgsDescription: [
    "/product-example/cloud-sofa-1.png",
    "/product-example/cloud-sofa-2.png",
  ],
  price: 250,
  priceBefore: 300,
  descount: "20%",
  isNew: false,
  images: [
    "/product-example/asgaard-sofa-3.png",
    "/product-example/outdoor-sofa-set-1.png",
    "/product-example/outdoor-sofa-set-2.png",
    "/product-example/outdoor-sofa-set-3.png",
  ],
  sizes: ["L", "XL", "XS"],
  colors: ["#816DFA", "#000000", "#B88E2F", "#FFFFFF"],
  category: "Sofas",
  tags: ["Sofa", "Chair", "Home", "Shop"],
  sku: "SS001",
  reviews: Reviews,
};

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
];

export default function Product() {
  // Handle tabs
  const [selectedTab, setSelectedTab] = useState("description");

  // Handle items quantity
  const [quantity, setQuantity] = useState(1);
  const handleAdd = () => {
    setQuantity(quantity + 1);
  };
  const handleRemove = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };
  // Handle select color
  const [selectedColor, setSelectedColor] = useState(0);
  const handleSelectColor = (index: number) => {
    setSelectedColor(index);
  };
  // Handle select size
  const [selectedSize, setSelectedSize] = useState(0);
  const handleSelectSize = (index: number) => {
    setSelectedSize(index);
  };
  //handle images
  const [selectedImage, setSelectedImage] = useState(0);
  const handleSelectImage = (index: number) => {
    setSelectedImage(index);
  };

  // Average rating
  const averageRating = () => {
    const totalRating = product.reviews.reduce((acc, review) => {
      return acc + review.rating;
    }, 0);
    const average = totalRating / product.reviews.length;
    return (
      <span className="flex">
        {Array.from({ length: 5 }, (_, i) => (
          <div key={i} className="text-yellow-400 text-[20px] lg:text-[24px]">
            {i + 1 <= average ? <FaStar /> : <FaRegStar />}
          </div>
        ))}
      </span>
    );
  };

  return (
    <>
      <Navbar />
      {/* Navigate bar */}
      <div className="flex p-[24px] lg:py-[40px] lg:px-[80px] justify-start items-center bg-[#F9F1E7] gap-x-[8px] lg:gap-x-[16px] lg:text-[20px] text-[#9F9F9F]">
        <Link href={"/"}>Inicio</Link>
        <IoIosArrowForward className="text-[18px] lg:text-[22px] text-black" />
        <Link href={"/shop"}>Tienda</Link>
        <IoIosArrowForward className="text-[18px] lg:text-[22px] text-black" />
        <div className="flex w-[2px] h-[28px] lg:h-[32px] bg-[#9F9F9F]"></div>
        <span className="text-black">{product.name}</span>
      </div>
      {/* Hero */}
      <div className="flex p-[24px] lg:py-[40px] lg:px-[80px] justify-start items-center">
        <div className="flex flex-col lg:flex-row w-full gap-y-[32px] gap-x-[48px]">
          <div className="flex lg:w-2/5 gap-x-[24px] lg:gap-x-[48px]">
            <div className="flex flex-col w-1/6 gap-y-[24px]">
              {/* Images */}
              {product.images.map((image, index) => (
                <button
                  key={index}
                  className="flex pb-[100%] bg-[#F9F1E7] relative rounded-[8px] lg:rounded-[24px]"
                  onClick={() => handleSelectImage(index)}
                >
                  <Image
                    src={image}
                    alt={product.name}
                    width={1000}
                    height={1000}
                    className="absolute w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>

            <div className="flex flex-col w-5/6">
              <div className="flex pb-[100%] bg-[#F9F1E7] relative rounded-[24px]">
                <Image
                  src={product.images[selectedImage]}
                  alt={product.name}
                  width={1000}
                  height={1000}
                  className="absolute w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
          <div className="flex flex-col lg:w-3/5 gap-y-[16px] lg:gap-y-[24px]">
            <h1 className="text-[32px] lg:text-[42px] font-medium">
              {product.name}
            </h1>
            <div className="flex lg:text-[24px] font-medium text-[#9F9F9F] gap-x-[32px]">
              <span className="">${product.price} USD</span>
              {product.descount && (
                <span className="line-through">${product.priceBefore} USD</span>
              )}
            </div>
            {/* Rating */}
            <div className="flex">
              <div className="flex items-center gap-x-[16px]">
                {averageRating()}
                <div className="flex w-[1px] h-[32px] bg-[#9F9F9F]" />
                <span className="lg:text-[24px] font-medium text-[#9F9F9F]">
                  {product.reviews.length} reviews
                </span>
              </div>
            </div>
            <p className="flex text-[14px] lg:text-[16px] max-w-[600px]">
              {product.pagraph}
            </p>
            {/* Sizes */}
            <div className="flex flex-col gap-y-[16px]">
              <h4 className="text-[18px] text-[#9F9F9F]">Tamaño</h4>
              <div className="flex flex-wrap gap-[16px]">
                {product.sizes.map((size, index) => (
                  <button
                    key={index}
                    className={`flex items-center justify-center w-[40px] h-[40px] rounded-[8px] ${
                      index === selectedSize
                        ? "bg-[#B88E2F] text-white"
                        : "bg-[#F9F1E7]"
                    } `}
                    onClick={() => handleSelectSize(index)}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>
            {/* Colors */}
            <div className="flex flex-col gap-y-[16px]">
              <h4 className="text-[18px] text-[#9F9F9F]">Color</h4>
              <div className="flex flex-wrap gap-[16px]">
                {product.colors.map((color, index) => (
                  <button
                    key={index}
                    className={`flex items-center justify-center w-[40px] h-[40px] border border-gray-400 rounded-full `}
                    style={{ backgroundColor: color }}
                    onClick={() => handleSelectColor(index)}
                  >
                    {index === selectedColor && (
                      <div className="flex items-center justify-center rounded-full w-full h-full bg-gray-500 bg-opacity-25">
                        <FaCheck className="text-white text-[16px]" />
                      </div>
                    )}
                  </button>
                ))}
              </div>
            </div>
            {/* Add to cart */}
            <div className="flex flex-wrap gap-x-[32px] gap-y-[16px] w-full font-medium">
              <div className="flex w-fit items-center border border-[#9F9F9F] rounded-[24px] text-[12px]">
                <button className="p-[16px] lg:p-[24px]" onClick={handleRemove}>
                  <FaMinus />
                </button>
                <span className="text-[18px] lg:text-[24px]">{quantity}</span>
                <button className="p-[16px] lg:p-[24px]" onClick={handleAdd}>
                  <FaPlus />
                </button>
              </div>
              <button className="flex items-center justify-center w-[200px] h-[64px] bg-[#B88E2F] text-white rounded-[24px]">
                Agregar al carrito
              </button>
              <button className="flex items-center gap-x-[8px] justify-center w-[200px] h-[64px] border border-[#9F9F9F] rounded-[24px]">
                <FaPlus className="text-[16px]" />
                Comparar
              </button>
            </div>
            <div className="flex w-full border my-[16px] border-[#D9D9D9]" />
            {/* Details */}
            <div className="flex text-[#9F9F9F] font-medium gap-x-[10px]">
              <div className="flex flex-col gap-y-[16px]">
                <span>SKU</span>
                <span>Categoría</span>
                <span>Etiquetas</span>
                <span>Compartir</span>
              </div>
              <div className="flex flex-col gap-y-[16px]">
                <span>:</span>
                <span>:</span>
                <span>:</span>
                <span>:</span>
              </div>
              <div className="flex flex-col gap-y-[16px]">
                <span>{product.sku}</span>
                <span>{product.category}</span>
                <div className="flex gap-x-[6px]">
                  {product.tags.map((tag, index) => (
                    <span key={index}>
                      {tag}
                      {index !== product.tags.length - 1 && ","}
                    </span>
                  ))}
                </div>
                <div className="flex text-black gap-x-[16px] text-[24px]">
                  <Link href="">
                    <FaFacebook />
                  </Link>
                  <Link href="">
                    <IoLogoLinkedin />
                  </Link>
                  <Link href="">
                    <FaSquareTwitter />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex w-full border my-[24px] border-[#D9D9D9]" />
      {/* Content */}
      <div className="flex flex-col p-[24px] gap-y-[32px] lg:gap-y-[64px] lg:py-[40px] lg:px-[80px] justify-start items-center">
        {/* Tabs */}
        <div className="flex w-full items-center lg:justify-center lg:gap-x-[32px]">
          <button
            className="p-[8px]"
            onClick={() => setSelectedTab("description")}
          >
            <h2
              className={`text-[16px] lg:text-[32px] text-center ${
                selectedTab === "description" ? "font-medium" : "text-[#9F9F9F]"
              }`}
            >
              Descripción
            </h2>
          </button>
          <button className="p-[8px]" onClick={() => setSelectedTab("info")}>
            <h2
              className={`text-[16px] lg:text-[32px] text-center ${
                selectedTab === "info" ? "font-medium" : "text-[#9F9F9F]"
              }`}
            >
              Información adicional
            </h2>
          </button>
          <button className="p-[8px]" onClick={() => setSelectedTab("reviews")}>
            <h2
              className={`text-[16px] lg:text-[32px] text-center ${
                selectedTab === "reviews" ? "font-medium" : "text-[#9F9F9F]"
              }`}
            >
              Reviews [{product.reviews.length}]
            </h2>
          </button>
        </div>
        {/* Tabs content */}
        <div className="flex w-full mt-[32px]">
          {/* Description */}
          {selectedTab === "description" && (
            <div className="flex flex-col w-full items-center gap-y-[32px] lg:gap-y-[64px]">
              <p className="text-[14px] lg:text-[18px] text-[#9F9F9F] max-w-[1000px] text-justify">
                {product.description}
              </p>
              <div className="grid w-full grid-cols-1 lg:grid-cols-2 gap-[32px] lg:gap-[64px]">
                {product.imgsDescription.map((img, index) => (
                  <div
                    key={index}
                    className="flex pb-[50%] bg-[#F9F1E7] relative rounded-[24px]"
                  >
                    <Image
                      src={img}
                      alt={product.name}
                      width={1000}
                      height={1000}
                      className="absolute w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>
          )}
          {/* Info */}
          {selectedTab === "info" && (
            <div className="flex flex-col w-full items-center gap-y-[32px] lg:gap-y-[64px]">
              <p className="text-[14px] lg:text-[18px] text-[#9F9F9F] max-w-[1000px] text-justify">
                {product.description}
              </p>
              <div className="grid w-full grid-cols-1 lg:grid-cols-2 gap-[32px] lg:gap-[64px]">
                {product.imgsDescription.map((img, index) => (
                  <div
                    key={index}
                    className="flex pb-[50%] bg-[#F9F1E7] relative rounded-[24px]"
                  >
                    <Image
                      src={img}
                      alt={product.name}
                      width={1000}
                      height={1000}
                      className="absolute w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>
          )}
          {/* Reviews */}
          {selectedTab === "reviews" && (
            <div className="flex flex-col w-full">
              {product.reviews.map((review, index) => (
                <div
                  key={index}
                  className="flex flex-col gap-y-[16px] border-b border-[#D9D9D9] pb-[24px]"
                >
                  <div className="flex items-center gap-x-[16px]">
                    <h3 className="text-[18px] font-medium">{review.title}</h3>
                    <span className="text-[14px] text-[#9F9F9F]">
                      {review.date}
                    </span>
                  </div>
                  <div className="flex items-center gap-x-[16px]">
                    <span className="text-[14px] text-[#9F9F9F]">
                      Por {review.autor}
                    </span>
                    <span className="flex">
                      {Array.from({ length: 5 }, (_, i) => (
                        <div
                          key={i}
                          className="text-yellow-400 text-[20px] lg:text-[24px]"
                        >
                          {i + 1 <= review.rating ? <FaStar /> : <FaRegStar />}
                        </div>
                      ))}
                    </span>
                  </div>
                  <p className="text-[14px] lg:text-[16px] text-[#9F9F9F]">
                    {review.review}
                  </p>
                </div>
              ))}
            </div>
          )}
        </div>
        <div className="flex w-full border border-[#D9D9D9]" />
        {/* Related products */}
        <div className="flex flex-col items-center w-full gap-y-[32px] lg:gap-y-[48px]">
          <h2 className="text-[20px] lg:text-[32px] font-medium">
            Productos relacionados
          </h2>
          <ProductList products={products} header={false} pagination={false} />
          <SeeMoreBtn />
        </div>
      </div>
      <Footer />
    </>
  );
}
