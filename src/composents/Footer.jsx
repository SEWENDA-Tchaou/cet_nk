import React from 'react'
import tel from '../assets/tel.png'
import mail from '../assets/mail.png'
import copyright from '../assets/copyright.png'

function Footer() {
  return (
    <div id='contacts' className=''>
      <h1 className='text-xl md:text-4xl text-center font-bold my-10'>NOS CONTACTS</h1>
      <div className="flex justify-center items-center gap-6 ">
        <div className=" justify-center items-center ">
          <img className='mb-3' src={tel} alt="" srcset="" />
          <img src={mail} alt="" srcset="" />
        </div>
        <div className=" justify-center items-center  ">
          <p className='mb-3 text-xl'>90 26 08 94 / 91 79 10 30</p>
          <p className='text-xl'>cetnk@gmail.com</p>
        </div>
      </div>
      <div className="flex justify-center items-center mt-10 py-3 bg-[#FB8014]">
        <img src={copyright} alt="" srcset="" />
        <p className='text-white mx-3'>written by KnowTech 91 62 24 97</p>
      </div>
    </div>
  )
}
export default Footer