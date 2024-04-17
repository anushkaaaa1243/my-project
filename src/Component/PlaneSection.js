import React from "react";

const PlaneSection = () => {
  return (
    <div>
    
      <div className="container pt-16">
        <h1 className=" text-gray-600 text-xl font-bold">PLAN YOUR TRIP</h1>
      </div>
      <div className="flex container justify-between">
      <div className="">
        <h1 className="text-6xl mt-2 font-bold">Where to next? </h1>
      </div>
<div>
<button className="font-bold text-xl font-serif w-64 mt-16 hover:bg-blue-600 hover:text-white  border-2 p-2 rounded-full text-center" >View all destinations</button>
</div>
</div>

      <div className="flex mt-24">
        <div className="flex gap-16 container">
          <div className=" relative  ">
            <img
              className="h-[500px] relative   rounded-2xl  "
              src="https://lp-cms-production.imgix.net/2023-03/Asian%20tourist%20visiting%20Florence%2C%20Italy%20By%20Studio%20Marmellata%20Stocksy_txp95a12c14B4D300_Medium_2019114.jpg?auto=format&fit=crop&w=360&ar=1:1&q=75"
              alt=""
              srcset=""
            />
           
            <h1 className="text-3xl font-bold mt-2 mr-5">Florence</h1>
          </div>
          <div>
            <img
              className=" h-[500px]   rounded-2xl "
              src="https://lp-cms-production.imgix.net/2023-03/GettyImages-1257180176.jpg?auto=format&fit=crop&w=360&ar=1:1&q=75"
              alt=""
              srcset=""
            />
            <h1 className="text-3xl font-bold mt-2 mr-5">lbiza</h1>
          </div>
          <div>
            <img
              className="h-[500px]   rounded-2xl "
              src="https://lp-cms-production.imgix.net/2021-10/Colorful%20Lamp%20Festival%20and%20Lantern%20in%20Loi%20Krathong%20at%20Wat%20Lok%20Moli%20is%20a%20beautiful%20old%20temple%20in%20Chiang%20Mai%2C%20Chiag%20Mai%20Province%20Pakin%20Songmor%20GettyImages-1301898346%20rfc.jpg?auto=format&fit=crop&w=360&ar=1:1&q=75"
              alt=""
              srcset=""
            />
            <h1 className="text-3xl font-bold mt-2 mr-5">Thailand</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlaneSection;
