import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t-2 border-[#D9D9D9] px-[36px] lg:px-[56px] gap-y-[36px]">
      <div className="grid grid-cols-1 gap-y-[48px] lg:grid-cols-3 w-full py-[64px]">
        <div className="flex flex-col gap-y-[24px] max-w-[500px] mr-[64px]">
          <h3 className="text-[32px] font-bold">Funiro.</h3>
          <p className="text-[16px] font-medium text-[#9F9F9F]">
            Funiro es una tienda de muebles en línea que ofrece una amplia
            variedad de muebles de calidad a precios asequibles.
          </p>
        </div>
        <div className="flex text-[16px] lg:text-[18px] font-medium">
          <div className="flex flex-col w-1/2 gap-y-[24px]">
            <p className="text-[#9F9F9F]">Enlaces</p>
            <Link href="">Inicio</Link>
            <Link href="">Comprar</Link>
            <Link href="">Acerca de</Link>
            <Link href="">Contacto</Link>
          </div>
          <div className="flex flex-col w-1/2 gap-y-[24px]">
            <p className="text-[#9F9F9F]">Ayuda</p>
            <Link href="">Opciones de pago</Link>
            <Link href="">Retornos</Link>
            <Link href="">Politicas de privacidad</Link>
          </div>
        </div>
        <div className="flex flex-col gap-y-[64px]">
          <p className="text-[16px] lg:text-[18px] font-medium text-[#9F9F9F]">
            Newsletter
          </p>
          <div className="flex gap-x-[16px]">
            <input
              className="border-b-2 border-[#D9D9D9] outline-none"
              placeholder="Tu correo"
            />
            <button className="border-b-2 border-[#D9D9D9] font-medium hover:border-black">
              Suscribirse
            </button>
          </div>
        </div>
      </div>
      <div className="flex w-full border-t-2 border-[#D9D9D9] py-[32px]">
        <p className="text-[12px] lg:text-[16px] font-medium text-[#9F9F9F]">
          © 2024 Funiro. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
}
