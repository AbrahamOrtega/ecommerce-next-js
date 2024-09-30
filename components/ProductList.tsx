import Image from "next/image";
import { IoShareSocial } from "react-icons/io5";
import { MdOutlineCompareArrows } from "react-icons/md";
import { FaRegHeart } from "react-icons/fa";
import ProductModel from "../interfaces/ProductModel";
import { IoMdOptions } from "react-icons/io";
import { IoGrid } from "react-icons/io5";
import { MdOutlineViewDay } from "react-icons/md";
import { useState } from "react";
import Link from "next/link";

export default function ProductsList(props: {
  products: ProductModel[];
  header: boolean;
  pagination: boolean;
}) {
  const [show, setShow] = useState("");
  const [orderBy, setOrderBy] = useState("");

  /// handle view
  const [view, setView] = useState("grid");

  // Pagination
  const [currentPage, setCurrentPage] = useState(1);
  const handlePagination = (page: number) => {
    setCurrentPage(page);
  };
  const handleNextPage = () => {
    setCurrentPage(currentPage + 1);
  };
  const handlePrevPage = () => {
    setCurrentPage(currentPage - 1);
  };

  return (
    <>
      {props.header && (
        <div className="flex w-full bg-[#F9F1E7] px-[40px] lg:px-[80px] py-[32px] mb-[32px] lg:mb-[64px]">
          <div className="flex flex-col lg:flex-row gap-y-[24px] w-full justify-between">
            <div className="flex flex-wrap gap-y-[24px] gap-x-[24px] items-center">
              <div className="flex gap-x-[8px]">
                <IoMdOptions className="text-[#000] text-[24px]" />
                <span>Filtro</span>
              </div>
              <IoGrid
                onClick={() => setView("grid")}
                className={`text-[24px] ${
                  view === "grid" ? "opacity-100" : "opacity-50"
                }`}
              />
              <MdOutlineViewDay
                onClick={() => setView("list")}
                className={`text-[24px] ${
                  view === "list" ? "opacity-100" : "opacity-50"
                }`}
              />
              <div className="hidden lg:flex w-[2px] h-[40px] bg-[#9F9F9F]"></div>
              <span>Mostrando 1-16 de 32 resultados</span>
            </div>
            <div className="flex flex-wrap gap-x-[32px] items-center lg:text-[20px] gap-y-[16px]">
              <div className="flex gap-x-[12px] items-center">
                Mostrar{" "}
                <input
                  className="w-[64px] h-12 text-center"
                  type="number"
                  value={show}
                  placeholder="16"
                  onChange={(e) => {
                    setShow(e.target.value);
                  }}
                />
              </div>
              <div className="flex gap-x-[12px] items-center">
                Ordenar por{" "}
                <input
                  className="w-[200px] lg:w-[200px] h-12 text-center"
                  type="text"
                  value={orderBy}
                  placeholder="Default"
                  onChange={(e) => {
                    setOrderBy(e.target.value);
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      )}
      <div className="flex flex-col w-full items-center px-[40px] lg:px-[80px]">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[32px] lg:gap-[64px]">
          {props.products.map((product) => (
            <div
              key={product.id}
              className="flex flex-col bg-[#F4F5F7] relative"
            >
              <div className="absolute flex flex-col w-full h-full items-center justify-center  gap-y-[32px] bg-black bg-opacity-50 z-10 opacity-0 hover:opacity-100 pt-[64px] hover:pt-[0px] transition-all duration-300">
                <Link
                  href={`/product/${product.id}`}
                  className="bg-white px-[24px] py-[16px] text-[16px] font-semibold text-[#B88E2F]"
                >
                  Agregar al carrito
                </Link>
                <div className="flex flex-wrap gap-y-[16px] w-full text-white text-[16px] justify-between px-[16px] lg:px-[24px] font-semibold">
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
      </div>
      {/* Pagination */}
      {props.pagination && (
        <div className="flex w-full items-center justify-center mt-[32px] lg:mt-[64px] gap-x-[12px] mb-[32px] text-[12px] lg:text-[16px]">
          <button
            className={`px-[12px] py-[8px] lg:px-[24px] lg:py-[16px] bg-[#F9F1E7] rounded-[8px] ${
              currentPage === 1 && "opacity-50"
            }`}
            disabled={currentPage === 1}
            onClick={handlePrevPage}
          >
            Anterior
          </button>
          <button
            className={`px-[12px] py-[8px] lg:px-[24px] lg:py-[16px] ${
              currentPage === 1 ? "bg-[#B88E2F] text-white" : "bg-[#F9F1E7]"
            } rounded-[8px]`}
            onClick={() => handlePagination(1)}
          >
            1
          </button>
          <button
            className={`px-[12px] py-[8px] lg:px-[24px] lg:py-[16px] ${
              currentPage === 2 ? "bg-[#B88E2F] text-white" : "bg-[#F9F1E7]"
            } rounded-[8px]`}
            onClick={() => handlePagination(2)}
          >
            2
          </button>
          <button
            className={`px-[12px] py-[8px] lg:px-[24px] lg:py-[16px] ${
              currentPage === 3 ? "bg-[#B88E2F] text-white" : "bg-[#F9F1E7]"
            } rounded-[8px]`}
            onClick={() => handlePagination(3)}
          >
            3
          </button>
          <button
            className={`px-[12px] py-[8px] lg:px-[24px] lg:py-[16px] bg-[#F9F1E7] rounded-[8px] ${
              currentPage === 3 && "opacity-50"
            }`}
            onClick={handleNextPage}
            disabled={currentPage === 3}
          >
            Siguiente
          </button>
        </div>
      )}
    </>
  );
}
