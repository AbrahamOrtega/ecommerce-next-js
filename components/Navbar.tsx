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
import { TbShoppingBagX } from "react-icons/tb";
import { useAppSelector } from "@/store";
import { useAppDispatch } from "@/store";
import { removeFromCart } from "@/features/cartSlice";

export default function Navbar() {
  const dispatch = useAppDispatch();
  const cart = useAppSelector((state) => state.cart);
  const [isOpen, setIsOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const handleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Handle Cart
  const handleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  // Subtotal
  const subtotal = cart.products.reduce((acc, product, index) => {
    return acc + product.price * cart.stock[index];
  }, 0);

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
            <Link href={"/"}>Inicio</Link>
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
          <button className="flex">
            <FaRegUser className="mr-[-7px]" />
            <IoAlert className="text-[18px]" />
          </button>
          <button>
            <CiSearch />
          </button>
          <button>
            <FaRegHeart />
          </button>
          <button onClick={handleCart}>
            <CgShoppingCart />
          </button>
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
                  Inicio
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
              <button className="flex">
                <FaRegUser className="mr-[-7px]" />
                <IoAlert className="text-[18px]" />
              </button>
              <button>
                <CiSearch />
              </button>
              <button>
                <FaRegHeart />
              </button>
              <button onClick={handleCart}>
                <CgShoppingCart />
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Modal Cart */}
      {isCartOpen && (
        <div className="flex justify-end fixed w-full h-screen top-0 right-0 bg-slate-800 bg-opacity-50 z-20">
          <div className="flex flex-col w-[600px] h-fit bg-white">
            <div className="flex flex-col p-[40px] gap-y-[32px]">
              <div className="flex text-[28px] items-center justify-between">
                <h3 className="font-semibold">Carrito</h3>
                <button onClick={handleCart}>
                  <TbShoppingBagX className="text-[32px] text-[#9F9F9F]" />
                </button>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex w-full border-t border-[#D9D9D9]" />
                <div className="flex w-[80px]" />
              </div>
              <div className="flex w-full flex-col">
                {cart.products.map((product, index) => (
                  <div
                    key={product.id}
                    className="flex w-full items-center gap-x-[16px]"
                  >
                    {/* Image */}
                    <div className="flex w-[180px] h-[130px] bg-[#F9F1E7] rounded-[16px] relative">
                      <Image
                        className="w-full h-full object-cover absolute"
                        src={product.images[0]}
                        alt={product.name}
                        width={1000}
                        height={1000}
                      />
                    </div>

                    <div className="flex flex-col w-full gap-y-[8px]">
                      <h3 className="text-[18px] font-semibold">
                        {product.name}
                      </h3>
                      <div className="flex gap-x-[16px] text-[18px] items-center">
                        <span>{cart.stock[index]}</span>x
                        <span className="text-[16px] text-[#B88E2F] font-medium">
                          ${product.price}.00 USD
                        </span>
                      </div>
                    </div>

                    <div className="flex">
                      <button
                        className="p-[8px] bg-[#9F9F9F] rounded-full"
                        onClick={() => dispatch(removeFromCart(product.id))}
                      >
                        <IoClose className="text-[16px] text-white" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
              <div className="flex w-[450px] justify-between mb-[-16px] items-center font-medium">
                <p>Subtotal</p>
                <p className="text-[#B88E2F]">${subtotal}.00 USD</p>
              </div>
            </div>
            <div className="flex w-full border-t border-[#D9D9D9]" />
            <div className="flex w-full justify-center p-[20px] gap-x-[24px]">
              <button className="px-[16px] py-[8px] bg-[#B88E2F] text-white rounded-[8px]">
                Pagar
              </button>
              <button className="px-[16px] py-[8px] border rounded-[8px]">
                Comparar
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
