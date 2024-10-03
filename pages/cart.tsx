import BannerPage from "@/components/BannerPage";
import Navbar from "../components/Navbar";
import { useAppSelector } from "@/store";
import { useAppDispatch } from "@/store";
import { removeFromCart } from "@/features/cartSlice";
import Image from "next/image";
import { MdDelete } from "react-icons/md";
import FooterBanner from "@/components/FooterBanner";
import Footer from "@/components/Footer";

export default function Cart() {
  const cart = useAppSelector((state) => state.cart);
  const dispatch = useAppDispatch();
  console.log(cart);

  // Subtotal
  const subtotal = cart.products.reduce((acc, product, index) => {
    return acc + product.price * cart.stock[index];
  }, 0);
  return (
    <>
      <Navbar />
      <BannerPage title="Cart" />
      <div className="flex flex-col mb-[56px] lg:mb-[64px] px-[24px] gap-y-[32px] lg:gap-y-[64px] mt-[16px] lg:mt-[32px] lg:py-[40px] lg:px-[80px] justify-start items-center">
        <div className="flex flex-col lg:flex-row w-full gap-x-[32px] gap-y-[32px]">
          {/* Table items desktop */}
          <table className="hidden lg:flex flex-col w-full">
            <thead className="w-full bg-[#F9F1E7]">
              <tr className="flex w-full text-left">
                <th className="w-2/12 p-[16px] "></th>
                <th className="w-2/12 p-[16px]">Producto</th>
                <th className="w-3/12 p-[16px]">Precio</th>
                <th className="w-1/12 p-[16px]">Cantidad</th>
                <th className="w-3/12 p-[16px]">Subtotal</th>
                <th className="w-1/12 p-[16px]"></th>
              </tr>
            </thead>
            <tbody className="w-full gap-y-[24px] mt-[24px]">
              {/* Cart Items */}
              {cart.products.map((product, index) => (
                <tr
                  key={product.id}
                  className="flex w-full items-center text-left"
                >
                  <th className="flex w-2/12 lg:p-[16px] justify-center">
                    <div className="flex w-[100px] h-[100px] bg-[#F9F1E7] rounded-[16px] relative">
                      <Image
                        className="w-full h-full object-cover absolute"
                        src={product.images[0]}
                        alt={product.name}
                        width={1000}
                        height={1000}
                      />
                    </div>
                  </th>
                  <th className="w-2/12 p-[16px]">{product.name}</th>
                  <th className="w-3/12 p-[16px]">${product.price}.00 USD</th>
                  <th className="flex w-1/12 p-[16px] justify-center">
                    <p className="border px-[6px] rounded-[4px]">
                      {cart.stock[index]}
                    </p>
                  </th>
                  <th className="w-3/12 p-[16px]">
                    ${product.price * cart.stock[index]}.00 USD
                  </th>
                  <th className="flex w-1/12 p-[16px]">
                    <button
                      onClick={() => dispatch(removeFromCart(product.id))}
                      className="flex w-full h-full justify-center"
                    >
                      <MdDelete className="text-[24px] text-[#B88E2F]" />
                    </button>
                  </th>
                </tr>
              ))}
            </tbody>
          </table>
          {/* Table items mobile */}
          <div className="flex lg:hidden flex-col">
            <div className="flex w-full flex-col gap-y-[16px]">
              {cart.products.map((product, index) => (
                <div key={product.id} className="flex flex-col gap-y-[16px]">
                  <div className="flex w-full items-center gap-x-[16px]">
                    {/* Image */}
                    <div className="flex w-[160px] h-[90px] md:w-[180px] md:h-[130px] bg-[#F9F1E7] rounded-[16px] relative">
                      <Image
                        className="w-full h-full object-cover absolute"
                        src={product.images[0]}
                        alt={product.name}
                        width={1000}
                        height={1000}
                      />
                    </div>

                    <div className="flex flex-col w-full gap-y-[8px]">
                      <h3 className="text-[16px] md:text-[18px] font-semibold">
                        {product.name}
                      </h3>
                      <div className="flex gap-x-[16px] text-[16px] md:text-[18px] items-center">
                        <span>{cart.stock[index]}</span>x
                        <span className="text-[14px] md:text-[16px] text-[#B88E2F] font-medium">
                          ${product.price}.00 USD
                        </span>
                      </div>
                    </div>

                    <div className="flex">
                      <button
                        className="flex w-full h-full justify-center"
                        onClick={() => dispatch(removeFromCart(product.id))}
                      >
                        <MdDelete className="text-[24px] text-[#B88E2F]" />
                      </button>
                    </div>
                  </div>
                  <div className="flex w-[80%] justify-between items-center font-medium">
                    <p>Subtotal</p>
                    <p className="text-[#B88E2F]">
                      ${product.price * cart.stock[index]}.00 USD
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          {/* Cart Total */}
          <div className="flex flex-col py-[40px] px-[64px] gap-y-[24px] bg-[#F9F1E7] items-center justify-center">
            <h3 className="text-[28px] font-semibold">Carrito Total</h3>
            <div className="flex w-[200px] justify-between text-[16px] font-medium">
              <p>Subtotal</p>
              <p className="font-normal text-[#9F9F9F]">${subtotal}.00 USD</p>
            </div>
            <div className="flex w-[200px] justify-between text-[16px] font-medium">
              <p>Total</p>
              <p className="text-[#B88E2F]">${subtotal}.00 USD</p>
            </div>
            <button className="px-[16px] py-[8px] mt-[32px] bg-[#B88E2F] text-white rounded-[8px]">
              Pagar
            </button>
          </div>
        </div>
      </div>
      <FooterBanner />
      <Footer />
    </>
  );
}
