import React from "react";
import { RxCross2 } from "react-icons/rx";
import { CiSearch } from "react-icons/ci";
const HeroSection = () => {
  return (
    <div>
      <div className="flex justify-center items-center bg-black  ">
        <div className="flex justify-center  gap-1  items-center text-center bg-black text-[#787778] w-full font-semibold text-xl h-14 ">
          Best Travel is here!
          <span className="text-white underline">
            Discover 2024’s destinations
          </span>
        </div>
        <RxCross2 className="text-white text-2xl mx-10 " />
      </div>
      <div className="flex relative w-full">
        <img
          className="w-[480px] object-cover  brightness-75 hover:brightness-95"
          src="https://lp-cms-production.imgix.net/2024-03/GettyImages-1898786282.jpg?auto=format&w=600&h=800&dpr=1&fit=crop&q=40"
          alt=""
          srcset=""
        />
        <div className="absolute bottom-14 left-6">
          <h1 className=" text-white text-4xl w-[400px] font-bold">
            How to choose the best Hawaiian island for your trip
          </h1>
        </div>
        <img
          className="w-[460px] object-cover brightness-75 hover:brightness-95 "
          src="https://lp-cms-production.imgix.net/2024-03/florence-vs-venice-2024.png?auto=format&w=600&h=800&dpr=1&fit=crop&q=40"
          alt=""
          srcset=""
        />
        <div className="absolute bottom-14 self-center right-6 flex gap-3">
          <h1 className=" text-white text-4xl  font-bold">
            Florence vs Venice: how to choose between two Italian icons
          </h1>
        </div>
        <img
          className="w-[500px] object-cover opacity-80 hover:opacity-95 "
          src="https://lp-cms-production.imgix.net/2024-02/Greece-Crete-EMS-FORSTER-PRODUCTIONS-GettyImages-1352338805-RFC.jpg?auto=format&w=1440&h=810&fit=crop&q=75 "
          alt=""
          srcset=""
        />
        <div className="absolute bottom-14 right-16">
          <h1 className=" text-white text-4xl w-[400px] font-bold">
            13 things to know before you go to Greece and the Greek Islands
          </h1>
        </div>
        <div className="absolute top-0 left-24 flex ">
          <button className="text-white text-lg font-bold pt-10 flex gap-2">
            <CiSearch className="mt-1 text-[20px] " /> Search
          </button>
        </div>
        <div className="absolute flex gap-10 right-40 top-0 pt-10">
          <h1 className=" text-white text-xl font-semibold">Destination</h1>
          <h1 className=" text-white text-xl font-semibold">Planing</h1>
          <h1 className=" text-white text-xl font-semibold">Stories</h1>
          <h1 className=" text-white text-xl font-semibold">Shop</h1>
        </div>
        <div className="absolute top-[40%] left-1/2 -translate-x-1/2 -translate-y-1">
          <h1 className="text-white font-bold text-6xl opacity-100 ">
            Discover story-worthy
            <span className="flex justify-center items-center pt-5">
              travel moments
            </span>
          </h1>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
