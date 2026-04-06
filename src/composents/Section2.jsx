import React from 'react'
import vecteur from '../assets/vecteur.png'
import electricite from '../assets/electricite.png'
import mais from '../assets/mais.png'
import gc from '../assets/gc.png'
import macon from '../assets/macon.png'
import ee from '../assets/ee.png'

import { useState } from "react";

function Section2() {
    const [open, setOpen] = useState(false);
    const [open1, setOpen1] = useState(false);
    const [open2, setOpen2] = useState(false);
    const [open3, setOpen3] = useState(false);
    const [open4, setOpen4] = useState(false);
    return (
        <div>
            <div className="flex justify-center items-center">
                <img src={vecteur} className='max-md:w-3 max-md:h-3 w-10 mx-5' alt="" srcset="" />
                <h1 className='text-xl md:text-4xl text-center font-bold'>NOS FILIÈRES DE FORMATION</h1>
            </div>
            {/* cards pour les filieres BT*/}
            <div className="flex justify-center items-center gap-2 my-2">
                <p className='bg-red-500 rounded-full max-sm:h-2 max-sm:w-2 w-5 h-5 mx-1'></p>
                <h3 className="max-md:text-sm">
                    NIVEAU BT (Brevet de Technicien)
                </h3>
            </div>
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mx-2 md:mx-10 md:p-6 ">
                <div className="bg-white p-4 rounded-xl shadow hover:bg-[#4e4b4929]">
                    <h2 className="md:text-lg font-bold">AGROPASTORALE</h2>

                    <div className="flex justify-between">
                        <div>
                            <p>Contenu...</p>
                            {/* Bouton ouvrir */}
                            <button
                                onClick={() => setOpen(true)}
                                className="text-red-500 hover:bg-red-300 hover:text-white px-2 rounded-lg"
                            >
                                Suite
                            </button>
                        </div>
                        <img className="w-1/2 h-full" src={mais} alt="" />
                    </div>
                    {/* Popup */}
                    {open && (
                        <div className="fixed inset-0 bg-[#0018] flex justify-center items-center">
                            <div className="bg-white mx-1 p-6 rounded-2xl shadow-lg md:w-[1300px] text-center">
                                <img className="w-1/20 h-full" src={mais} alt="" />
                                <h2 className="text-xl font-bold mb-4">Mon Popup</h2>
                                <p className="mb-4 text-justify">Voici un exemple de popup avec Tailwind CSS.</p>

                                <button
                                    onClick={() => setOpen(false)}
                                    className="bg-red-500 text-white px-4 py-2 rounded-lg"
                                >
                                    Fermer
                                </button>
                            </div>

                        </div>
                    )}
                </div>

                <div class="bg-white p-4 rounded-xl shadow hover:bg-[#4e4b4929]">
                    <h2 class="md:text-lg font-bold">ELECETROTECHNIQUE</h2>
                    <div className="flex justify-between">
                        <div>
                            <p>Contenu...</p>
                            {/* Bouton ouvrir */}
                            <button
                                onClick={() => setOpen1(true)}
                                className="text-red-500 hover:bg-red-300 hover:text-white px-2 rounded-lg"
                            >
                                Suite
                            </button>
                        </div>

                        <img className='w-1/2' src={electricite} alt="" srcset="" />
                    </div>
                    {/* Popup */}
                    {open1 && (
                        <div className="fixed inset-1 bg-[#0018] bg-opacity-50 flex justify-center items-center">
                            <div className="bg-white p-6 rounded-2xl shadow-lg mx-1 md:w-[1300px] text-center hover:bg-[#4e4b4929]">
                                <img className="w-1/20 h-full" src={electricite} alt="" />
                                <h2 className="text-xl font-bold mb-4">Mon Popup</h2>
                                <p className="mb-4 text-justify">Voici un exemple de popup avec Tailwind CSS.</p>

                                <button
                                    onClick={() => setOpen1(false)}
                                    className="bg-red-500 text-white px-4 py-2 rounded-lg"
                                >
                                    Fermer
                                </button>
                            </div>

                        </div>
                    )}
                </div>

                <div class=" p-4 rounded-xl shadow hover:bg-[#4e4b4929]">
                    <h2 class="md:text-lg font-bold">GENIE-CIVIL</h2>
                    <div className="flex justify-between">
                        <div>
                            <p>Contenu...</p>
                            {/* Bouton ouvrir */}
                            <button
                                onClick={() => setOpen2(true)}
                                className="text-red-500 hover:bg-red-300 hover:text-white px-2 rounded-lg"
                            >
                                Suite
                            </button>
                        </div>
                        <img className='w-1/2 h-full' src={gc} alt="" srcset="" />
                    </div>
                    {/* Popup */}
                    {open2 && (
                        <div className="fixed inset-1 bg-[#0018] bg-opacity-50 flex justify-center items-center">
                            <div className="bg-white p-6 rounded-2xl shadow-lg mx-1 md:w-[1300px] text-center">
                                <img className="w-1/20 h-full" src={gc} alt="" />
                                <h2 className="text-xl font-bold mb-4">Mon Popup</h2>
                                <p className="mb-4 text-justify">Voici un exemple de popup avec Tailwind CSS.</p>

                                <button
                                    onClick={() => setOpen2(false)}
                                    className="bg-red-500 text-white px-4 py-2 rounded-lg"
                                >
                                    Fermer
                                </button>
                            </div>

                        </div>
                    )}
                </div>

            </div>
            {/* cards pour les filieres CAP */}
            <div className="flex justify-center items-center gap-2 my-2">
                <p className='bg-red-500 rounded-full max-sm:h-2 max-sm:w-2 w-5 h-5 mx-1'></p>
                <h3 className="max-md:text-sm">
                    NIVEAU CAP (Certificat d'Aptitude Professoinnel)
                </h3>
            </div>
             <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mx-2 md:mx-10 md:p-6 ">
                <div className="bg-white p-4 rounded-xl shadow hover:bg-[#4e4b4929]">
                    <h2 className="md:text-lg font-bold">MAÇONNERIE</h2>

                    <div className="flex justify-between">
                        <div>
                            <p>Contenu...</p>
                            {/* Bouton ouvrir */}
                            <button
                                onClick={() => setOpen3(true)}
                                className="text-red-500 hover:bg-red-300 hover:text-white px-2 rounded-lg"
                            >
                                Suite
                            </button>
                        </div>
                        <img className="w-1/2 h-full" src={macon} alt="" />
                    </div>
                    {/* Popup */}
                    {open3 && (
                        <div className="fixed inset-1 bg-[#0018] bg-opacity-50 flex justify-center items-center">
                            <div className="bg-white p-6 rounded-2xl shadow-lg mx-1 md:w-[1300px] text-center">
                                <img className="w-1/20 h-full" src={macon} alt="" />
                                <h2 className="text-xl font-bold mb-4">Mon Popup</h2>
                                <p className="mb-4 text-justify">Voici un exemple de popup avec Tailwind CSS.</p>

                                <button
                                    onClick={() => setOpen3(false)}
                                    className="bg-red-500 text-white px-4 py-2 rounded-lg"
                                >
                                    Fermer
                                </button>
                            </div>

                        </div>
                    )}
                </div>

                <div class="bg-white p-4 rounded-xl shadow hover:bg-[#4e4b4929]">
                    <h2 class="md:text-lg font-bold">ELECTRICITE D'EQUIPEMENT</h2>
                    <div className="flex justify-between">
                        <div>
                            <p>Contenu...</p>
                            {/* Bouton ouvrir */}
                            <button
                                onClick={() => setOpen4(true)}
                                className="text-red-500 hover:bg-red-300 hover:text-white px-2 rounded-lg"
                            >
                                Suite
                            </button>
                        </div>

                        <img className='w-1/2' src={ee} alt="" srcset="" />
                    </div>
                    {/* Popup */}
                    {open4 && (
                        <div className="fixed inset-1 bg-[#0018] bg-opacity-50 flex justify-center items-center">
                            <div className="bg-white p-6 rounded-2xl shadow-lg mx-1 md:w-[1300px] text-center">
                                <img className="w-1/20 h-full" src={ee} alt="" />
                                <h2 className="text-xl font-bold mb-4">Mon Popup</h2>
                                <p className="mb-4 text-justify">Voici un exemple de popup avec Tailwind CSS. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati, repellendus? Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis, voluptatibus!</p>

                                <button
                                    onClick={() => setOpen4(false)}
                                    className="bg-red-500 text-white px-4 py-2 rounded-lg"
                                >
                                    Fermer
                                </button>
                            </div>

                        </div>
                    )}
                </div>

            </div>
        </div>
    )
}
export default Section2
