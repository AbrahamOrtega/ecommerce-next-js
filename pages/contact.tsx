import Navbar from "@/components/Navbar";
import BannerPage from "@/components/BannerPage";
import { MdPlace } from "react-icons/md";
import { FaPhone } from "react-icons/fa6";
import { MdAccessTimeFilled } from "react-icons/md";
import FooterBanner from "@/components/FooterBanner";
import Footer from "@/components/Footer";

export default function Contact() {
  return (
    <>
      <Navbar />
      <BannerPage title="Contacto" />
      <div className="flex flex-col mb-[32px] px-[24px] gap-y-[32px] lg:gap-y-[64px] mt-[16px] lg:mt-[32px] lg:py-[40px] lg:px-[80px]">
        <div className="flex w-full flex-col items-center gap-y-[16px]">
          <h2 className="text-[32px] font-semibold">Contáctenos</h2>
          <p className="text-[#9F9F9F]">
            Si tienes alguna pregunta o comentario, no dudes en contactarnos.
          </p>
        </div>
        <div className="flex lg:flex-row flex-col gap-y-[40px] w-full p-[32px] lg:p-[64px]">
          <div className="flex flex-col lg:w-1/2 gap-y-[32px] lg:px-[120px]">
            <div className="flex gap-x-[24px]">
              <MdPlace className="text-[32px]" />
              <div className="flex flex-col">
                <h3 className="text-[24px] font-semibold">Dirección</h3>
                <p>Calle 123, Ciudad, País</p>
              </div>
            </div>
            <div className="flex gap-x-[24px]">
              <FaPhone className="text-[24px]" />
              <div className="flex flex-col">
                <h3 className="text-[24px] font-semibold">Telefono</h3>
                <p>Movil: +(xx) xxx-xxxx</p>
                <p>Oficina: +(xx) xxx-xxxx</p>
              </div>
            </div>
            <div className="flex gap-x-[24px]">
              <MdAccessTimeFilled className="text-[26px]" />
              <div className="flex flex-col">
                <h3 className="text-[24px] font-semibold">Horario</h3>
                <p>Lunes - Viernes: 9:00 - 22:00</p>
                <p>Sabado - Domingo: 9:00 - 20:00</p>
              </div>
            </div>
          </div>
          <div className="flex flex-col lg:w-1/2 gap-y-[32px] lg:px-[120px]">
            <div className="flex flex-col gap-y-[16px]">
              <label htmlFor="name" className="font-medium">
                Tu nombre
              </label>
              <input
                type="text"
                id="name"
                placeholder="Nombre"
                className="border border-[#9F9F9F] w-full p-[16px] rounded-[8px]"
              />
            </div>
            <div className="flex flex-col gap-y-[16px]">
              <label htmlFor="email" className="font-medium">
                Tu correo electrónico
              </label>
              <input
                type="email"
                id="email"
                placeholder="Correo electrónico"
                className="border border-[#9F9F9F] w-full p-[16px] rounded-[8px]"
              />
            </div>
            <div className="flex flex-col gap-y-[16px]">
              <label htmlFor="subject" className="font-medium">
                Asunto
              </label>
              <input
                type="text"
                id="subject"
                placeholder="Opcional"
                className="border border-[#9F9F9F] w-full p-[16px] rounded-[8px]"
              />
            </div>
            <div className="flex flex-col gap-y-[16px]">
              <label htmlFor="message" className="font-medium">
                Mensaje
              </label>
              <textarea
                id="message"
                placeholder="Comentario"
                className="border border-[#9F9F9F] w-full h-[140px] p-[16px] rounded-[8px]"
              />
            </div>
            <button className="w-fit bg-[#B88E2F] text-white px-[64px] py-[16px] rounded-[8px] font-medium">
              Enviar
            </button>
          </div>
        </div>
      </div>
      <FooterBanner />
      <Footer />
    </>
  );
}
