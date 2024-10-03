import BannerPage from "@/components/BannerPage";
import Navbar from "@/components/Navbar";
import Link from "next/link";
import Image from "next/image";
import ProductComparisonModel from "@/interfaces/ProductComparisonModel";
import { FaStar, FaRegStar } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";
import FooterBanner from "@/components/FooterBanner";
import Footer from "@/components/Footer";

const product1: ProductComparisonModel = {
  id: 1,
  name: "Syltherine",
  image: "/product-example/asgaard-sofa-3.png",
  price: 250,
  raiting: 4,
  reviews: 20,
  salesPackage: "1 chair",
  modelNumber: "12345A6",
  secondaryMaterial: "Wood",
  configuration: "Chair",
  upholsteryMaterial: "Leather",
  upholsteryColor: "Black",
  fillingMaterial: "Foam",
  finishType: "Glossy",
  adjustableHeardrest: "Sí",
  maxLoadCapacity: 200,
  originManufacture: "India",
  with: 50,
  height: 50,
  depth: 50,
  weight: 50,
  seatHeight: 50,
  legHeight: 50,
  warrantySummary: "1 year warranty",
  warrantyServiceType: "Repair",
  coveredInWarranty: "Manufacturing defects",
  notCoveredInWarranty: "Physical damage",
  domesticWarranty: "1 year",
};

const product2: ProductComparisonModel = {
  id: 2,
  name: "Leviosa",
  image: "/product-example/outdoor-sofa-set-1.png",
  price: 250,
  raiting: 4,
  reviews: 20,
  salesPackage: "1 chair",
  modelNumber: "123456A",
  secondaryMaterial: "Wood",
  configuration: "Chair",
  upholsteryMaterial: "Leather",
  upholsteryColor: "Black",
  fillingMaterial: "Foam",
  finishType: "Glossy",
  adjustableHeardrest: "No",
  maxLoadCapacity: 200,
  originManufacture: "India",
  with: 50,
  height: 50,
  depth: 50,
  weight: 50,
  seatHeight: 50,
  legHeight: 50,
  warrantySummary: "1 year warranty",
  warrantyServiceType: "Repair",
  coveredInWarranty: "Manufacturing defects",
  notCoveredInWarranty: "Physical damage",
  domesticWarranty: "1 year",
};

const details = [
  {
    title: "Paquete de Venta",
    data: [product1.salesPackage, product2.salesPackage],
  },
  {
    title: "Número de Modelo",
    data: [product1.modelNumber, product2.modelNumber],
  },
  {
    title: "Material Secundario",
    data: [product1.secondaryMaterial, product2.secondaryMaterial],
  },
  {
    title: "Configuración",
    data: [product1.configuration, product2.configuration],
  },
  {
    title: "Material de Tapicería",
    data: [product1.upholsteryMaterial, product2.upholsteryMaterial],
  },
  {
    title: "Color de Tapicería",
    data: [product1.upholsteryColor, product2.upholsteryColor],
  },
  {
    title: "Material de Relleno",
    data: [product1.fillingMaterial, product2.fillingMaterial],
  },
  {
    title: "Tipo de Acabado",
    data: [product1.finishType, product2.finishType],
  },
  {
    title: "Reposacabezas Ajustable",
    data: [product1.adjustableHeardrest, product2.adjustableHeardrest],
  },
  {
    title: "Capacidad Máxima de Carga",
    data: [product1.maxLoadCapacity, product2.maxLoadCapacity],
  },
  {
    title: "Origen de Fabricación",
    data: [product1.originManufacture, product2.originManufacture],
  },
  { title: "Ancho", data: [product1.with, product2.with] },
  { title: "Altura", data: [product1.height, product2.height] },
  { title: "Profundidad", data: [product1.depth, product2.depth] },
  { title: "Peso", data: [product1.weight, product2.weight] },
  {
    title: "Altura del Asiento",
    data: [product1.seatHeight, product2.seatHeight],
  },
  {
    title: "Altura de la Pata",
    data: [product1.legHeight, product2.legHeight],
  },
  {
    title: "Resumen de Garantía",
    data: [product1.warrantySummary, product2.warrantySummary],
  },
  {
    title: "Tipo de Servicio de Garantía",
    data: [product1.warrantyServiceType, product2.warrantyServiceType],
  },
  {
    title: "Cubierto en Garantía",
    data: [product1.coveredInWarranty, product2.coveredInWarranty],
  },
  {
    title: "No Cubierto en Garantía",
    data: [product1.notCoveredInWarranty, product2.notCoveredInWarranty],
  },
  {
    title: "Garantía Nacional",
    data: [product1.domesticWarranty, product2.domesticWarranty],
  },
];

const products = [product1, product2];

export default function Comparison() {
  return (
    <>
      <Navbar />
      <BannerPage title="Comparar" />
      <div className="flex flex-col mb-[32px] lg:mb-[64px] px-[24px] gap-y-[32px] lg:gap-y-[64px] mt-[16px] lg:mt-[32px] lg:py-[40px] lg:px-[80px] justify-start items-center">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-[16px] lg:gap-x-[72px] lg:px-[32px]">
          <div className="hidden lg:flex flex-col lg:gap-y-[24px]">
            <h4 className="text-[28px] font-medium">
              Ir a la pagina de productos para más productos
            </h4>
            <Link
              className="flex w-fit text-[20px] text-[#727272] font-medium border-b-[2px] border-[#727272] opacity-70 hover:opacity-100"
              href="/shop"
            >
              Ver más
            </Link>
          </div>
          {products.map((product) => (
            <div key={product.id} className="flex flex-col gap-y-[32px]">
              <div className="flex w-full h-[280px] bg-[#F9F1E7] rounded-[16px] relative">
                <Image
                  className="absolute w-full h-full object-cover"
                  src={product.image}
                  alt=""
                  width={1000}
                  height={1000}
                />
              </div>
              <div className="flex flex-col gap-y-[12px] font-medium">
                <h4 className="text-[24px]">{product.name}</h4>
                <p className="text-[18px]">${product.price}.00 USD</p>
                {/* Raiting */}
                <div className="flex items-center gap-x-[8px] lg:gap-x-[10px]">
                  <span>{product.raiting}</span>
                  <span className="flex">
                    {Array.from({ length: 5 }, (_, i) => (
                      <div
                        key={i}
                        className="text-yellow-400 text-[16px] lg:text-[20px]"
                      >
                        {i + 1 <= product.raiting ? <FaStar /> : <FaRegStar />}
                      </div>
                    ))}
                  </span>
                  <div className="hidden lg:flex w-[1px] h-[24px] bg-[#9F9F9F]" />
                  <span className="text-[12px] lg:text-[18px] font-medium text-[#9F9F9F]">
                    {product.reviews} reviews
                  </span>
                </div>
              </div>
            </div>
          ))}
          {/* Add product */}
          <div className="hidden md:flex flex-col w-full h-full pt-[64px] gap-y-[32px]">
            <h3 className="text-[24px] font-semibold">Agrega un producto</h3>
            <button className="flex w-fit p-[24px] bg-[#B88E2F] font-semibold text-white rounded-[16px] gap-x-[64px] items-center">
              <span>Escoge un producto</span>
              <IoIosArrowDown className="text-[24px]" />
            </button>
          </div>
        </div>
        {/* Table Desktop */}
        <div className="hidden lg:flex w-full mt-[32px]">
          <table className="w-full border-t px-[32px] border-collapse text-[16px]">
            <thead>
              <tr className="flex w-full">
                <th className="flex w-1/4 pt-[40px] border-r p-[16px]">
                  General
                </th>
                <th className="flex w-1/4 border-r p-[16px]"></th>
                <th className="flex w-1/4 border-r p-[16px]"></th>
                <th className="flex w-1/4 p-[16px]"></th>
              </tr>
            </thead>
            <tbody>
              {Array.from({ length: 6 }, (_, i) => (
                <tr key={i} className="flex w-full">
                  <td className="flex w-1/4 border-r p-[16px]">
                    {details[i].title}
                  </td>
                  <td className="flex w-1/4 border-r p-[16px]">
                    {details[i].data[0]}
                  </td>
                  <td className="flex w-1/4 border-r p-[16px]">
                    {details[i].data[1]}
                  </td>
                  <td className="flex w-1/4 p-[16px]"></td>
                </tr>
              ))}
              <tr className="flex w-full">
                <th className="flex w-1/4 pt-[40px] border-r p-[16px]">
                  Producto
                </th>
                <th className="flex w-1/4 border-r p-[16px]"></th>
                <th className="flex w-1/4 border-r p-[16px]"></th>
                <th className="flex w-1/4 p-[16px]"></th>
              </tr>

              {Array.from({ length: 5 }, (_, i) => (
                <tr key={i} className="flex w-full">
                  <td className="flex w-1/4 border-r p-[16px]">
                    {details[i + 6].title}
                  </td>
                  <td className="flex w-1/4 border-r p-[16px]">
                    {details[i + 6].data[0]}
                  </td>
                  <td className="flex w-1/4 border-r p-[16px]">
                    {details[i + 6].data[1]}
                  </td>
                  <td className="flex w-1/4 p-[16px]"></td>
                </tr>
              ))}
              <tr className="flex w-full">
                <th className="flex w-1/4 pt-[40px] border-r p-[16px]">
                  Dimensiones
                </th>
                <th className="flex w-1/4 border-r p-[16px]"></th>
                <th className="flex w-1/4 border-r p-[16px]"></th>
                <th className="flex w-1/4 p-[16px]"></th>
              </tr>
              {Array.from({ length: 6 }, (_, i) => (
                <tr key={i} className="flex w-full">
                  <td className="flex w-1/4 border-r p-[16px]">
                    {details[i + 11].title}
                  </td>
                  <td className="flex w-1/4 border-r p-[16px]">
                    {details[i + 11].data[0]}
                  </td>
                  <td className="flex w-1/4 border-r p-[16px]">
                    {details[i + 11].data[1]}
                  </td>
                  <td className="flex w-1/4 p-[16px]"></td>
                </tr>
              ))}
              <tr className="flex w-full">
                <th className="flex w-1/4 pt-[40px] border-r p-[16px]">
                  Garantia
                </th>
                <th className="flex w-1/4 border-r p-[16px]"></th>
                <th className="flex w-1/4 border-r p-[16px]"></th>
                <th className="flex w-1/4 p-[16px]"></th>
              </tr>
              {Array.from({ length: 5 }, (_, i) => (
                <tr key={i} className="flex w-full">
                  <td className="flex w-1/4 border-r p-[16px]">
                    {details[i + 17].title}
                  </td>
                  <td className="flex w-1/4 border-r p-[16px]">
                    {details[i + 17].data[0]}
                  </td>
                  <td className="flex w-1/4 border-r p-[16px]">
                    {details[i + 17].data[1]}
                  </td>
                  <td className="flex w-1/4 p-[16px]"></td>
                </tr>
              ))}
              <tr className="flex w-full">
                <th className="flex w-1/4 pt-[40px] border-r p-[16px]"></th>
                <th className="flex w-1/4 border-r p-[16px]">
                  <button className="px-[24px] py-[16px] bg-[#B88E2F] text-white font-normal">
                    Agregar al carrito
                  </button>
                </th>
                <th className="flex w-1/4 border-r p-[16px]">
                  <button className="px-[24px] py-[16px] bg-[#B88E2F] text-white font-normal">
                    Agregar al carrito
                  </button>
                </th>
                <th className="flex w-1/4 p-[16px]"></th>
              </tr>
            </tbody>
          </table>
        </div>
        {/* Table Mobile md*/}
        <div className="hidden md:flex lg:hidden w-full">
          <table className="w-full border-t px-[32px] border-collapse text-[16px]">
            <thead>
              <tr className="flex w-full">
                <th className="flex w-1/3 pt-[40px] border-r p-[16px]">
                  General
                </th>
                <th className="flex w-1/3 border-r p-[16px]"></th>
                <th className="flex w-1/3 p-[16px]"></th>
              </tr>
            </thead>
            <tbody>
              {Array.from({ length: 6 }, (_, i) => (
                <tr key={i} className="flex w-full">
                  <td className="flex flex-col w-1/3 border-r p-[16px]">
                    <p className="text-[#727272]">{details[i].title}</p>
                    <p>{details[i].data[0]}</p>
                  </td>
                  <td className="flex w-1/3 border-r p-[16px]">
                    {details[i].data[1]}
                  </td>
                  <td className="flex w-1/3 p-[16px]"></td>
                </tr>
              ))}
              <tr className="flex w-full">
                <th className="flex w-1/3 pt-[40px] border-r p-[16px]">
                  Producto
                </th>
                <th className="flex w-1/3 border-r p-[16px]"></th>
                <th className="flex w-1/3 p-[16px]"></th>
              </tr>
              {Array.from({ length: 5 }, (_, i) => (
                <tr key={i} className="flex w-full">
                  <td className="flex flex-col w-1/3 border-r p-[16px]">
                    <p className="text-[#727272]">{details[i + 6].title}</p>
                    <p>{details[i + 6].data[0]}</p>
                  </td>
                  <td className="flex w-1/3 border-r p-[16px]">
                    {details[i + 6].data[1]}
                  </td>
                  <td className="flex w-1/3 p-[16px]"></td>
                </tr>
              ))}
              <tr className="flex w-full">
                <th className="flex w-1/3 pt-[40px] border-r p-[16px]">
                  Dimensiones
                </th>
                <th className="flex w-1/3 border-r p-[16px]"></th>
                <th className="flex w-1/3 p-[16px]"></th>
              </tr>
              {Array.from({ length: 6 }, (_, i) => (
                <tr key={i} className="flex w-full">
                  <td className="flex flex-col w-1/3 border-r p-[16px]">
                    <p className="text-[#727272]">{details[i + 11].title}</p>
                    <p>{details[i + 11].data[0]}</p>
                  </td>
                  <td className="flex w-1/3 border-r p-[16px]">
                    {details[i + 11].data[1]}
                  </td>
                  <td className="flex w-1/3 p-[16px]"></td>
                </tr>
              ))}
              <tr className="flex w-full">
                <th className="flex w-1/3 pt-[40px] border-r p-[16px]">
                  Garantia
                </th>
                <th className="flex w-1/3 border-r p-[16px]"></th>
                <th className="flex w-1/3 p-[16px]"></th>
              </tr>
              {Array.from({ length: 5 }, (_, i) => (
                <tr key={i} className="flex w-full">
                  <td className="flex flex-col w-1/3 border-r p-[16px]">
                    <p className="text-[#727272]">{details[i + 17].title}</p>
                    <p>{details[i + 17].data[0]}</p>
                  </td>
                  <td className="flex w-1/3 border-r p-[16px]">
                    {details[i + 17].data[1]}
                  </td>
                  <td className="flex w-1/3 p-[16px]"></td>
                </tr>
              ))}
              <tr className="flex w-full">
                <th className="flex w-1/3 border-r p-[16px]">
                  <button className="px-[24px] py-[16px] bg-[#B88E2F] text-white font-normal">
                    Agregar al carrito
                  </button>
                </th>
                <th className="flex w-1/3 border-r p-[16px]">
                  <button className="px-[24px] py-[16px] bg-[#B88E2F] text-white font-normal">
                    Agregar al carrito
                  </button>
                </th>
                <th className="flex w-1/3 p-[16px]"></th>
              </tr>
            </tbody>
          </table>
        </div>
        {/* Table Mobile sm*/}
        <div className="flex md:hidden w-full">
          <table className="w-full border-t px-[32px] border-collapse text-[16px]">
            <thead>
              <tr className="flex w-full">
                <th className="flex w-1/2 pt-[40px] border-r p-[16px]">
                  General
                </th>
                <th className="flex w-1/2 p-[16px]"></th>
              </tr>
            </thead>
            <tbody>
              {Array.from({ length: 6 }, (_, i) => (
                <tr key={i} className="flex w-full">
                  <td className="flex flex-col w-1/2 border-r p-[16px]">
                    <p className="text-[#727272]">{details[i].title}</p>
                    <p>{details[i].data[0]}</p>
                  </td>
                  <td className="flex w-1/2 p-[16px]">{details[i].data[1]}</td>
                </tr>
              ))}
              <tr className="flex w-full">
                <th className="flex w-1/2 pt-[40px] border-r p-[16px]">
                  Producto
                </th>
                <th className="flex w-1/2 p-[16px]"></th>
              </tr>
              {Array.from({ length: 5 }, (_, i) => (
                <tr key={i} className="flex w-full">
                  <td className="flex flex-col w-1/2 border-r p-[16px]">
                    <p className="text-[#727272]">{details[i + 6].title}</p>
                    <p>{details[i + 6].data[0]}</p>
                  </td>
                  <td className="flex w-1/2 p-[16px]">
                    {details[i + 6].data[1]}
                  </td>
                </tr>
              ))}
              <tr className="flex w-full">
                <th className="flex w-1/2 pt-[40px] border-r p-[16px]">
                  Dimensiones
                </th>
                <th className="flex w-1/2 p-[16px]"></th>
              </tr>
              {Array.from({ length: 6 }, (_, i) => (
                <tr key={i} className="flex w-full">
                  <td className="flex flex-col w-1/2 border-r p-[16px]">
                    <p className="text-[#727272]">{details[i + 11].title}</p>
                    <p>{details[i + 11].data[0]}</p>
                  </td>
                  <td className="flex w-1/2 p-[16px]">
                    {details[i + 11].data[1]}
                  </td>
                </tr>
              ))}
              <tr className="flex w-full">
                <th className="flex w-1/2 pt-[40px] border-r p-[16px]">
                  Garantia
                </th>
                <th className="flex w-1/2 p-[16px]"></th>
              </tr>
              {Array.from({ length: 5 }, (_, i) => (
                <tr key={i} className="flex w-full">
                  <td className="flex flex-col w-1/2 border-r p-[16px]">
                    <p className="text-[#727272]">{details[i + 17].title}</p>
                    <p>{details[i + 17].data[0]}</p>
                  </td>
                  <td className="flex w-1/2 p-[16px]">
                    {details[i + 17].data[1]}
                  </td>
                </tr>
              ))}
              <tr className="flex w-full">
                <th className="flex w-1/2 border-r p-[16px]">
                  <button className="px-[24px] py-[16px] bg-[#B88E2F] text-white font-normal">
                    Agregar al carrito
                  </button>
                </th>
                <th className="flex w-1/2 p-[16px]">
                  <button className="px-[24px] py-[16px] bg-[#B88E2F] text-white font-normal">
                    Agregar al carrito
                  </button>
                </th>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <FooterBanner />
      <Footer />
    </>
  );
}
