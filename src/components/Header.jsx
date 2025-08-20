import { Menu, X } from "lucide-react";
import React, { useState, useEffect } from "react";
import logo from '../assets/img/logo.png'

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

  return (
    <nav className="fixed w-full top-0 z-20">
      <div
        className={`flex justify-between p-4 md:px-15 xl:px-30 2xl:px-60 ${
          headerBg ? "bg-white shadow-md" : "bg-transparent"
        }`}
      >
        <div onClick={() => onScroll(refs.homeRef)}>
          <img src={logo} alt="" className="lg:h-[35px] h-[30px] cursor-pointer"/>
        </div>
        <div className="lg:hidden">
          {toggle ? (
            <Menu
              onClick={() => setToggle(!toggle)}
              className={`cursor-pointer md:hidden ${
                headerBg ? "text-black" : "text-white"
              }`}
              size={30}
            />
          ) : (
            <div className="w-full h-full fixed inset-0 bg-white opacity-[98%]">
              <X
                size={30}
                onClick={() => setToggle(!toggle)}
                className="absolute right-4 top-4 cursor-pointer"
              />
              <div className="flex flex-col items-center pt-20 gap-14 font-semibold text-3xl">
                <p
                  className="cursor-pointer"
                  onClick={() => {
                    onScroll(refs.homeRef);
                    setToggle(!toggle);
                  }}
                >
                  Home
                </p>
                <p
                  className="cursor-pointer"
                  onClick={() => {
                    onScroll(refs.aboutRef);
                    setToggle(!toggle);
                  }}
                >
                  Sobre nós
                </p>
                <p
                  className="cursor-pointer"
                  onClick={() => {
                    onScroll(refs.segmentsRef);
                    setToggle(!toggle);
                  }}
                >
                  Nossos segmentos
                </p>
              </div>
            </div>
          )}
        </div>
        <div
          className={`flex-row gap-4 hidden md:flex text-lg lg:text-xl ${
            headerBg ? "text-black" : "text-white"
          }`}
        >
          <p
            className={`cursor-pointer ${
              headerBg
                ? "hover:border-b-black hover:border-b-1 ease-in-out duration-100"
                : "hover:border-b-white hover:border-b-1 ease-in-out duration-100"
            }`}
            onClick={() => onScroll(refs.homeRef)}
          >
            Home
          </p>
          <p
            className={`cursor-pointer ${
              headerBg
                ? "hover:border-b-black hover:border-b-1 ease-in-out duration-100"
                : "hover:border-b-white hover:border-b-1 ease-in-out duration-100"
            }`}
            onClick={() => onScroll(refs.aboutRef)}
          >
            Sobre nós
          </p>
          <p
            className={`cursor-pointer ${
              headerBg
                ? "hover:border-b-black hover:border-b-1 ease-in-out duration-100"
                : "hover:border-b-white hover:border-b-1 ease-in-out duration-100"
            }`}
            onClick={() => onScroll(refs.segmentsRef)}
          >
            Nossos segmentos
          </p>
        </div>
      </div>
    </nav>
  );
}

export default Header;
