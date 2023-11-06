import Hero from "./components/Hero";

export default function Home() {
  return (
    <div>
      <Hero
        text="La mejor app para albergar los controles de tu mascota"
        title="Guau! Guau!"
        img="/mascotas.png"
        alt="imagen de mascotas en portada"
      />
      <h1 className=" text-red-500 sm:text-blue-500 md:text-green-500 lg:text-yellow-500 xl:text-purple-500">
        Dante, alter ego del poeta
      </h1>
    </div>
  );
}
