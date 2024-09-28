import { GoTrophy } from "react-icons/go";
import { BsPatchCheck } from "react-icons/bs";
import { MdOutlineLocalShipping } from "react-icons/md";
import { MdSupportAgent } from "react-icons/md";

export default function FooterBanner() {
  return (
    <>
      <div className="flex justify-between bg-[#FAF3EA] px-[64px] py-[64px] flex-wrap gap-[24px] items-center">
        <div className="flex items-center gap-x-[16px]">
          <GoTrophy className="text-[64px]" />
          <div className="flex flex-col">
            <span className="text-[20px] font-semibold">Alta Calidad</span>
            <span className="text-[#898989] font-medium">
              Hecho con los mejores materiales
            </span>
          </div>
        </div>
        <div className="flex items-center gap-x-[16px]">
          <BsPatchCheck className="text-[64px]" />
          <div className="flex flex-col">
            <span className="text-[20px] font-semibold">Garantia</span>
            <span className="text-[#898989] font-medium">Mas de 2 años</span>
          </div>
        </div>
        <div className="flex items-center gap-x-[16px]">
          <MdOutlineLocalShipping className="text-[64px]" />
          <div className="flex flex-col">
            <span className="text-[20px] font-semibold">Envio Gratis</span>
            <span className="text-[#898989] font-medium">
              Pedidos mayores a $150
            </span>
          </div>
        </div>
        <div className="flex items-center gap-x-[16px]">
          <MdSupportAgent className="text-[64px]" />
          <div className="flex flex-col">
            <span className="text-[20px] font-semibold">Soporte 24/7</span>
            <span className="text-[#898989] font-medium">
              Siempre listos para ayudarte
            </span>
          </div>
        </div>
      </div>
    </>
  );
}
