import image from "../assets/img/aboutUs2.jfif";

function AboutUs() {
  return (
    <div className="relative w-full bg-cover text-justify bg-center md:justify-center md:items-center rounded-lg lg:px-10 xl:px-30 2xl:px-50">
      <div className="flex-col flex max-sm:p-4 md:flex-row items-center sm:px-8">
        <div className="">
          <img src={image} alt="" className="relative md:-right-10" />
        </div>
        <div className="bg-white max-md:p-4 flex flex-col gap-4 relative md:-left-10 md:w-4/5 md:py-20 md:px-10 z-10 lg:py-[100px]">
          <h2 className="text-4xl font-bold text-[#00003d]">Quem somos</h2>
          <p className="max-lg:text-xl lg:text-2xl">
            A BMImports é uma importadora e distribuidora de produtos de
            diferentes segmentos, com atuação nacional. Trabalhamos com
            fornecedores internacionais renomados, entregando produtos já
            nacionalizados e com garantia no Brasil.
          </p>
          <p className="max-lg:text-xl lg:text-2xl">
            Nosso compromisso é oferecer qualidade, segurança e confiança em
            cada negociação, sempre prezando por uma relação transparente e de
            longo prazo com clientes e parceiros.
          </p>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
