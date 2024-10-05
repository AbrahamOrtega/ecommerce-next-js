import BannerPage from "@/components/BannerPage";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import { FaUser } from "react-icons/fa";
import { FaCalendar } from "react-icons/fa";
import { FaTag } from "react-icons/fa6";
import { CiSearch } from "react-icons/ci";
import FooterBanner from "@/components/FooterBanner";
import Footer from "@/components/Footer";
import { useState } from "react";

const blogs = [
  {
    id: 1,
    title: "Going all-in with millennial design",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus mauris vitae ultricies leo integer malesuada nunc. In nulla posuere sollicitudin aliquam ultrices. Morbi blandit cursus risus at ultrices mi tempus imperdiet. Libero enim sed faucibus turpis in. Cursus mattis molestie a iaculis at erat. Nibh cras pulvinar mattis nunc sed blandit libero. Pellentesque elit ullamcorper dignissim cras tincidunt. Pharetra et ultrices neque ornare aenean euismod elementum.",
    image: "/blogs/blog-img.png",
    date: "2022-01-01",
    author: "Admin",
    tags: ["Wood", "Furniture"],
  },
  {
    id: 2,
    title: "Going all-in with millennial design",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus mauris vitae ultricies leo integer malesuada nunc. In nulla posuere sollicitudin aliquam ultrices. Morbi blandit cursus risus at ultrices mi tempus imperdiet. Libero enim sed faucibus turpis in. Cursus mattis molestie a iaculis at erat. Nibh cras pulvinar mattis nunc sed blandit libero. Pellentesque elit ullamcorper dignissim cras tincidunt. Pharetra et ultrices neque ornare aenean euismod elementum.",
    image: "/blogs/blog-img-1.png",
    date: "2022-01-01",
    author: "Admin",
    tags: ["Wood", "Furniture"],
  },
  {
    id: 3,
    title: "Going all-in with millennial design",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus mauris vitae ultricies leo integer malesuada nunc. In nulla posuere sollicitudin aliquam ultrices. Morbi blandit cursus risus at ultrices mi tempus imperdiet. Libero enim sed faucibus turpis in. Cursus mattis molestie a iaculis at erat. Nibh cras pulvinar mattis nunc sed blandit libero. Pellentesque elit ullamcorper dignissim cras tincidunt. Pharetra et ultrices neque ornare aenean euismod elementum.",
    image: "/blogs/blog-img-2.png",
    date: "2022-01-01",
    author: "Admin",
    tags: ["Wood", "Furniture"],
  },
];

export default function Blogs() {
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
      <Navbar />
      <BannerPage title="Blog" />
      <div className="flex flex-col mb-[32px] px-[24px] gap-y-[32px] lg:gap-y-[64px] mt-[16px] lg:mt-[32px] lg:py-[40px] lg:px-[80px]">
        <div className="flex flex-col gap-y-[40px] lg:flex-row">
          {/* Blogs */}
          <div className="flex flex-col w-full lg:w-2/3 gap-y-[40px] lg:gap-y-[72px] mt-[32px] lg:px-[40px]">
            {blogs.map((blog) => (
              <div key={blog.id} className="flex flex-col">
                <div className="flex w-full pb-[50%] relative">
                  <Image
                    src={blog.image}
                    alt={blog.title}
                    className="absolute w-full h-full object-cover rounded-[24px]"
                    width={400}
                    height={400}
                  />
                </div>
                {/* Info blog */}
                <div className="flex mt-[24px] gap-x-[32px]">
                  <div className="flex text-[#9F9F9F] items-center">
                    <FaUser className="text-[20px]" />
                    <p className="ml-[8px]">{blog.author}</p>
                  </div>
                  <div className="flex text-[#9F9F9F] items-center">
                    <FaCalendar className="text-[20px]" />
                    <p className="ml-[8px]">{blog.date}</p>
                  </div>
                  <div className="flex text-[#9F9F9F] items-center">
                    <FaTag className="text-[20px]" />
                    <p className="ml-[8px]">{blog.tags[0]}</p>
                  </div>
                </div>
                {/* Title blog and description */}
                <div className="flex flex-col mt-[24px]">
                  <h3 className="text-[28px] font-semibold">{blog.title}</h3>
                  <p className="text-[#9F9F9F] mt-[16px]">{blog.content}</p>
                </div>
                {/* Button read more */}
                <button className="w-fit font-semibold py-[8px] border-b border-black mt-[24px]">
                  Leer más
                </button>
              </div>
            ))}
          </div>
          {/* Pagination */}
          <div className="flex lg:hidden w-full items-center justify-center mt-[32px] lg:mt-[64px] gap-x-[12px] mb-[32px] text-[12px] lg:text-[16px]">
            <button
              className={`px-[12px] py-[8px] lg:px-[24px] lg:py-[16px] bg-[#F9F1E7] rounded-[8px] ${
                currentPage === 1 && "opacity-50 cursor-not-allowed"
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
                currentPage === 3 && "opacity-50 cursor-not-allowed"
              }`}
              onClick={handleNextPage}
              disabled={currentPage === 3}
            >
              Siguiente
            </button>
          </div>
          {/* Sidebar */}
          <div className="flex flex-col w-full lg:w-1/3 gap-y-[32px] lg:gap-y-[64px] mb-[40px] lg:mb-0 lg:mt-[32px] lg:px-[40px]">
            <div className="flex w-full rounded-[16px] py-[16px] px-[24px] border">
              <input className="w-full outline-none" />
              <button>
                <CiSearch className="text-[20px]" />
              </button>
            </div>
            {/* Categories */}
            <div className="flex flex-col gap-y-[16px]">
              <h3 className="text-[24px] font-medium">Categorias</h3>
              <div className="flex flex-col gap-y-[16px] mt-[16px] items-start text-[#9F9F9F]">
                <button className="flex w-full justify-between font-semibold">
                  <p>Wood</p>
                  <p>3</p>
                </button>
                <button className="flex w-full justify-between font-semibold">
                  <p>Furniture</p>
                  <p>2</p>
                </button>
                <button className="flex w-full justify-between font-semibold">
                  <p>Design</p>
                  <p>5</p>
                </button>
              </div>
            </div>
            {/* Recent posts */}
            <div className="flex flex-col gap-y-[24px]">
              <h3 className="text-[24px] font-medium">Entradas Recientes</h3>
              {blogs.map((blog) => (
                <div key={blog.id} className="flex gap-x-[16px] mt-[16px]">
                  <div className="flex w-[80px] h-[80px] relative">
                    <Image
                      src={blog.image}
                      alt={blog.title}
                      className="absolute w-full h-full object-cover rounded-[16px]"
                      width={80}
                      height={80}
                    />
                  </div>
                  <div className="flex flex-col">
                    <h4 className="text-[20px] font-semibold">{blog.title}</h4>
                    <p className="text-[#9F9F9F] mt-[8px]">{blog.date}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        {/* Pagination */}
        <div className="hidden lg:flex w-full items-center justify-center mt-[32px] lg:mt-[64px] gap-x-[12px] mb-[32px] text-[12px] lg:text-[16px]">
          <button
            className={`px-[12px] py-[8px] lg:px-[24px] lg:py-[16px] bg-[#F9F1E7] rounded-[8px] ${
              currentPage === 1 && "opacity-50 cursor-not-allowed"
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
              currentPage === 3 && "opacity-50 cursor-not-allowed"
            }`}
            onClick={handleNextPage}
            disabled={currentPage === 3}
          >
            Siguiente
          </button>
        </div>
      </div>
      <FooterBanner />
      <Footer />
    </>
  );
}
