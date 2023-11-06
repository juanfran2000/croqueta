"use client";
import Image from "next/image";

export default function Hero() {
  return (
    <div>
      <div className="relative">
        <div className="absolute inset-0 flex mt-4 sm:mt-6 md:mt-8 lg:mt-10 xl:mt-12 justify-center text-center">
          <article className="h-20 sm:font-bold">
            <p className="text-xs text-zinc-500">
              La mejor app para albergar tus controles medicos
            </p>
            <h2 className="hidden sm:block sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-blue-500">
              Guau! Guau!
            </h2>
          </article>
        </div>
        <Image
          src="/mascotas.png"
          alt="imagen hero"
          width={2000}
          height={2000}
          className="w-full"
        />
      </div>
    </div>
  );
}
