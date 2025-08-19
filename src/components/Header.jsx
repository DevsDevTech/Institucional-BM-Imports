import { Menu, X } from "lucide-react";
import React, { useState } from "react";

function Header() {
  const [toggle, setToggle] = useState(true);

  return (
    <nav className="fixed w-full top-0 z-20">
      <div className="flex justify-between p-4 md:px-15 xl:px-30 2xl:px-60">
        <div className="bg-red-400 w-30">a</div>
        <div className="lg:hidden">
          {toggle ? (
            <Menu
              onClick={() => setToggle(!toggle)}
              className="cursor-pointer text-white"
            />
          ) : (
            <div className="w-full h-full absolute bg-white opacity-90">
              <X
                onClick={() => setToggle(!toggle)}
                className="absolute right-4 top-2 cursor-pointer"
              />
              <div className="flex flex-col items-center pt-20 gap-4 font-semibold text-2xl">
                <p className="cursor-pointer">Home</p>
                <p className="cursor-pointer">Sobre nós</p>
                <p className="cursor-pointer">Nossos segmentos</p>
              </div>
            </div>
          )}
        </div>
        <div className="flex flex-row gap-4 max-lg:hidden">
          <p className="cursor-pointer hover:border-b-black hover:border-b-1 ease-in-out duration-100">
            Home
          </p>
          <p className="cursor-pointer hover:border-b-black hover:border-b-1 ease-in-out duration-100">
            Sobre nós
          </p>
          <p className="cursor-pointer hover:border-b-black hover:border-b-1 ease-in-out duration-100">
            Nossos segmentos
          </p>
        </div>
      </div>
    </nav>
  );
}

export default Header;
