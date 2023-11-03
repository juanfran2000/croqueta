"use client";
import Image from "next/image";

const Footer = () => {
  return (
    <div className="bg-blue-500 w-full h-[400px] flex flex-col justify-center md:h-[300px] text-white">
      <div className="md:h-[70px] mx-10 flex flex-col items-center justify-start md:flex md:justify-between md:items-center md:flex-row h-32 ">
        <div className="w-[200px]">
          <ul className="justify-between hidden  md:flex ">
            <li className=" hover:scale-125 transition-all bg-blue-500 rounded-full h-10 w-10 flex items-center justify-center hover:bg-green-500">
              <a href="https://web.whatsapp.com/" target="blank">
                <Image
                  src="./icon-whatsapp.svg"
                  alt="ruta whatsapp"
                  width={25}
                  height={25}
                ></Image>
              </a>
            </li>
            <li className=" hover:scale-125 transition-all bg-blue-500 rounded-full h-10 w-10 flex items-center justify-center hover:bg-red-500">
              <a href="https://mail.google.com/mail/u/0/#inbox" target="blank">
                <Image
                  src="./icon-mail.svg"
                  alt="ruta mail"
                  width={25}
                  height={25}
                ></Image>
              </a>
            </li>
            <li className=" hover:scale-125 transition-all bg-blue-500 rounded-full h-10 w-10 flex items-center justify-center hover:bg-blue-400">
              <a
                href="https://www.linkedin.com/learning/?originalSubdomain=ec"
                target="blank"
              >
                <Image
                  src="./icon-linkedin.svg"
                  alt="ruta linkedin"
                  width={25}
                  height={25}
                ></Image>
              </a>
            </li>
          </ul>
        </div>
        <div className=" w-[200px]  md:flex ">
          <Image
            src="./logo-text.svg"
            alt="logo footer"
            width={200}
            height={200}
          ></Image>
        </div>

        <div className="w-[200px] ">
          <ul className="flex justify-between mt-6 md:mt-0">
            <li className=" hover:scale-125 transition-all bg-blue-500 rounded-full h-10 w-10 flex items-center justify-center hover:bg-black">
              <a href="https://twitter.com/?lang=es" target="blank">
                <Image
                  src="./icon-twitter.svg"
                  alt="ruta twitter"
                  width={25}
                  height={25}
                ></Image>
              </a>
            </li>
            <li className=" hover:scale-125 transition-all bg-blue-500 rounded-full h-10 w-10 flex items-center justify-center hover:bg-gradient-to-r from-red-500 to-purple-600">
              <a href="https://www.instagram.com/" target="blank">
                <Image
                  src="./icon-instagram.svg"
                  alt="ruta instagram"
                  width={25}
                  height={25}
                ></Image>
              </a>
            </li>
            <li className=" hover:scale-125 transition-all bg-blue-500 rounded-full h-10 w-10 flex items-center justify-center hover:bg-blue-600">
              <a href="https://www.facebook.com/?locale=es_LA" target="blank">
                <Image
                  src="./icon-facebook.svg"
                  alt="ruta facebook"
                  width={25}
                  height={25}
                ></Image>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <hr className="mx-10 mt-2"></hr>
      <div className=" h-[170px] mt-2 mx-10 ">
        <div className=" h-[120px] w-full mt-10 flex flex-col items-center justify-end">
          <ul className=" mt-2 gap-x-12 gap-y-2 uppercase flex flex-wrap justify-center items-center">
            <li>
              <a href="#">Gatos</a>
            </li>
            <li>
              <a href="#">Perros</a>
            </li>
            <li>
              <a href="#">Pagos</a>
            </li>
            <li>
              <a href="#">Servicios</a>
            </li>
            <li>
              <a href="#">Accesorios</a>
            </li>
          </ul>
          <h4 className="mt-6">@croqueta/ecu/arg</h4>
        </div>
      </div>
    </div>
  );
};

export default Footer;
