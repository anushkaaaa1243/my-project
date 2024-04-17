import React from 'react'
import { RxCross2 } from "react-icons/rx";
import { GiEarthAsiaOceania } from "react-icons/gi";
import { IoIosSearch } from "react-icons/io";
import { CiBookmark } from "react-icons/ci";
const Navbar = () => {
  return (
    
    <div className=''>
    <div className="flex justify-center items-center bg-black  ">
      <div className="flex justify-center  gap-1  items-center text-center bg-black text-[#787778] w-full font-semibold text-xl h-14 ">
        Best Travel is here!
        <span className="text-white underline">
          Discover 2024’s destinations
        </span>
      </div>
      <RxCross2 className="text-white text-2xl mx-10 " />
    </div>
    <div className='flex justify-evenly  mt-5  '>
    <div className='flex gap-16 justify-center items-center'>
    <div className='flex justify-center items-center gap-1 text-2xl font-bold font-serif text-[#0e00d9]'>
    <a href='#/' className='flex gap-1'>lonely <GiEarthAsiaOceania className='mt-1'/> planet</a>
    </div>
    <h1 className='text-xl font-semibold font-serif hover:text-[#0070D9]'  >Destination</h1>
    <h1 className='text-xl font-semibold font-serif hover:text-[#0070D9]' >Planing</h1>
    <h1 className='text-xl font-semibold font-serif hover:text-[#0070D9]' >Inspiration</h1>
    <h1 className='text-xl font-semibold font-serif hover:text-[#0070D9]' >Shop</h1>
    </div>
<div className='flex gap-10 justify-center items-center '>
<p className='flex  text-xl font-semibold font-serif hover:text-[#0070D9] gap-2'><IoIosSearch className=' text-2xl font-bold'/>Search</p>

<p className='flex text-xl font-semibold font-serif hover:text-[#0070D9] gap-2'><CiBookmark  className=' text-2xl font-bold'/> Save</p>
<button className='bg-[#2647ff] w-32 p-3 text-center border-1 rounded-full text-white text-xl font-bold hover:bg-[#267DFF]'>Sign in</button>
   
</div>
   
    
    </div>
    </div>
  )
}

export default Navbar