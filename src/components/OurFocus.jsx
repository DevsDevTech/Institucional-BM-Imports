import { Headset, ShoppingCart, DollarSign } from "lucide-react";

function OurFocus() {
  return (
    <div className="flex flex-col xl:justify-center text-[#00003d] bg-white py-40 xl:items-center overflow-auto max-lg:gap-2 lg:gap-6">
      <div className="flex flex-col gap-2 max-md:px-4 md:px-10 lg:px-15 xl:px-22 2xl:px-32">
        <p className="flex items-center justify-center font-bold max-lg:text-3xl lg:text-4xl">
          Nossa missão
        </p>
        <p className="flex items-center justify-center text-center font-semibold text-xl lg:text-2xl">
          Nosso propósito é entregar valor e confiança.
        </p>
        <p className="flex max-md:text-justify md:text-center text-xl lg:text-2xl 2xl:px-40">
          Com um catálogo diversificado e clientes em todo o Brasil, seguimos em
          constante expansão, mantendo como pilares a qualidade, o
          profissionalismo e o respeito.
        </p>
      </div>
      <div className="flex xl:justify-center xl:items-center overflow-auto pb-3">
        <div
          className="flex flex-col justify-center items-center border-1 border-gray-200 
        rounded-lg p-6 bg-white w-[370px] hover:scale-101 hover:shadow-lg duration-300 mx-4 flex-shrink-0 shadow-md"
        >
          <DollarSign className="text-[#00003d] mb-2" size={64} />

          <p className="text-lg lg:text-xl font-semibold text-center lg:py-4">
            Garantimos os melhores preços e custo-benefício.
          </p>
        </div>
        <div
          className="flex flex-col justify-center items-center border-1 border-gray-200 
        rounded-lg w-[370px] p-6 hover:scale-101 hover:shadow-lg duration-300 bg-white mx-4 flex-shrink-0 shadow-md"
        >
          <ShoppingCart className="text-[#00003d] mb-2" size={64} />
          <p className="text-lg lg:text-xl font-semibold text-center lg:py-4">
            Proporcionamos uma experiência de compra eficiente e segura.
          </p>
        </div>
        <div
          className="flex flex-col justify-center items-center border-1 border-gray-200 
        rounded-lg w-[370px] p-6 hover:scale-101 hover:shadow-lg duration-300 bg-white mx-4 flex-shrink-0 shadow-md"
        >
          <Headset className="text-[#00003d] mb-2" size={64} />
          <p className="text-lg lg:text-xl font-semibold text-center">
            Mantemos um pós-venda diferenciado, oferecendo suporte próximo aos
            nossos clientes.
          </p>
        </div>
      </div>
    </div>
  );
}

export default OurFocus;
