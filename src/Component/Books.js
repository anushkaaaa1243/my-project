import React from 'react'
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
const Books = () => {
  return (
    <div>
    <div className='relative'>
    <div className='mt-20'>
    <img src="https://lonelyplanetstatic.imgix.net/marketing/2022/BIT/bit-guidebook-bg-desk.jpeg?auto=format&q=75&w=3840" alt=""/>
    </div>

<div className='absolute top-20 left-32 font-bold text-white'>
<h1 className='text-xl text-[#C2C2BC]' >SHOP OUR BOOKS</h1>
<p className='text-5xl w-[30%] font-bold mt-5'>Our guidebooks & travel books</p>
<div>
<h1 className='w-[30%] mt-10 text-white text-xl'>Whether you’re interested in traveling to a new city, going on a cruise, or cooking a new dish — we’re committed to inspiring you to experience travel in a whole new way. Lonely Planet’s collection of 825+ travel and guidebooks is sure to inspire the traveler within.</h1>
<button className="font-bold text-xl  w-44 mt-16 hover:bg-white hover:text-black  border-2 p-3 rounded-full text-center" >View all books</button>
</div>

</div>
    </div>
    <div>
    <div className='bg-blue-700 h-[650px] pt-20  '>
    <div className='flex items-center justify-evenly'>
    <h1 className='text-white  text-6xl font-bold '>#lonelyplanet</h1>
    <div className='flex gap-4  justify-center items-center'>
    <h1 className='text-white  text-3xl font-bold '>FOLLOW LONELY PLANET:</h1>
    <div className=' gap-2 flex justify-center items-center'>
    <FaFacebook className='text-white  text-4xl font-bold mt-1'/> 
    <FaInstagram className='text-white  text-4xl font-bold mt-1'/>
    <FaTwitter  className='text-white  text-4xl font-bold mt-1'/>
    <FaTiktok className='text-white  text-4xl font-bold mt-1'/>
    </div>
    </div>
    </div>
    <div className='mt-20 mb-10 flex'>
    <div>
    <img src="https://lonelyplanetstatic.imgix.net/marketing/2022/ig/ali-vonlewinski.jpg?auto=format&fit=fill&q=75"  alt="" className='w-[300px] brightness-75 hover:brightness-95'/>
    </div>
    <div>
    <img src="https://lonelyplanetstatic.imgix.net/marketing/2022/ig/dominik-kobler.jpg?auto=format&fit=fill&q=75&w=750" alt="" className='w-[300px] brightness-75 hover:brightness-95'/>
    </div>
    <div>
    <img src="https://lonelyplanetstatic.imgix.net/marketing/2022/ig/les_carnets_de_mel.jpg?auto=format&fit=fill&q=75&w=750"  alt="" className='w-[300px] brightness-75 hover:brightness-95'/>
    </div>
    <div>
    <img src="https://lonelyplanetstatic.imgix.net/marketing/2022/ig/richardwhitetravels.jpg?auto=format&fit=fill&q=75"  alt="" className='w-[300px] brightness-75 hover:brightness-95'/>
    </div> 
    <div>
    <img src="https://lonelyplanetstatic.imgix.net/marketing/2022/ig/o_thessalonikios.jpg?auto=format&fit=fill&q=75&w=750"  alt="" className='w-[300px] brightness-75 hover:brightness-95'/>
    </div> 
    <div>
    <img src="https://lonelyplanetstatic.imgix.net/marketing/2022/ig/pandeyrr.jpg?auto=format&fit=fill&q=75&w=750"  alt="" className='w-[300px] brightness-75 hover:brightness-95'/>
    </div> 
    </div>
    </div>
    </div>
    </div>
  )
}

export default Books