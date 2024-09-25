import Image from "next/image";
import { IoShareSocial } from "react-icons/io5";
import { MdOutlineCompareArrows } from "react-icons/md";
import { FaRegHeart } from "react-icons/fa";

export default function ProductsList({ products }) {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[32px]">
        {products.map((product) => (
          <div key={product.id} className="flex flex-col bg-[#F4F5F7] relative">
            <div className="absolute flex flex-col w-full h-full items-center justify-center gap-y-[32px] bg-black bg-opacity-50 z-10 opacity-0 hover:opacity-100 pt-[64px] hover:pt-[0px] transition-all duration-300">
              <button className="bg-white px-[24px] py-[16px] text-[16px] font-semibold text-[#B88E2F]">
                Agregar al carrito
              </button>
              <div className="flex w-full text-white text-[16px] justify-between px-[24px] font-semibold">
                <button className="flex items-center gap-x-[4px]">
                  <IoShareSocial className="text-[18px]" />
                  <p>Compartir</p>
                </button>
                <button className="flex items-center gap-x-[4px]">
                  <MdOutlineCompareArrows className="text-[18px]" />
                  <p>Comparar</p>
                </button>
                <button className="flex items-center gap-x-[4px]">
                  <FaRegHeart className="text-[18px]" />
                  <p>Me gusta</p>
                </button>
              </div>
            </div>
            <div className="relative">
              {product.descount && (
                <div className="flex absolute rounded-full items-center justify-center h-[50px] w-[50px] bg-[#E97171] right-0 m-[16px] text-white">
                  - {product.descount}
                </div>
              )}
              {!product.descount && product.isNew && (
                <div className="flex absolute rounded-full items-center justify-center h-[50px] w-[50px] bg-[#2EC1AC] right-0 m-[16px] text-white">
                  New
                </div>
              )}
              <Image
                src={product.image}
                alt={product.name}
                width={1000}
                height={500}
              />
            </div>

            <div className="flex flex-col w-full p-[16px] gap-y-[8px]">
              <h3 className="text-[24px] font-semibold">{product.name}</h3>
              <p className="text-[#898989] font-medium text-[16px]">
                {product.style}
              </p>
              <div className="flex w-full justify-between items-center">
                <p className="text-[18px] font-semibold">
                  ${product.price} USD
                </p>
                {product.descount && (
                  <p className="text-[#B0B0B0] text-[14px] line-through">
                    ${product.priceBefore} USD
                  </p>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
