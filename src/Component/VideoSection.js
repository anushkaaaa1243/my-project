import React from "react";

const VideoSection = () => {
  return (
    <div>
      <div className="video ">
        <div className="mt-60 relative ">
          <iframe
            className="h-[100vh] w-[98.7vw] "
            src="https://lonelyplanetstatic.imgix.net/marketing/best-in-travel/2024/video/campaign.mp4"
            title="YouTube video player "
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
          <div className="absolute bottom-[50%]  left-[30%]">
            <h1 className="text-6xl text-white font-bold">
              Best IN TRAVEL 2024
            </h1>
            <div className="absolute left-[30%]">
              <button className="mt-10 border border-white rounded-full bg-white font-semibold px-3 py-1  hover:text-white hover:bg-blue-700 hover:border-blue-700">
                Discover the winners
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoSection;
