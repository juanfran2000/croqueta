"use client";
import Image from "next/image";
import { useState } from "react";

type Props = {
  elements: { url: string; name: string }[];
};

export default function Nav({ elements }: Props) {
  let [isOpen, setIsOpen] = useState(false);
  let toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div>
      <nav className="bg-blue-500 flex justify-between h-16 items-center px-10 fixed w-full z-10 top-0">
        <div className="flex items-center">
          <a href="#">
            <Image src="./logo.svg" alt="logo" width={30} height={30}></Image>
          </a>
          <ul className="space-x-12  pl-10 hidden sm:flex">
            {elements.slice(0, 3).map((element, index) => {
              return (
                <li key={index}>
                  <a
                    className="text-zinc-200 hover:text-white border-blue-500 hover:border-white hover:transition hover:border-b-2 hover:cursor-pointer"
                    href={element.url}
                  >
                    {element.name}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="flex items-center">
          <Image
            className="sm:hidden"
            src="./icon-menu.svg"
            alt="logo"
            width={30}
            height={30}
            onClick={toggle}
          ></Image>
          {elements.slice(elements.length - 1).map((link, index) => {
            return (
              <a
                className="hidden sm:block text-zinc-200 border-blue-500 hover:border-white hover:transition border-b-2 hover:cursor-pointer hover:text-white"
                href={link.url}
                key={index}
              >
                {link.name}
              </a>
            );
          })}
        </div>
      </nav>
      <div
        className={`sm:hidden ${
          isOpen ? "block" : "hidden"
        } from bg-gradient-to-b from-white/70 to-black/70  w-full h-full absolute z-10`}
      >
        <ul className="flex flex-col justify-center items-center absolute  inset-x-0 top-24 p-12 bg-white w-[90%] mx-auto rounded-md gap-5">
          {elements.map((element, index) => {
            return (
              <li key={index}>
                <a href={element.url}>{element.name}</a>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
