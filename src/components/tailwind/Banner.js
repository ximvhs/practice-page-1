import React from "react";

const Banner = () => {
  return (
    <section className="h-[700px] w-full mt-[130px] bg-red-500">
      <div
        style={{ backgroundImage: 'url("test.png")' }}
        className="h-full w-[100vw] flex object-cover"
      >
        <div className="text-white flex justify-center items-center flex-col font-bold w-full">
          <p className="text-[20px]">Food app</p>
          <h1 className="text-[40px] my-2 text-center">
            Why stay hungry when you can order form Bella Onajie
          </h1>
          <p className="text-[20px]">
            Download the bella onajie food app now on
          </p>
          <div className="mt-[20px]">
            <button className="btn-play">PlayStore</button>
            <button className="btn-app">AppStore</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
