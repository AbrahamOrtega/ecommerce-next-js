import Image from "next/image";
import Link from "next/link";
import { FaRegUser } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";
import { FaRegHeart } from "react-icons/fa";
import { CgShoppingCart } from "react-icons/cg";
import { IoAlert } from "react-icons/io5";
import { MdOutlineMenu } from "react-icons/md";
import { useState } from "react";
import { IoClose } from "react-icons/io5";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const handleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* Navbar desktop*/}
      <div className="hidden lg:flex w-full px-[28px] py-[16px] justify-between items-center">
        <div className="flex  gap-x-[8px] items-center justify-center">
          <Image src="/logo.png" alt="logo" width={46} height={36} />
          <h3 className="text-[28px] font-bold">Furniro</h3>
        </div>

        <ul className="flex text-[16px] font-medium gap-x-[56px]">
          <li>
            <Link href={"/"}>Home</Link>
          </li>
          <li>
            <Link href={"/shop"}>Comprar</Link>
          </li>
          <li>
            <Link href={"/about"}>About</Link>
          </li>
          <li>
            <Link href={"/contact"}>Contacto</Link>
          </li>
        </ul>

        <div className="flex text-[20px] gap-x-[36px]">
          <div className="flex">
            <FaRegUser className="mr-[-7px]" />
            <IoAlert className="text-[18px]" />
          </div>
          <CiSearch />
          <FaRegHeart />
          <CgShoppingCart />
        </div>
      </div>

      {/* Navbar mobile */}
      <div className="flex flex-col w-full lg:hidden">
        <div className="flex w-full px-[42px] py-[16px] justify-between items-center">
          <div className="flex  gap-x-[8px] items-center justify-center">
            <Image src="/logo.png" alt="logo" width={46} height={36} />
            <h3 className="text-[28px] font-bold">Furniro</h3>
          </div>
          <div onClick={handleMenu}>
            {isOpen ? (
              <IoClose className="text-[34px]" />
            ) : (
              <MdOutlineMenu className="text-[34px]" />
            )}
          </div>
        </div>
        {isOpen && (
          <div className="flex flex-col w-full items-center gap-y-[28px] pb-[32px]">
            <ul className="flex flex-col w-full text-[18px] font-medium gap-y-[22px]">
              <li className="flex w-full">
                <Link className="flex w-full justify-center" href={"/"}>
                  Home
                </Link>
              </li>
              <li className="flex w-full">
                <Link className="flex w-full justify-center" href={"/shop"}>
                  Comprar
                </Link>
              </li>
              <li className="flex w-full">
                <Link className="flex w-full justify-center" href={"/about"}>
                  About
                </Link>
              </li>
              <li className="flex w-full">
                <Link className="flex w-full justify-center" href={"/contact"}>
                  Contacto
                </Link>
              </li>
            </ul>

            <div className="flex w-full text-[22px] px-[56px] justify-between">
              <div className="flex">
                <FaRegUser className="mr-[-7px]" />
                <IoAlert className="text-[20px]" />
              </div>
              <CiSearch />
              <FaRegHeart />
              <CgShoppingCart />
            </div>
          </div>
        )}
      </div>
    </>
  );
}
