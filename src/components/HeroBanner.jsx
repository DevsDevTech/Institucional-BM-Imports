import image from "../assets/img/heroBanner.jfif";

function HeroBanner() {
  return (
    <div
      className="relative h-screen w-full bg-cover bg-center z-10 py-7"
      style={{ backgroundImage: `url(${image})` }}
    >
      <div className="absolute inset-0 bg-black/60"></div>
      <div className="relative z-10 flex h-full flex-col justify-around items-center text-center text-white p-4 md:p-8">
        <div className="max-w-3xl">
          <h1 className="text-3xl md:text-4xl lg:text-4xl font-semibold">
            BMImports - Importadora & Distribuidora
          </h1>
          <p className="mt-4 text-lg text-gray-300 md:text-xl lg:text-2xl">
            Excelência em importação e distribuição de produtos para todo o
            Brasil.
          </p>
          <p className="mt-4 text-lg text-gray-300 md:text-xl lg:text-2xl">
            Conheça nossos segmentos de atuação e descubra soluções sob medida
            para o seu negócio.
          </p>
        </div>
      </div>
    </div>
  );
}

export default HeroBanner;
