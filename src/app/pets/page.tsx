"use client";
import { useState } from "react";

const itemsList = [
  { listName: "#" },
  { listName: "Pet" },
  { listName: "Race" },
  { listName: "Years" },
  { listName: "Sex" },
  { listName: "Action" },
];

export default function Pets() {
  let [pet, setPet] = useState("");
  let [race, setRace] = useState("");
  let [years, setYears] = useState("");
  let [sex, setSex] = useState("");

  const [screen, setScreen] = useState<any[]>([]);

  let create = () => {
    if (
      // Verificar si algun input esta vacio
      pet.trim() !== "" &&
      race.trim() !== "" &&
      years.trim() !== "" &&
      sex.trim() !== ""
    ) {
      const newPet = {
        id: screen.length + 1,
        name: pet,
        race,
        years,
        sex,
      };
      setScreen([...screen, newPet]);
      // limpiamos nuetros inputs al agregar una tarea
      setPet("");
      setRace("");
      setYears("");
      setSex("");
    }
  };

  let deleted = (id: number) => {
    const petToDelete = screen.find((pet) => pet.id === id);

    if (petToDelete) {
      // Filtrar la lista para eliminar el elemento
      const newscreen = screen.filter((pet) => pet.id !== id);

      // Actualizar los id de los elementos restantes en la lista
      for (let i = 0; i < newscreen.length; i++) {
        newscreen[i].id = i + 1;
      }

      setScreen(newscreen);
    }
  };

  const update = (index: number) => {
    const updatedscreen = [...screen];
    const editedPet = { ...updatedscreen[index] };

    editedPet.name = prompt("Edit Pet:", editedPet.name);
    editedPet.race = prompt("Edit Race:", editedPet.race);
    editedPet.years = prompt("Edit Years:", editedPet.years);
    editedPet.sex = prompt("Edit Sex:", editedPet.sex);

    if (editedPet.name !== null) {
      updatedscreen[index] = editedPet;
      setScreen(updatedscreen);
    }
  };

  return (
    <div className="px-20 py-20">
      <div>
        <input
          type="text"
          className="border border-blue-700 pl-2 mx-10"
          placeholder="Pet"
          onChange={(e) => {
            setPet(e.target.value);
          }}
          value={pet}
        />
        <input
          type="text"
          className="border border-blue-700 pl-2 mx-10"
          placeholder="Race"
          onChange={(e) => {
            setRace(e.target.value);
          }}
          value={race}
        />
        <input
          type="number"
          className="border border-blue-700 pl-2 mx-10"
          placeholder="Years"
          onChange={(e) => {
            setYears(e.target.value);
          }}
          value={years}
        />
        <input
          type="text"
          className="border border-blue-700 pl-2 mx-10"
          placeholder="Sex"
          onChange={(e) => {
            setSex(e.target.value);
          }}
          value={sex}
        />
      </div>
      <div className="flex items-center mt-20">
        <h1 className=" text-red-500 sm:text-blue-500 md:text-green-500 lg:text-yellow-500 xl:text-purple-500 text-6xl pl-10">
          Nuestras Mascotas
        </h1>
        <div>
          <button
            className="relative inline-flex items-center justify-center p-4 px-6 py-3 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out border-2 border-blue-500 rounded-full shadow-md group ml-[495px]"
            onClick={create}
          >
            <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-blue-500 group-hover:translate-x-0 ease">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                ></path>
              </svg>
            </span>
            <span className="absolute flex items-center justify-center w-full h-full text-blue-500 transition-all duration-300 transform group-hover:translate-x-full ease">
              Add Pet
            </span>
            <span className="relative invisible">Button Text</span>
          </button>
        </div>
      </div>
      <div>
        <table className="w-full mt-20 table-auto">
          <thead>
            <tr>
              {itemsList.map((content, index) => {
                return (
                  <th key={index} className="text-center py-2 px-4">
                    {content.listName}
                  </th>
                );
              })}
            </tr>
          </thead>
          <tbody>
            {screen.map((content, index) => {
              return (
                <tr className="divide-y divide-gray-200" key={content.id}>
                  <td className="py-2 px-4 text-center">{index + 1}</td>
                  {/* index +1 hace que el valor se actulice y se organice la list */}
                  <td className="py-2 px-4 text-center">{content.name}</td>
                  <td className="py-2 px-4 text-center">{content.race}</td>
                  <td className="py-2 px-4 text-center">{content.years}</td>
                  <td className="py-2 px-4 text-center">{content.sex}</td>
                  <td className="py-2 px-4 text-center">
                    <button onClick={() => update(index)}>Edit/</button>

                    <button
                      onClick={() => {
                        deleted(content.id);
                      }}
                    >
                      delete
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
