import React from 'react'
import { HiMenu } from "react-icons/hi"
import { IoClose } from "react-icons/io5"
import { FaThumbsUp } from "react-icons/fa";
import '../App.css'
import logo_cet_nk from '../assets/logo_cet_nk.jpg'
import acceuil from '../assets/acceuil.png'
import { useState } from "react"
import defile_cetnk from '../assets/defile_cetnk.png'

function Navbar() {
  const [isOpon, setIsOpen] = useState(false)
  const toggleMenu = () => {
    setIsOpen(!isOpon);
  }
  const [active, setActive] = useState("acceuil");
  const [open, setOpen] = useState(false);

  const [like, setLike] = useState(false)
  const [count, setCount] = useState(0)

  const handlelike = () => {

    if (like) {
      setCount(count - 1)
    } else {
      setCount(count + 1)
    }
    setLike(!like)
  }

  return (
    <nav>
      {/* Navbar */}
      <div className="flex fixed top-0 left-0 w-full bg-white shadow z-50 items-center justify-between pl-6 pt-3 pr-6">
        <div className="logo">
          <img src={logo_cet_nk} className='w-18' alt="" srcset="" />
        </div>
        {
          !isOpon && (
            <div onClick={toggleMenu} className="cursor-pointer md:hidden">
              <HiMenu size={40} />
            </div>
          )
        }
        {
          isOpon && (
            <div onClick={toggleMenu} className="cursor-pointer md:hidden">
              <IoClose size={40} />
            </div>
          )
        }
        {isOpon ? (
          <div className="menu bg-[#fb8014] overflow-y-hidden fixed z-10 top-16 right-0 w-1/2 min-h-1/2 justify-center items-center flex-col gap-10 duration-1000 ease-in pointer pr-7 md:hidden flex space-x-6 list-none text-3xl">
            <li href="#acceuil" className='text-xl'>Acceuil</li>
            <li href="#cet_nk" className='text-xl text-center'>Qui sommes-nous </li>
            <li id='contacts' className='text-xl'>Contacts</li>
          </div>
        ) : (
          <div className="menu bg-[#fb8014] overflow-y-hidden fixed z-10 top-16 left-[-150%] w-1/2 min-h-1/2 justify-center items-center flex-col gap-10 duration-1000 ease-in pointer pr-7 md:hidden flex space-x-6 list-none text-3xl">
            <li className='p-2'>Acceuil</li>
            <li href="#cet_nk">Qui sommes-nous</li>
            <li href="#contacts">Contacts</li>
          </div>
        )}
        {/* affichage PC/DESKTOP */}
        <div className="menu hidden md:flex space-x-6 text-3xl pr-5 list-none">
          <a
            // href='#acceuil'className='font-bold bg-[#FB8014] p-2 text-[#fff] rounded-sm'
            href="#acceuil"
            onClick={() => setActive("acceuil")}
            className={`p-2 max-md:text-sm rounded-sm transition duration-300 
            ${active === "acceuil" ? "bg-[#FB8014] font-bold text-white" : ""}`}
          >Acceuil</a>
          <a
            // href='#cet_nk'
            href="#cet_nk"
            onClick={() => setActive("cet_nk")}
            className={`p-2 rounded-sm transition duration-300 
            ${active === "cet_nk" ? "bg-[#FB8014] font-bold text-white" : ""}`}
          >Qui sommes-nous</a>
          <a
            //  href="#contacts"
            href='#contacts'
            onClick={() => setActive("contacts")}
            className={`p-2 rounded-sm transition duration-300 
            ${active === "contacts" ? "bg-[#FB8014] font-bold text-white" : ""}`}
          >Contacts</a>
        </div>
      </div>
      <hr className='border-1 border-[#FB8014]' />

      {/* image d'acceuille */}
      <div id='acceuil' className=" bg-[url('./assets/acceuil.png')] h-screen bg-cover bg-center">
        <div className=''>

          <h1 style={{ fontFamily: 'Kavoon, cursive' }} className='max-md:py-30 max-md:pl-12 max-md:text-2xl md:py-20 lg:py-40 md:pl-24 md:text-6xl'>
            les réssi de demain c’est au <br /> CET-NK !
          </h1>
          <button
            onClick={() => setOpen(true)}
            className=' cursor-pointer max-md:ml-6 max-md:text-[12px] max-md:px-4 max-md:text-white md:ml-20 md:px-24 rounded-2xl md:py-1 md:text-xl border-1 border-[#A1D9F6] bg-[#FB8014]'
          >ACTUALITE DE L’ECOLE
          </button>
          {open && (
            <div className="p-6 fixed inset-0 bg-black/90 flex justify-center items-center">
              <button
                onClick={() => setOpen(false)}
                className="max-md:top-14 mt-4 absolute mr-7 top-20 right-0 max-md:text-black md:bg-gray-500 hover:bg-red-500 text-white px-2 py-2 rounded"
              >
                x
              </button>
              <div className="bg-white overflow-y-auto h-full mt-22 p-2 rounded-xl shadow-lg text-center">
                <div className="flex">
                  <button
                    onClick={handlelike}
                    className=" text-xl font-bold mb-4 cursor-pointer">
                    {
                      like ?
                        <FaThumbsUp size={30} color="red" /> : <FaThumbsUp size={30} color="blue" />
                    }
                  </button>
                  <p>{count}</p>
                </div>

                <h3 className='upercase font-bold'>
                  Défilé des élèves de CET-NK à l'occasion du 27 Avril 2026<br />
                </h3>
                <p className=' h-full text-justify'>
                  À l'occasion de son accèssion à l'independance, le Togo fêtait son 66ème Anniversaire d'independance. Les élèves du College d'enseignement technique de N'dewonè-Kondji ont prient part aux activités dont le défilé militaire et civile. <br />
                  Après le passage des troupes militaires, place au défilé civil. Les élèves de CET-NK habilés dans leur tenue scolaire, ont défilé au rithme de la musique.
                <img src={defile_cetnk} alt="" srcset="" />
                </p>


              </div>

            </div>
          )}


        </div>
        {/* <img src={acceuil} alt="" srcset="" /> */}
      </div>
      {/*  */}
    </nav>
  )
}
export default Navbar
