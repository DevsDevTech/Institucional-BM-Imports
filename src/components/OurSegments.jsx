import acad1 from "../assets/img/Academia/3.jpg";
import acad2 from "../assets/img/Academia/4.jpg";
import acad3 from "../assets/img/Academia/6.jpg";
import acad4 from "../assets/img/Academia/7.jpg";
import acad5 from "../assets/img/Academia/12.jpg";
import acad6 from "../assets/img/Academia/10.jpg";
import hot1 from "../assets/img/Hotelaria/14.jpg";
import hot2 from "../assets/img/Hotelaria/17.jpg";
import hot3 from "../assets/img/Hotelaria/16.jpg";
import hot4 from "../assets/img/Hotelaria/18.jpg";
import pis1 from "../assets/img/Piso vinílico e ripado/20.jpg";
import pis2 from "../assets/img/Piso vinílico e ripado/21.jpg";

function OurSegments() {
  return (
    <div
      id="default-carousel"
      className="relative max-xl:w-full xl:w-7/10 2xl:w-3/5 flex flex-col z-10 text-white"
      data-carousel="slide"
    >
      <div className="text-center flex flex-col gap-2 py-8 max-md:px-4 md:px-10">
        <h2 className="font-bold max-lg:text-3xl lg:text-4xl">
          Segmentos de atuação
        </h2>
        <p className="text-xl lg:text-2xl">
          Atuamos em diferentes setores, oferecendo soluções completas:
        </p>
      </div>

      <div className="relative h-[400px] overflow-hidden md:h-[700px]">
        <div className="hidden duration-700 ease-in-out" data-carousel-item>
          <img
            src={acad1}
            className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 object-cover h-full"
            alt="..."
          />
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
            <p className="text-white text-3xl font-bold p-4">
              Academia
            </p>
          </div>
        </div>
        <div className="hidden duration-700 ease-in-out" data-carousel-item>
          <img
            src={acad2}
            className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 object-cover h-full"
            alt="..."
          />
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
            <p className="text-white text-3xl font-bold p-4">
              Academia
            </p>
          </div>
        </div>
        <div className="hidden duration-700 ease-in-out" data-carousel-item>
          <img
            src={acad3}
            className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 object-cover h-full"
            alt="..."
          />
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
            <p className="text-white text-3xl font-bold p-4">
              Academia
            </p>
          </div>
        </div>
        <div className="hidden duration-700 ease-in-out" data-carousel-item>
          <img
            src={acad4}
            className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 object-cover h-full"
            alt="..."
          />
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
            <p className="text-white text-3xl font-bold p-4">
              Academia
            </p>
          </div>
        </div>
        <div className="hidden duration-700 ease-in-out" data-carousel-item>
          <img
            src={acad5}
            className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 object-cover h-full"
            alt="..."
          />
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
            <p className="text-white text-3xl font-bold p-4">
              Academia
            </p>
          </div>
        </div>
        <div className="hidden duration-700 ease-in-out" data-carousel-item>
          <img
            src={acad6}
            className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 object-cover h-full"
            alt="..."
          />
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
            <p className="text-white text-3xl font-bold p-4">
              Academia
            </p>
          </div>
        </div>
        <div className="hidden duration-700 ease-in-out" data-carousel-item>
          <img
            src={hot1}
            className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 object-cover h-full"
            alt="..."
          />
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
            <p className="text-white text-3xl font-bold p-4">
              Hotelaria
            </p>
          </div>
        </div>
        <div className="hidden duration-700 ease-in-out" data-carousel-item>
          <img
            src={hot2}
            className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 object-cover h-full"
            alt="..."
          />
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
            <p className="text-white text-3xl font-bold p-4">
              Hotelaria
            </p>
          </div>
        </div>
        <div className="hidden duration-700 ease-in-out" data-carousel-item>
          <img
            src={hot3}
            className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 object-cover h-full"
            alt="..."
          />
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
            <p className="text-white text-3xl font-bold p-4">
              Hotelaria
            </p>
          </div>
        </div>
        <div className="hidden duration-700 ease-in-out" data-carousel-item>
          <img
            src={hot4}
            className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 object-cover h-full"
            alt="..."
          />
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
            <p className="text-white text-3xl font-bold p-4">
              Hotelaria
            </p>
          </div>
        </div>
        <div className="hidden duration-700 ease-in-out" data-carousel-item>
          <img
            src={pis1}
            className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 object-cover h-full"
            alt="..."
          />
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
            <p className="text-white text-3xl font-bold p-4">
              Pisos
            </p>
          </div>
        </div>
        <div className="hidden duration-700 ease-in-out" data-carousel-item>
          <img
            src={pis2}
            className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 object-cover h-full"
            alt="..."
          />
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
            <p className="text-white text-3xl font-bold p-4">
              Pisos
            </p>
          </div>
        </div>
      </div>

      {/* --- BOTÕES INDICADORES ATUALIZADOS --- */}
      <div className="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse">
        <button
          type="button"
          className="hidden w-3 h-3 rounded-full"
          aria-current="true"
          aria-label="Slide 1"
          data-carousel-slide-to="0"
        ></button>
        <button
          type="button"
          className="hidden w-3 h-3 rounded-full"
          aria-current="false"
          aria-label="Slide 2"
          data-carousel-slide-to="1"
        ></button>
        <button
          type="button"
          className="hidden w-3 h-3 rounded-full"
          aria-current="false"
          aria-label="Slide 3"
          data-carousel-slide-to="2"
        ></button>
        <button
          type="button"
          className="hidden w-3 h-3 rounded-full"
          aria-current="false"
          aria-label="Slide 4"
          data-carousel-slide-to="3"
        ></button>
        <button
          type="button"
          className="hidden w-3 h-3 rounded-full"
          aria-current="false"
          aria-label="Slide 5"
          data-carousel-slide-to="4"
        ></button>
        <button
          type="button"
          className="hidden w-3 h-3 rounded-full"
          aria-current="false"
          aria-label="Slide 6"
          data-carousel-slide-to="5"
        ></button>
        <button
          type="button"
          className="hidden w-3 h-3 rounded-full"
          aria-current="false"
          aria-label="Slide 7"
          data-carousel-slide-to="6"
        ></button>
        <button
          type="button"
          className="hidden w-3 h-3 rounded-full"
          aria-current="false"
          aria-label="Slide 8"
          data-carousel-slide-to="7"
        ></button>
        <button
          type="button"
          className="hidden w-3 h-3 rounded-full"
          aria-current="false"
          aria-label="Slide 9"
          data-carousel-slide-to="8"
        ></button>
        <button
          type="button"
          className="hidden w-3 h-3 rounded-full"
          aria-current="false"
          aria-label="Slide 10"
          data-carousel-slide-to="9"
        ></button>
        <button
          type="button"
          className="hidden w-3 h-3 rounded-full"
          aria-current="false"
          aria-label="Slide 11"
          data-carousel-slide-to="10"
        ></button>
        <button
          type="button"
          className="hidden w-3 h-3 rounded-full"
          aria-current="false"
          aria-label="Slide 12"
          data-carousel-slide-to="11"
        ></button>
      </div>

      <button
        type="button"
        className="absolute top-0 start-0 z-30 flex items-center max-md:hidden justify-center h-full px-4 cursor-pointer group focus:outline-none"
        data-carousel-prev
      >
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 group-hover:bg-white/50">
          <svg
            className="w-4 h-4 text-white"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 6 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5 1 1 5l4 4"
            />
          </svg>
          <span className="sr-only">Previous</span>
        </span>
      </button>
      <button
        type="button"
        className="absolute top-0 end-0 z-30 flex items-center max-md:hidden justify-center h-full px-4 cursor-pointer group focus:outline-none"
        data-carousel-next
      >
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 group-hover:bg-white/50">
          <svg
            className="w-4 h-4 text-white"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 6 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m1 9 4-4-4-4"
            />
          </svg>
          <span className="sr-only">Next</span>
        </span>
      </button>
    </div>
  );
}

export default OurSegments;
