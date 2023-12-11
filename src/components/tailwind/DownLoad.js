import React from "react";

const DownLoad = () => {
  return (
    <section className="h-[300px] mt-[20px]">
      <div
        className="w-full opacity-90 h-full flex bg-center object-container"
        style={{ backgroundImage: 'url("test.png")' }}
      >
        <div className="text-white flex justify-center items-center flex-col font-bold w-full">
          <h1 className="text-[32px]">Download the app now</h1>
          <p className="text-center my-6">
            Download the bella onajie food app now on
          </p>
          <div>
            <button className="btn-play">PlayStore</button>
            <button className="btn-app">AppStore</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DownLoad;
