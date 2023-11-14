"use client";
import { useState } from "react";
import Modal from "../components/Modal";

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
  let [id, setId] = useState(0);
  // modals
  let [isOpen, setIsOpen] = useState(false);
  let [addPet, setAddPet] = useState(false);
  let [editPet, setEditPet] = useState(false);

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

    editedPet.name = pet;
    editedPet.race = race;
    editedPet.years = years;
    editedPet.sex = sex;

    if (editedPet.name !== null) {
      updatedscreen[index] = editedPet;
      setScreen(updatedscreen);
      setPet("");
      setRace("");
      setYears("");
      setSex("");
    }
  };

  return (
    <div className="px-2 py-4 sm:px-10 sm:py-10 md:px-16 lg:px-20">
      <div className=" flex flex-col justify-center items-center sm:flex sm:flex-row  sm:justify-between">
        <h1 className="text-gray-800 text-4xl md:text-5xl lg:text-6xl">
          Nuestras Mascotas
        </h1>
        <button
          className="mt-4 sm:mt-0 relative inline-flex items-center justify-center p-4 px-6 py-3 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out border-2 border-blue-500 rounded-full shadow-md group"
          onClick={() => {
            setAddPet(!addPet);
          }}
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
              />
            </svg>
          </span>
          <span className="absolute flex items-center justify-center w-full h-full text-blue-500 transition-all duration-300 transform group-hover:translate-x-full ease">
            Add Pet
          </span>
          <span className="relative invisible">Button Text</span>
        </button>
      </div>
      <div className="overflow-x-auto text-xs sm:text-base">
        <table className="mt-6 w-full table-auto min-w-full md:mt-14">
          <thead>
            <tr>
              {itemsList.map((content, index) => {
                return (
                  <th key={index} className="text-center py-2 px-0 sm:px-4">
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
                  <td className="py-2 px-4 text-center flex flex-col justify-center items-center gap-2 sm:flex-row">
                    <button
                      onClick={() => {
                        setEditPet(!editPet);
                        setId(index);
                      }}
                    >
                      <span className="flex py-1 px-4 border-2 border-blue-500 rounded-full shadow-md hover:scale-105 transition-all">
                        <span className="icon-[noto--pencil]" />
                      </span>
                    </button>
                    <button
                      onClick={() => {
                        setIsOpen(!isOpen);
                        setId(content.id);
                      }}
                    >
                      <span className="flex py-1 px-4 border-blue-500 rounded-full shadow-md border-2 hover:scale-105 transition-all">
                        <span className="icon-[noto--wastebasket]" />
                      </span>
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
        <Modal
          isOpen={isOpen}
          closeModal={() => {
            setIsOpen(false);
          }}
        >
          <h3>Seguro deseas eliminar?</h3>
          <div className="mt-2">
            <p className="text-sm text-gray-500">
              Los datos de esta mascota se perderán para siempre, estás seguro ?
            </p>
          </div>
          <div className="mt-4 flex">
            <button
              type="button"
              className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
              onClick={() => {
                setIsOpen(!isOpen);
              }}
            >
              No, lo pensé mejor !
            </button>
            <button
              type="button"
              className="inline-flex justify-center rounded-md border border-transparent bg-red-100 px-4 py-2 text-sm font-medium text-red-900 hover:bg-red-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2 ml-4"
              onClick={() => {
                setIsOpen(!isOpen);
                deleted(id);
              }}
            >
              Si, eliminar !
            </button>
          </div>
        </Modal>
        <Modal
          isOpen={addPet}
          closeModal={() => {
            setAddPet(false);
          }}
        >
          <h3>Agrega tu mascota !</h3>
          <div className="mt-2">
            <p className="text-sm text-gray-500">
              Si no completas todos los espacios no se agregará.
            </p>
            <div>
              <div className="flex flex-col mt-4">
                <h2>Nombre de tu mascota:</h2>
                <input
                  type="text"
                  className="border border-blue-700 mt-2 pl-2 rounded-lg"
                  placeholder="Lucas"
                  onChange={(e) => {
                    setPet(e.target.value);
                  }}
                  value={pet}
                />
              </div>
            </div>
            <div className="flex flex-col mt-2">
              <h2>Raza de tu mascota:</h2>
              <input
                type="text"
                className="border border-blue-700 mt-2 pl-2 rounded-lg"
                placeholder="Golden"
                onChange={(e) => {
                  setRace(e.target.value);
                }}
                value={race}
              />
            </div>
            <div className="flex flex-col mt-2 ">
              <h2>Edad de tu mascota:</h2>
              <input
                type="number"
                className="border border-blue-700 mt-2 pl-2 rounded-lg"
                placeholder="5"
                onChange={(e) => {
                  setYears(e.target.value);
                }}
                value={years}
              />
            </div>
            <div className="flex flex-col mt-2">
              <h2>Sexo de tu mascota:</h2>
              <input
                type="text"
                className="border border-blue-700 mt-2 pl-2 rounded-lg"
                placeholder="Macho/Hembra"
                onChange={(e) => {
                  setSex(e.target.value);
                }}
                value={sex}
              />
            </div>
          </div>
          <div className="mt-8 flex">
            <button
              type="button"
              className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
              onClick={() => {
                setAddPet(!addPet);
              }}
            >
              No, lo pensé mejor !
            </button>
            <button
              type="button"
              className="inline-flex justify-center rounded-md border border-transparent bg-green-100 px-4 py-2 text-sm font-medium text-green-900 hover:bg-green-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-green-500 focus-visible:ring-offset-2 ml-4"
              onClick={() => {
                setAddPet(!addPet);
                create();
              }}
            >
              Si, agregar!
            </button>
          </div>
        </Modal>
        <Modal
          isOpen={editPet}
          closeModal={() => {
            setEditPet(false);
          }}
        >
          <h3>Esta a punto de editar tu mascota!</h3>
          <div className="mt-2">
            <p className="text-sm text-gray-500">
              los cambios serán permanentes.
            </p>
            {screen.map((obj, index) => {
              if (index === id) {
                return (
                  <div key={index}>
                    <div>
                      <div className="flex flex-col mt-4">
                        <h2>Nombre de tu mascota:</h2>
                        <input
                          type="text"
                          className="border border-blue-700 mt-2 pl-2 rounded-lg"
                          placeholder={obj.name}
                          onChange={(e) => {
                            setPet(e.target.value);
                          }}
                          value={pet}
                        />
                      </div>
                    </div>
                    <div className="flex flex-col mt-2">
                      <h2>Raza de tu mascota:</h2>
                      <input
                        type="text"
                        className="border border-blue-700 mt-2 pl-2 rounded-lg"
                        placeholder={obj.race}
                        onChange={(e) => {
                          setRace(e.target.value);
                        }}
                        value={race}
                      />
                    </div>
                    <div className="flex flex-col mt-2 ">
                      <h2>Edad de tu mascota:</h2>
                      <input
                        type="number"
                        className="border border-blue-700 mt-2 pl-2 rounded-lg"
                        placeholder={obj.years}
                        onChange={(e) => {
                          setYears(e.target.value);
                        }}
                        value={years}
                      />
                    </div>
                    <div className="flex flex-col mt-2">
                      <h2>Sexo de tu mascota:</h2>
                      <input
                        type="text"
                        className="border border-blue-700 mt-2 pl-2 rounded-lg"
                        placeholder={obj.sex}
                        onChange={(e) => {
                          setSex(e.target.value);
                        }}
                        value={sex}
                      />
                    </div>
                  </div>
                );
              }
              return null; // No renderizar nada para otras mascotas
            })}

            <div className="mt-8 flex">
              <button
                type="button"
                className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                onClick={() => {
                  setEditPet(!editPet);
                }}
              >
                No, lo pensé mejor !
              </button>
              <button
                type="button"
                className="inline-flex justify-center rounded-md border border-transparent bg-green-100 px-4 py-2 text-sm font-medium text-green-900 hover:bg-green-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-green-500 focus-visible:ring-offset-2 ml-4"
                onClick={() => {
                  setEditPet(!editPet);
                  update(id);
                }}
              >
                Si, Editar!
              </button>
            </div>
          </div>
        </Modal>
      </div>
    </div>
  );
}
