import BannerPage from "@/components/BannerPage";
import Navbar from "@/components/Navbar";
import { useState } from "react";
import { useAppSelector } from "@/store";
import FooterBanner from "@/components/FooterBanner";
import Footer from "@/components/Footer";

export default function Checkout() {
  const [name, setName] = useState("");
  const [lastname, setLastname] = useState("");
  const [company, setCompany] = useState("");
  const [country, setCountry] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("cash");

  const cart = useAppSelector((state) => state.cart);

  const subtotal = cart.products.reduce((acc, product, index) => {
    return acc + product.price * cart.stock[index];
  }, 0);

  return (
    <>
      <Navbar />
      <BannerPage title="Pagar" />
      <div className="flex flex-col mb-[56px] lg:mb-[64px] px-[24px] gap-y-[32px] lg:gap-y-[64px] mt-[16px] lg:mt-[32px] lg:py-[40px] lg:px-[80px]">
        <div className="flex flex-col gap-y-[24px] mt-[24px] lg:mt-0">
          <div className="flex flex-col lg:flex-row gap-x-[32px]">
            <div className="flex flex-col w-full lg:w-1/2 gap-y-[32px] lg:px-[64px]">
              <h3 className="text-[28px] font-semibold">
                Detalles de Facturación
              </h3>
              <div className="flex gap-x-[32px]">
                <div className="flex flex-col w-1/2 font-medium gap-y-[16px]">
                  <label htmlFor="name">Nombre</label>
                  <input
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    type="text"
                    id="name"
                    className="border border-[#9F9F9F] w-full p-[8px] rounded-[8px]"
                  />
                </div>
                <div className="flex flex-col w-1/2 font-medium gap-y-[16px]">
                  <label htmlFor="name">Apellido</label>
                  <input
                    value={lastname}
                    onChange={(e) => setLastname(e.target.value)}
                    type="text"
                    id="name"
                    className="border border-[#9F9F9F] w-full p-[8px] rounded-[8px]"
                  />
                </div>
              </div>
              <div className="flex flex-col font-medium gap-y-[16px]">
                <label htmlFor="company">
                  Nombre de la Compañia {"(Opcional)"}
                </label>
                <input
                  value={company}
                  onChange={(e) => setCompany(e.target.value)}
                  type="text"
                  id="company"
                  className="border border-[#9F9F9F] w-full p-[8px] rounded-[8px]"
                />
              </div>
              <div className="flex flex-col font-medium gap-y-[16px]">
                <label htmlFor="country">País / Región</label>
                <input
                  value={country}
                  onChange={(e) => setCountry(e.target.value)}
                  type="text"
                  id="country"
                  className="border border-[#9F9F9F] w-full p-[8px] rounded-[8px]"
                />
              </div>
              <div className="flex flex-col font-medium gap-y-[16px]">
                <label htmlFor="address">Dirección</label>
                <input
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  type="text"
                  id="address"
                  className="border border-[#9F9F9F] w-full p-[8px] rounded-[8px]"
                />
              </div>
              <div className="flex flex-col font-medium gap-y-[16px]">
                <label htmlFor="city">Ciudad</label>
                <input
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                  type="text"
                  id="city"
                  className="border border-[#9F9F9F] w-full p-[8px] rounded-[8px]"
                />
              </div>
              <div className="flex flex-col font-medium gap-y-[16px]">
                <label htmlFor="postalCode">Codigo Postal</label>
                <input
                  value={postalCode}
                  onChange={(e) => setPostalCode(e.target.value)}
                  type="text"
                  id="postalCode"
                  className="border border-[#9F9F9F] w-full p-[8px] rounded-[8px]"
                />
              </div>
              <div className="flex flex-col font-medium gap-y-[16px]">
                <label htmlFor="phone">Teléfono</label>
                <input
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  type="text"
                  id="phone"
                  className="border border-[#9F9F9F] w-full p-[8px] rounded-[8px]"
                />
              </div>
              <div className="flex flex-col font-medium gap-y-[16px]">
                <label htmlFor="email">Correo Electrónico</label>
                <input
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  type="email"
                  id="email"
                  className="border border-[#9F9F9F] w-full p-[8px] rounded-[8px]"
                />
              </div>
            </div>
            <div className="flex flex-col w-full lg:w-1/2 gap-y-[24px] lg:px-[64px] mt-[48px] lg:mt-[32px]">
              <div className="flex justify-between">
                <h4 className="text-[22px] font-semibold">Producto</h4>
                <h4 className="text-[22px] font-semibold">Subtotal</h4>
              </div>
              <div className="flex flex-col gap-y-[16px]">
                {cart.products.map((product, index) => (
                  <div key={product.id} className="flex justify-between">
                    <h5 className="flex gap-x-[8px] text-[16px] text-[#9F9F9F] font-medium">
                      {product.name}{" "}
                      <p className="text-black">x {cart.stock[index]}</p>
                    </h5>
                    <h5 className="text-[16px] font-medium">
                      ${product.price * cart.stock[index]}.00 USD
                    </h5>
                  </div>
                ))}
                <div className="flex justify-between">
                  <h5 className="text-[16px] font-medium">Subtotal</h5>
                  <h5 className="text-[16px] font-medium">
                    ${subtotal}.00 USD
                  </h5>
                </div>
                <div className="flex justify-between items-center">
                  <h5 className="text-[16px] font-medium">Total</h5>
                  <h5 className="text-[20px] text-[#B88E2F] font-bold">
                    ${subtotal}.00 USD
                  </h5>
                </div>
                <div className="flex border mt-[16px]" />
                <div className="flex flex-col mt-[16px] gap-y-[24px]">
                  <div className="flex flex-col gap-y-[16px]">
                    <button
                      className={`flex gap-x-[16px] ${
                        paymentMethod !== "transfer" && "text-[#9F9F9F]"
                      }`}
                      onClick={() => setPaymentMethod("transfer")}
                    >
                      <div
                        className={`${
                          paymentMethod === "transfer" && "bg-black"
                        } border rounded-full p-[12px]`}
                      ></div>
                      <h5 className="text-[16px] font-medium">
                        Transferencia Bancaria
                      </h5>
                    </button>
                    <p className="text-[#9F9F9F]">
                      Make your payment directly into our bank account. Please
                      use your Order ID as the payment reference. Your order
                      will not be shipped until the funds have cleared in our
                      account.
                    </p>
                  </div>
                  <button
                    className={`flex gap-x-[16px] ${
                      paymentMethod !== "cash" && "text-[#9F9F9F]"
                    }`}
                    onClick={() => setPaymentMethod("cash")}
                  >
                    <div
                      className={`${
                        paymentMethod === "cash" && "bg-black"
                      } border rounded-full p-[12px]`}
                    ></div>
                    <h5 className="text-[16px] font-medium">Efectivo</h5>
                  </button>
                  <p>
                    Your personal data will be used to support your experience
                    throughout this website, to manage access to your account,
                    and for other purposes described in our{" "}
                    <span className="font-bold">privacy policy.</span>
                  </p>
                  <div className="flex w-full justify-center mt-[24px]">
                    <button className="py-[16px] px-[32px] border rounded-[16px] text-[18px] font-semibold">
                      Finalizar compra
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <FooterBanner />
      <Footer />
    </>
  );
}
