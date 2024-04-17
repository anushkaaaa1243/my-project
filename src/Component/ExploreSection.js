import React from "react";
import { CiBookmark } from "react-icons/ci";
import Card from "./Card";
const ExploreSection = () => {
  return (
    <div>
      <div className="">
        <div className="container ">
          <h1 className="mt-28 text-xl font-bold text-red-400  flex gap-5">
            TRAVEL<span>STORIES</span> <span>AND</span> <span>NEWS</span>
          </h1>
          <div className="flex justify-between">
          <h1 className="text-7xl mt-10 font-medium font-serif">
            Explore our latest stories
          </h1>
          <div className="flex gap-4">
          <div>
          <button className="font-bold text-xl font-serif w-60 mt-16 hover:bg-blue-600 hover:text-white  border-2 p-2 rounded-full text-center" >Read more news</button>
          </div>
          <div className="flex">
          <button className="font-bold text-xl font-serif w-60 mt-16 hover:bg-blue-600 hover:text-white  border-2 p-2 rounded-full text-center" >Read more articles</button>
          </div>
          </div>
          </div>
</div>
        <div className="flex container gap-6 relative mt-20 ">
          <div className=" ">
            <img
              className="max-w-full object-cover h-[820px] w-[900px] rounded-xl brightness-50"
              src="https://lp-cms-production.imgix.net/2024-04/GettyImages-1162785687.jpg?auto=format&w=780&h=425&fit=crop&q=75"
              alt=""
              srcset=""
            />
            <div className="absolute top-3 right-[42vw] p-2 bg-black/50 rounded-full hover:bg-[#121212]">
              <CiBookmark className="text-2xl text-gray-100 text-accentDark  " />
            </div>

            <div className="absolute bottom-20 left-14 ">
              <h1 className="font-bold text-xl text-white">TIPS & ADVICE</h1>
              <div>
                <h1 className=" text-4xl text-wrap text-white font-bold mt-5 w-[600px]">
                8 of the best places to visit in Singapore
                </h1>
                <h1 className="text-white font-semibold text-xl mt-4">
                  Mar 11, 2024 • 8 min read
                </h1>
                <h1 className="text-white font-medium text-xl mt-4 w-[545px]">
                Singapore's allure goes beyond its iconic hotels, manicured gardens and world-class airport – here are the best places to visit when you arrive.
                </h1>
              </div>
            </div>
            </div>
            

          <Card/>
          </div>

          
          </div>
          </div>
        );
      };
      
export default ExploreSection;
