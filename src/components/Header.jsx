import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import logo from "../assets/img/logo.png";
import logoW from "../assets/img/logoBranca.png";
import { useNavigate } from "react-router-dom";

function Header({ onScroll, refs }) {
  const [toggle, setToggle] = useState(true);
  const [headerBg, setHeaderBg] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (refs.homeRef && refs.homeRef.current) {
        const photoHeight = refs.homeRef.current.offsetHeight;
        if (window.scrollY >= photoHeight) {
          setHeaderBg(true);
        } else {
          setHeaderBg(false);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [refs.homeRef]);

  function handleRedirectCatalogue() {
    console.log("redirecting");
    // Atribua o URL, não chame como uma função
    window.location.href = "https://catalogo.bmimports.com.br";
  }
  return (
    <nav className="fixed w-full top-0 z-20">
      <div
        className={`flex justify-between p-4 md:px-15 xl:px-30 2xl:px-60 ${
          headerBg ? "bg-white shadow-md" : "bg-transparent"
        } transition-colors duration-300`}
      >
        {headerBg ? (
          <div onClick={() => onScroll(refs.homeRef)}>
            <img
              src={logo}
              alt=""
              className="lg:h-[35px] h-[30px] cursor-pointer"
            />
          </div>
        ) : (
          <div onClick={() => onScroll(refs.homeRef)}>
            <img
              src={logoW}
              alt=""
              className="lg:h-[35px] h-[30px] cursor-pointer"
            />
          </div>
        )}

        <div className="lg:hidden">
          <Menu
            onClick={() => setToggle(false)}
            className={`cursor-pointer md:hidden ${
              headerBg ? "text-black" : "text-white"
            }`}
            size={30}
          />
        </div>

        <div
          className={`
            fixed top-0 right-0 w-full h-full bg-white opacity-[98%]
            transition-all duration-500 ease-in-out lg:hidden
            ${
              toggle
                ? "translate-x-full opacity-0"
                : "translate-x-0 opacity-100"
            }
          `}
        >
          <X
            size={30}
            onClick={() => setToggle(true)}
            className="absolute right-4 top-4 cursor-pointer text-black"
          />
          <div className="flex flex-col items-center pt-20 gap-14 font-semibold text-3xl text-black">
            <p
              className="cursor-pointer"
              onClick={() => {
                onScroll(refs.homeRef);
                setToggle(true);
              }}
            >
              Home
            </p>
            <p
              className="cursor-pointer"
              onClick={() => {
                onScroll(refs.aboutRef);
                setToggle(true);
              }}
            >
              Sobre nós
            </p>
            <p
              className="cursor-pointer"
              onClick={() => {
                onScroll(refs.segmentsRef);
                setToggle(true);
              }}
            >
              Nossos segmentos
            </p>
            <p
              className="cursor-pointer"
              onClick={handleRedirectCatalogue}
            >
              Acesse nosso catálogo
            </p>
          </div>
        </div>

        <div
          className={`flex-row gap-4 hidden md:flex text-lg lg:text-xl ${
            headerBg ? "text-black" : "text-white"
          }`}
        >
          <p
            className={`cursor-pointer ${
              headerBg
                ? "hover:border-b-black hover:border-b-1 transition-all ease-in-out duration-100"
                : "hover:border-b-white hover:border-b-1 transition-all ease-in-out duration-100"
            }`}
            onClick={() => onScroll(refs.homeRef)}
          >
            Home
          </p>
          <p
            className={`cursor-pointer ${
              headerBg
                ? "hover:border-b-black hover:border-b-1 transition-all ease-in-out duration-100"
                : "hover:border-b-white hover:border-b-1 transition-all ease-in-out duration-100"
            }`}
            onClick={() => onScroll(refs.aboutRef)}
          >
            Sobre nós
          </p>
          <p
            className={`cursor-pointer ${
              headerBg
                ? "hover:border-b-black hover:border-b-1 transition-all duration-100 ease-in-out"
                : "hover:border-b-white hover:border-b-1 transition-all ease-in-out duration-500"
            }`}
            onClick={() => onScroll(refs.segmentsRef)}
          >
            Nossos segmentos
          </p>
          <p
            className={`cursor-pointer ${
              headerBg
                ? "hover:border-b-black hover:border-b-1 transition-all duration-100 ease-in-out"
                : "hover:border-b-white hover:border-b-1 transition-all ease-in-out duration-500"
            }`}
            onClick={handleRedirectCatalogue}
          >
            Acesse nosso catálogo
          </p>
        </div>
      </div>
    </nav>
  );
}

export default Header;
