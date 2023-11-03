"use client";
import Image from "next/image";

type Props = {
  elements: { url: string; name: string }[];
  socialElements: {
    url: string;
    alt: string;
    iconUrl: string;
    className: string;
  }[];
};

let logo = [{ url: "./logo-text.svg", alt: "logo footer", link: "#" }];
let mail = [{ text: "@croqueta/ecu/arg" }];

const Footer = ({ elements, socialElements }: Props) => {
  return (
    <div className="bg-blue-500 w-full h-[400px] flex flex-col justify-center md:h-[300px] text-white">
      <div className="md:h-[70px] mx-10 flex flex-col items-center justify-start md:flex md:justify-between md:items-center md:flex-row h-32 ">
        <div className="w-[200px]">
          <ul className="justify-between hidden  md:flex ">
            {socialElements.slice(0, 3).map((icon) => {
              return (
                <li
                  className={`hover:scale-125 transition-all bg-blue-500 rounded-full h-10 w-10 flex items-center justify-center ${icon.className}`}
                >
                  <a href={icon.url} target="blank">
                    <Image
                      src={icon.iconUrl}
                      alt={icon.alt}
                      width={25}
                      height={25}
                    ></Image>
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
        <div className=" w-[200px]  md:flex ">
          {logo.map((img) => {
            return (
              <a href={img.link}>
                <Image
                  src={img.url}
                  alt={img.alt}
                  width={200}
                  height={200}
                ></Image>
              </a>
            );
          })}
        </div>
        <div className="w-[200px] ">
          <ul className="flex justify-between mt-6 md:mt-0">
            {socialElements
              .slice(Math.max(socialElements.length - 3, 0))
              .map((icon) => {
                return (
                  <li
                    className={`hover:scale-125 transition-all bg-blue-500 rounded-full h-10 w-10 flex items-center justify-center ${icon.className}`}
                  >
                    <a href={icon.url} target="blank">
                      <Image
                        src={icon.iconUrl}
                        alt={icon.alt}
                        width={25}
                        height={25}
                      ></Image>
                    </a>
                  </li>
                );
              })}
          </ul>
        </div>
      </div>
      <hr className="mx-10 mt-2"></hr>
      <div className=" h-[170px] mt-2 mx-10 ">
        <div className=" h-[120px] w-full flex flex-col items-center justify-end">
          <ul className=" mt-2 gap-x-12 gap-y-2 uppercase flex flex-wrap justify-center items-center">
            {elements.map((info) => {
              return (
                <li>
                  <a href={info.url}>{info.name}</a>
                </li>
              );
            })}
          </ul>
          {mail.map((info) => {
            return <h4 className="mt-6">{info.text}</h4>;
          })}
        </div>
      </div>
    </div>
  );
};

export default Footer;
