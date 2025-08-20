import image from "../assets/img/aboutUs.jfif";

function AboutUs() {
  return (
    <div
      className="relative w-full bg-cover text-justify bg-center md:justify-center md:items-center rounded-lg lg:px-20 xl:px-50 2xl:px-70"
    >
      <div className="flex-col flex p-4 md:flex-row items-center lg:px-10 xl:px-25 2xl:px-40">
        <div className="">
          <img src={image} alt="" className="relative md:-right-5" />
        </div>
        <div className="bg-white max-md:p-4 flex flex-col max-md:w-150 gap-4 relative md:-left-5 md:w-4/5 md:py-20 md:px-10 z-10 lg:py-[100px]">
          <h2 className="text-3xl font-bold text-blue-800">Quem somos</h2>
          <p className='max-md:text-lg lg:text-xl'>
            A BMImports é uma importadora e distribuidora de produtos de
            diferentes segmentos, com atuação nacional. Trabalhamos com
            fornecedores internacionais renomados, entregando produtos já
            nacionalizados e com garantia no Brasil.
          </p>
          <p className='max-md:text-lg lg:text-xl'>
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
