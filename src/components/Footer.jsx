import { Instagram } from "lucide-react";
import { Link } from "react-router-dom";

function Footer({ onScroll, refs }) {
  return (
    <div className="w-full bg-[#000547] text-white flex flex-col py-3">
      <div className="p-3 pt-5 gap-5 flex flex-col lg:flex-row lg:p-8 justify-center lg:gap-20 2xl:gap-40">
        <div className="flex flex-col gap-4 md:px-15 lg:px-30 xl:px-40 2xl:px-50">
          <div className="flex gap-3 flex-col">
            <div className="flex flex-row gap-2">
              <div className="border-b-1 border-b-gray-500 w-full pb-6 pl-8">
                <p className="font-bold text-lg">BM IMPORTS</p>
              </div>
            </div>
          </div>
          <div className="flex max-md:flex-col md:flex-row gap-10 px-4">
            <div className="flex flex-col gap-3 md:w-1/3">
              <p className="text-xl font-semibold">Endereço</p>
              <div>
                <p className="text-md text-gray-300">
                  Rua Joao Thomaz Pinto, 1570
                </p>
                <p className="text-md text-gray-300">Itajaí 88313-045, BR</p>
              </div>
              <p className="text-sm text-gray-100 cursor-pointer underline hover:text-gray-300">
                <a
                  href="mailto:comercial@bmimports.com.br"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  comercial@bmimports.com.br
                </a>
              </p>
            </div>
            <div className="flex flex-col gap-3 md:w-1/3">
              <p className="text-xl font-semibold">Loja física</p>
              <div>
                <p className="text-md text-gray-300">
                  R. Adolfo André, 497 - Estancia Parque de Atibaia
                </p>
                <p className="text-md text-gray-300">
                  Downtown, Atibaia - SP, 12940-280
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-4 md:w-1/3">
              <p className="text-xl font-semibold">Quem somos</p>
              <p className="text-md text-gray-300">
                <span className="font-bold">
                  {" "}
                  A BM Imports atua como Importadora e distribuidora de produtos
                  importados de vários seguimentos, entre eles:{" "}
                </span>
                Setor químico, Tubos Flexíveis, Eletrodos, Casa & Construção,
                Máquinas para obras, Motores, Fitness, Pet, entre outros.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-between px-5">
        <div className="flex flex-row gap-1 text-gray-300 mt-5">
          <p className="underline  hover:text-red-400 transition-all ease-in-out duration-100">
            <a href="#">Mapa do site</a>
          </p>
          <p className="underline hover:text-red-400 transition-all ease-in-out duration-100">
            <Link to="/policy">Política de Privacidade</Link>
          </p>
        </div>
        <div className="flex flex-row items-center gap-5">
          <p className="max-md:hidden">Siga-nos</p>
          <Instagram className="bg-blue-700 h-15 w-15 p-4 cursor-pointer" />
        </div>
      </div>
    </div>
  );
}

export default Footer;
