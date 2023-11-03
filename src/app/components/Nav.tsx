"use client";
import Image from "next/image";
import { useState } from "react";

export default function Nav() {
  let [isOpen, setIsOpen] = useState(false);
  let toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div>
      <nav className="bg-blue-500 flex justify-between h-16 items-center px-10  text-white">
        <div className="flex items-center">
          <a href="#">
            <Image src="./logo.svg" alt="logo" width={30} height={30}></Image>
          </a>
          <ul className="space-x-12  pl-10 hidden sm:flex">
            <li>
              <a>Inicio</a>
            </li>
            <li>
              <a>Tienda</a>
            </li>
            <li>
              <a>Mascotas</a>
            </li>
          </ul>
        </div>
        <div>
          <Image
            className="sm:hidden"
            src="./icon-menu.svg"
            alt="logo"
            width={30}
            height={30}
            onClick={toggle}
          ></Image>
          <a className="hidden sm:block">login</a>
        </div>
      </nav>
      <div
        className={`sm:hidden ${
          isOpen ? "block" : "hidden"
        } from bg-gradient-to-b from-white/70 to-black/70  w-full h-full absolute`}
      >
        <ul className="flex flex-col justify-center items-center absolute  inset-x-0 top-24 p-12 bg-white w-[90%] mx-auto rounded-md gap-5">
          <li>
            <a href="#">Inicio</a>
          </li>
          <li>
            <a href="#">Tienda</a>
          </li>
          <li>
            <a href="#">Mascotas</a>
          </li>
        </ul>
      </div>
    </div>
  );
}
