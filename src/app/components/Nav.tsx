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
      <nav className="bg-blue-500 flex justify-between h-16 items-center px-10  text-white">
        <div className="flex items-center">
          <a href="#">
            <Image src="./logo.svg" alt="logo" width={30} height={30}></Image>
          </a>
          <ul className="space-x-12  pl-10 hidden sm:flex">
            {elements.slice(0, 3).map((element, index) => {
              return (
                <li key={index}>
                  <a href={element.url}>{element.name}</a>
                </li>
              );
            })}
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
          {elements.slice(elements.length - 1).map((link, index) => {
            return (
              <a className="hidden sm:block" href={link.url} key={index}>
                {link.name}
              </a>
            );
          })}
        </div>
      </nav>
      <div
        className={`sm:hidden ${
          isOpen ? "block" : "hidden"
        } from bg-gradient-to-b from-white/70 to-black/70  w-full h-full absolute`}
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
