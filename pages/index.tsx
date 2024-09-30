import Navbar from "@/components/Navbar";
import ProductsList from "@/components/ProductList";
import Image from "next/image";
import { FaArrowRightLong } from "react-icons/fa6";
import { FaCircle } from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";
import { useState } from "react";
import Footer from "@/components/Footer";
import { useEffect } from "react";
import { motion } from "framer-motion";
import SeeMoreBtn from "@/components/SeeMoreBtn";

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
];

const inspiration = [
  {
    name: "Inner Peace",
    style: "01 --- Bed Room",
    image: "/inspiration/inner-peace.png",
  },
  {
    name: "Dinner",
    style: "02 --- Dining Room",
    image: "/inspiration/dinner.png",
  },
  {
    name: "Bedroom",
    style: "03 --- Bed Room",
    image: "/inspiration/bedroom.png",
  },
];

// Variants for sliding animation
const slideVariantsNext = {
  hidden: (direction: string) => ({
    x: direction === "next" ? 300 : -300,
    opacity: 0,
  }),
  visible: { x: 0, opacity: 1 },
  exit: (direction: string) => ({
    x: direction === "next" ? -300 : 300,
    opacity: 0,
  }),
};
const slideVariantsPrev = {
  hidden: (direction: string) => ({
    x: direction === "next" ? -300 : 300,
    opacity: 0,
  }),
  visible: { x: 0, opacity: 1 },
  exit: (direction: string) => ({
    x: direction === "next" ? 300 : -300,
    opacity: 0,
  }),
};

export default function Home() {
  // Inspiration carousel
  const [currentInspiration, setCurrentInspiration] = useState(0);
  const [slideVariants, setSlideVariants] = useState(slideVariantsNext);
  // handle next inspiration
  const handleNextInspiration = () => {
    setSlideVariants(slideVariantsNext);
    if (currentInspiration < inspiration.length - 1) {
      setCurrentInspiration(currentInspiration + 1);
    } else {
      setCurrentInspiration(0);
    }
  };
  // handle prev inspiration
  const handlePrevInspiration = () => {
    setSlideVariants(slideVariantsPrev);
    if (currentInspiration > 0) {
      setCurrentInspiration(currentInspiration - 1);
    } else {
      setCurrentInspiration(inspiration.length - 1);
    }
  };
  // handle select inspiration
  const handleSelectInspiration = (index: number) => {
    setSlideVariants(slideVariantsNext);
    setCurrentInspiration(index);
  };

  // Auto change inspiration
  useEffect(() => {
    const interval = setInterval(() => {
      handleNextInspiration();
    }, 3000); // Cambia cada 3 segundos

    return () => clearInterval(interval);
  }, [currentInspiration]);

  return (
    <>
      <Navbar />
      <div className="flex flex-col w-full gap-y-[72px]">
        {/* Hero */}
        <div className="relative flex w-full h-[95vh]">
          <Image
            className="absolute h-full w-full object-cover"
            src="/scandinavian-interior-background.png"
            alt="interior-bg"
            width={10000}
            height={500}
          />
          <div className="absolute w-full h-full flex items-center px-[40px] lg:pr-[80px]">
            <div className="hidden lg:flex w-1/2"></div>
            <div className="flex flex-col w-full lg:w-1/2 bg-[#FFF3E3] rounded-[16px] py-[36px] px-[28px] gap-y-[24px]">
              <span className="font-semibold text-[16px]">Recien llegado</span>
              <h1 className="text-[#B88E2F] text-[36px] font-bold leading-[48px] lg:text-[48px] lg:leading-[56px]">
                Descubre Nuestra
                <br />
                Nueva Colección
              </h1>
              <p className="text-[16px] font-medium text-[#333333]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Officiis, explicabo tenetur repellat aspernatur deserunt dolores
                omnis tempore vero nisi beatae.
              </p>
              <button className="bg-[#B88E2F] w-fit text-white px-[32px] py-[16px] mt-[16px]">
                Comprar Ahora
              </button>
            </div>
          </div>
        </div>

        {/* Features */}
        <div className="flex flex-col w-full justify-center items-center px-[36px] lg:px-[56px] gap-y-[36px]">
          <h1 className="text-[32px] font-bold leading-[24px]">Explora</h1>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Porro,
            quisquam?
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 w-full gap-x-[28px] xl:gap-x-[64px] text-center gap-y-[24px]">
            <div className="flex flex-col gap-y-[16px]">
              <div className="relative pb-[120%] md:pb-[140%]">
                <Image
                  src="/dining.png"
                  alt="dining"
                  width={500}
                  height={500}
                  className="absolute rounded-[8px] w-full h-full object-cover"
                />
              </div>
              <span className="text-[24px] font-semibold">Comedor</span>
            </div>
            <div className="flex flex-col gap-y-[16px]">
              <div className="relative pb-[120%] md:pb-[140%]">
                <Image
                  src="/living.png"
                  alt="living"
                  width={500}
                  height={500}
                  className="absolute rounded-[8px] w-full h-full object-cover"
                />
              </div>
              <span className="text-[24px] font-semibold">Sala</span>
            </div>
            <div className="flex flex-col gap-y-[16px]">
              <div className="relative pb-[120%] md:pb-[140%]">
                <Image
                  src="/bedroom.png"
                  alt="bedroom"
                  width={500}
                  height={500}
                  className="absolute rounded-[8px] w-full h-full object-cover"
                />
              </div>
              <span className="text-[24px] font-semibold">Dormitorio</span>
            </div>
          </div>
        </div>

        {/* Products */}
        <div className="flex flex-col w-full items-center gap-y-[64px]">
          <h1 className="text-[32px] font-bold">Productos</h1>
          <ProductsList products={products} header={false} pagination={false} />
          <SeeMoreBtn />
        </div>

        {/* Rooms Inspiration Desktop */}
        <div className="hidden lg:flex w-full bg-[#FCF8F3]">
          <div className="flex w-full items-center gap-x-[80px] pl-[40px] lg:pl-[80px]">
            <div className="flex flex-col w-1/3 gap-y-[24px] ">
              <h1 className="text-[40px] font-bold">
                50+ Habitaciones Hermosas Inspiración
              </h1>
              <p className="text-[20px] font-medium">
                Our designer already made a lot of beautiful prototipe of rooms
                that inspire you
              </p>
              <button className="w-fit text-[24px] bg-[#B88E2F] text-white px-[32px] py-[16px]">
                Ver Más
              </button>
            </div>
            <div className="flex w-2/3 py-[48px] gap-x-[56px]">
              <div className="flex w-1/2 relative h-[1000px] overflow-hidden">
                <motion.div
                  key={currentInspiration}
                  custom="next" // pass the direction of the slide
                  variants={slideVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                  className="flex w-full h-full"
                >
                  <Image
                    className="flex-[1_0_100%] w-full h-full object-cover snap-start"
                    src={inspiration[currentInspiration].image}
                    alt={inspiration[currentInspiration].name}
                    width={1000}
                    height={1000}
                  />
                </motion.div>
                <div className="flex absolute w-full h-full items-end">
                  <div className="flex mb-[40px] ml-[40px] items-end ">
                    <div className="flex flex-col w-fit h-fit bg-white bg-opacity-60 backdrop-blur-3 p-[32px]">
                      <span className="text-[16px] font-medium">
                        01 --- Bed Room
                      </span>
                      <h2 className="text-[28px] font-semibold">Inner Peace</h2>
                    </div>
                    <button className="bg-[#B88E2F] text-[24px] text-white p-[12px]">
                      <FaArrowRightLong />
                    </button>
                  </div>
                </div>
              </div>
              <div className="flex flex-col w-1/2">
                <div className="flex w-full h-full gap-x-[40px]">
                  <div className="flex w-4/5 relative">
                    <div className="flex w-full h-full overflow-hidden">
                      <motion.div
                        key={currentInspiration}
                        custom="next" // pass the direction of the slide
                        variants={slideVariants}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        transition={{ duration: 0.5, ease: "easeInOut" }}
                        className="flex w-full h-full"
                      >
                        <Image
                          className="absolute w-full h-full object-cover"
                          src={
                            currentInspiration < inspiration.length - 1
                              ? inspiration[currentInspiration + 1].image
                              : inspiration[0].image
                          }
                          alt=""
                          width={1000}
                          height={1000}
                        />
                      </motion.div>
                    </div>

                    <div className="flex w-full h-full absolute justify-end items-center left-5">
                      <button
                        className="bg-white p-[12px] rounded-full shadow-xl"
                        onClick={handleNextInspiration}
                      >
                        <IoIosArrowForward className="text-[40px] text-[#B88E2F]" />
                      </button>
                    </div>
                  </div>
                  <div className="flex w-1/5 relative my-[48px] overflow-hidden">
                    <motion.div
                      key={currentInspiration}
                      custom="next" // pass the direction of the slide
                      variants={slideVariants}
                      initial="hidden"
                      animate="visible"
                      exit="exit"
                      transition={{ duration: 0.5, ease: "easeInOut" }}
                      className="flex w-full h-full"
                    >
                      <Image
                        className="absolute w-full h-full object-cover"
                        src={
                          currentInspiration < inspiration.length - 2
                            ? inspiration[currentInspiration + 2].image
                            : inspiration[
                                Math.abs(
                                  inspiration.length - (currentInspiration + 2)
                                )
                              ].image
                        }
                        alt="bedroom"
                        width={1000}
                        height={1000}
                      />
                    </motion.div>
                  </div>
                </div>
                <div className="flex my-[32px] gap-x-[16px]">
                  {inspiration.map((insp, index) => (
                    <div key={index}>
                      {currentInspiration === index ? (
                        <button className="p-[6px] border-2 rounded-full border-[#B88E2F] text-[#B88E2F] text-[12px]">
                          <FaCircle />
                        </button>
                      ) : (
                        <button
                          className="p-[6px] rounded-full text-[#D8D8D8] text-[12px]"
                          onClick={() => handleSelectInspiration(index)}
                        >
                          <FaCircle />
                        </button>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Rooms Inspiration Mobile */}
        <div className="flex flex-col lg:hidden w-full bg-[#FCF8F3] py-[32px]">
          <div className="flex flex-col w-full px-[40px]">
            <div className="flex flex-col items-center">
              <div className="flex w-full relative">
                <div className="flex w-full h-[70vh] overflow-hidden">
                  <motion.div
                    key={currentInspiration}
                    custom="next" // pass the direction of the slide
                    variants={slideVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                    className="flex w-full h-full"
                  >
                    <Image
                      className="flex-[1_0_100%] w-full h-full object-cover snap-start"
                      src={inspiration[currentInspiration].image}
                      alt={inspiration[currentInspiration].name}
                      width={1000}
                      height={1000}
                    />
                  </motion.div>
                </div>

                <div className="flex absolute w-full h-full items-end">
                  <div className="flex mb-[24px] ml-[24px] items-end">
                    <div className="flex flex-col w-fit h-fit bg-white bg-opacity-60 backdrop-blur-3 p-[32px]">
                      <span className="text-[12px] font-medium">
                        01 --- Bed Room
                      </span>
                      <h2 className="text-[18px] font-semibold">
                        {inspiration[currentInspiration].name}
                      </h2>
                    </div>
                    <button className="bg-[#B88E2F] text-[24px] text-white p-[12px]">
                      <FaArrowRightLong />
                    </button>
                  </div>
                </div>

                <div className="flex absolute w-full h-full justify-between items-center">
                  <button
                    className="w-fit h-fit bg-white p-[12px] rounded-full shadow-xl ml-[-32px]"
                    onClick={handlePrevInspiration}
                  >
                    <IoIosArrowBack className="text-[24px] text-[#B88E2F]" />
                  </button>
                  <button
                    className="w-fit h-fit bg-white p-[12px] rounded-full shadow-xl mr-[-32px]"
                    onClick={handleNextInspiration}
                  >
                    <IoIosArrowForward className="text-[24px] text-[#B88E2F]" />
                  </button>
                </div>
              </div>

              <div className="flex my-[32px] gap-x-[16px]">
                {inspiration.map((insp, index) => (
                  <div key={index}>
                    {currentInspiration === index ? (
                      <button className="p-[6px] border-2 rounded-full border-[#B88E2F] text-[#B88E2F] text-[12px]">
                        <FaCircle />
                      </button>
                    ) : (
                      <button
                        className="p-[6px] rounded-full text-[#D8D8D8] text-[12px]"
                        onClick={() => handleSelectInspiration(index)}
                      >
                        <FaCircle />
                      </button>
                    )}
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-col gap-y-[24px]">
              <h1 className="text-[32px] font-bold">
                50+ Habitaciones Hermosas Inspiración
              </h1>
              <p className="text-[16px] font-medium">
                Our designer already made a lot of beautiful prototypes of rooms
                that inspire you.
              </p>
              <button className="w-fit text-[18px] bg-[#B88E2F] text-white px-[32px] py-[16px]">
                Ver Más
              </button>
            </div>
          </div>
        </div>

        {/* Share your setup */}
        <div className="flex flex-col w-full items-center">
          <p className="text-[18px] lg:text-[24px] font-semibold text-[#616161]">
            Comparte tus diseños con
          </p>
          <h3 className="text-[40px] lg:text-[48px] font-bold">
            #FuniroFurniture
          </h3>
          <div className="flex w-full h-[85vh] relative">
            <Image
              className="absolute w-full h-full object-cover"
              src="/share-bg.png"
              alt="instagram"
              width={10000}
              height={800}
            />
          </div>
        </div>

        <Footer />
      </div>
    </>
  );
}
