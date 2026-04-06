import React from 'react'
import { HiMenu } from "react-icons/hi"
import { IoClose } from "react-icons/io5"
import '../App.css'
import logo_cet_nk from '../assets/logo_cet_nk.jpg'
import acceuil from '../assets/acceuil.png'
import { useState } from "react"


function Navbar() {
  const [isOpon, setIsOpen] = useState(false)
  const toggleMenu = () => {
    setIsOpen(!isOpon);
  }
  const [active, setActive] = useState("acceuil");
  const [open, setOpen] = useState(false);


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
            <li id='contacts'>Contacts</li>
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

          <h1 style={{ fontFamily: 'Kavoon, cursive' }} className='max-md:py-30 max-md:pl-12 max-md:text-2xl md:py-40 md:pl-24 md:text-6xl'>les réssi de demain c’est au <br /> CET-NK !</h1>
          <button
            onClick={() => setOpen(true)}
            className='max-md:hidden cursor-pointer md:ml-20 md:px-24 rounded-2xl md:py-1 md:text-xl border-1 border-[#A1D9F6] bg-[#FB8014]'>ACTUALITE DE L’ECOLE
          </button>
          {open && (
            <div className="fixed inset-0 bg-black/90 flex justify-center items-center">

              <div className="bg-white w-1/2  h-4/5 p-6 rounded-xl shadow-lg text-center">
                <h2 className=" text-xl font-bold mb-4">Mon Popup</h2>
                <p>Bienvenue sur mon site 🎉<br />
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos natus nemo impedit, perferendis consectetur tempore accusantium doloremque vel suscipit eum quae consequuntur deleniti autem exercitationem temporibus numquam! Corrupti aspernatur possimus temporibus, ipsum adipisci ratione, voluptatem eos voluptas nulla veritatis natus fuga. Quos odit ullam facilis quam sint recusandae odio quia.
                  {/* Lorem ipsum dolor sit amet consectetur, adipisicing elit. Et, beatae soluta praesentium accusamus sit ut reiciendis. Pariatur recusandae sunt neque eos cum error facilis rerum consequuntur facere illum perspiciatis itaque, dolor quidem iusto impedit natus ea molestiae voluptatibus fugiat nobis. Dolorem, consequuntur reprehenderit recusandae quae consectetur minima eaque natus maiores nisi libero harum fuga, corporis iure enim illum architecto magnam aliquid ex provident. Earum, recusandae voluptatibus quas eum provident impedit quisquam porro delectus ea neque est veniam minima sint rem quae quia architecto exercitationem atque praesentium molestias repudiandae. Quis unde nostrum laboriosam debitis vero ratione. Ex enim esse molestiae minima.
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut cupiditate neque fuga laborum error officia, ipsam ab omnis eum vero, praesentium, sequi quaerat molestiae fugit voluptates veritatis deserunt quibusdam. Amet consectetur similique voluptatum minus ullam, ad fuga atque dolorem eligendi accusamus laboriosam facilis beatae tenetur cum officiis sunt possimus quisquam molestias ipsum obcaecati! Quaerat, aliquam maiores ducimus ad quam cum voluptatum nemo ullam, mollitia, voluptatem sunt incidunt? Illo voluptates, corrupti voluptatem atque quidem officia a dolores omnis culpa, ipsam ab fugiat, consequuntur dicta sunt nisi laborum autem nemo dignissimos. Possimus ut quos ipsum in eum? Et laboriosam perferendis asperiores officiis, assumenda fugit quam ad sed exercitationem, praesentium perspiciatis repudiandae natus maxime ducimus eos soluta quas sint. Quasi eaque iste quo at doloremque ipsam accusamus voluptatibus odio eveniet impedit. Natus libero corporis omnis nihil sunt officia quidem rerum voluptate soluta, minima, quis, repellendus a deleniti architecto iusto! Exercitationem accusamus unde maiores deserunt perferendis earum blanditiis, esse mollitia at, quam deleniti dolore iste, officia quibusdam! Delectus repellat earum deserunt laudantium velit veniam provident. Rerum deserunt facilis aliquam doloremque impedit. Consequatur, ab, obcaecati voluptates esse necessitatibus ipsam ea repudiandae dolorem voluptatibus minus omnis distinctio labore alias, expedita quasi adipisci velit. Quae, eligendi quidem! */}
                </p>

                <button
                  onClick={() => setOpen(false)}
                  className="mt-4 bg-red-500 text-white px-4 py-2 rounded"
                >
                  Fermer
                </button>
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
