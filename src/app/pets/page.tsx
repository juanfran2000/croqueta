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
  let [name, setName] = useState("");
  let [breed, setBreed] = useState("");
  let [years, setYears] = useState("");
  let [sex, setSex] = useState("");
  let [id, setId] = useState();
  // modals
  let [isOpen, setIsOpen] = useState(false);
  let [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
  let [editPet, setEditPet] = useState(false);

  const [pets, setPets] = useState<any[]>([]);

  let create = () => {
    // Verificar si algun input esta vacio
    const newPet = {
      id: Math.floor(Math.random() * 100),
      name,
      breed,
      years,
      sex,
    };
    setPets([...pets, newPet]);
    // limpiamos nuetros inputs al agregar una tarea
    clearFields();
    setIsCreateModalOpen(false);
  };

  let deleted = () => {
    const newPetsArray = pets.filter((pet) => pet.id !== id);

    setPets(newPetsArray);
    setIsOpen(false);
    setId(undefined);
  };

  const clearFields = () => {
    setName("");
    setBreed("");
    setYears("");
    setSex("");
  };

  const update = () => {
    const newPetsArray = pets.map((pet) => {
      if (pet.id === id) {
        return { id, name, breed, years, sex };
      } else {
        return pet;
      }
    });

    setPets(newPetsArray);
    setIsCreateModalOpen(false);
    setTimeout(() => {
      setId(undefined);
    }, 1000);
    clearFields();
  };
  console.log(pets);
  return (
    <div className="px-2 py-4 sm:px-10 sm:py-10 md:px-16 lg:px-20">
      <div className=" flex flex-col justify-center items-center sm:flex sm:flex-row  sm:justify-between">
        <h1 className="text-gray-800 text-4xl md:text-5xl lg:text-6xl">
          Nuestras Mascotas
        </h1>
        <button
          className="mt-4 sm:mt-0 relative inline-flex items-center justify-center p-4 px-6 py-3 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out border-2 border-blue-500 rounded-full shadow-md group"
          onClick={() => {
            setIsCreateModalOpen(!isCreateModalOpen);
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
            {pets.map((pet, index) => {
              return (
                <tr className="divide-y divide-gray-200" key={pet.id}>
                  <td className="py-2 px-4 text-center">{index + 1}</td>
                  {/* index +1 hace que el valor se actulice y se organice la list */}
                  <td className="py-2 px-4 text-center">{pet.name}</td>
                  <td className="py-2 px-4 text-center">{pet.breed}</td>
                  <td className="py-2 px-4 text-center">{pet.years}</td>
                  <td className="py-2 px-4 text-center">{pet.sex}</td>
                  <td className="py-2 px-4 text-center flex flex-col justify-center items-center gap-2 sm:flex-row">
                    <button
                      onClick={() => {
                        setId(pet.id);
                        setName(pet.name);
                        setBreed(pet.breed);
                        setYears(pet.years);
                        setSex(pet.sex);
                        setIsCreateModalOpen(true);
                      }}
                    >
                      <span className="flex py-1 px-4 border-2 border-blue-500 rounded-full shadow-md hover:scale-105 transition-all">
                        <span className="icon-[noto--pencil]" />
                      </span>
                    </button>
                    <button
                      onClick={() => {
                        setIsOpen(!isOpen);
                        setId(pet.id);
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
        {/* modal para borrar */}
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
                clearFields();
              }}
            >
              No, lo pensé mejor !
            </button>
            <button
              type="button"
              className="inline-flex justify-center rounded-md border border-transparent bg-red-100 px-4 py-2 text-sm font-medium text-red-900 hover:bg-red-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2 ml-4"
              onClick={() => {
                setIsOpen(!isOpen);
                deleted();
              }}
            >
              Si, eliminar !
            </button>
          </div>
        </Modal>
        {/* modal para crear/editar */}
        <Modal
          isOpen={isCreateModalOpen}
          closeModal={() => {
            setIsCreateModalOpen(false);
          }}
        >
          <form
            onSubmit={(e) => {
              e.preventDefault();
              if (id) {
                update();
              } else {
                create();
              }
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
                      setName(e.target.value);
                    }}
                    required
                    value={name}
                  />
                </div>
              </div>
              <div className="flex flex-col mt-2">
                <h2>Raza de tu mascota:</h2>
                <input
                  type="text"
                  className="border border-blue-700 mt-2 pl-2 rounded-lg"
                  placeholder="Golden"
                  required
                  onChange={(e) => {
                    setBreed(e.target.value);
                  }}
                  value={breed}
                />
              </div>
              <div className="flex flex-col mt-2 ">
                <h2>Edad de tu mascota:</h2>
                <input
                  type="number"
                  className="border border-blue-700 mt-2 pl-2 rounded-lg"
                  placeholder="5"
                  required
                  onChange={(e) => {
                    setYears(e.target.value);
                  }}
                  min="0"
                  max="50"
                  value={years}
                />
              </div>
              <div className="flex flex-col mt-2">
                <h2>Sexo de tu mascota:</h2>
                <select
                  className="border border-blue-700 mt-2 pl-2
                  rounded-lg"
                  required
                  onChange={(e) => {
                    setSex(e.target.value);
                  }}
                  value={sex}
                >
                  <option value="" disabled hidden>
                    Seleccionar una opción
                  </option>
                  <option>Macho</option>
                  <option>Hembra</option>
                </select>
              </div>
            </div>
            <div className="mt-8 flex">
              <button
                type="button"
                className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                onClick={() => {
                  clearFields();
                  setIsCreateModalOpen(!isCreateModalOpen);
                }}
              >
                No, lo pensé mejor !
              </button>
              <button
                type="submit"
                className="inline-flex justify-center rounded-md border border-transparent bg-green-100 px-4 py-2 text-sm font-medium text-green-900 hover:bg-green-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-green-500 focus-visible:ring-offset-2 ml-4"
              >
                {id ? `si, Editar` : `si, Agregar!`}
              </button>
            </div>
          </form>
        </Modal>
      </div>
    </div>
  );
}
