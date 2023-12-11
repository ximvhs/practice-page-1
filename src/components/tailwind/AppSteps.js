import React from "react";

const AppSteps = () => {
  return (
    <section>
      <div className="container mx-auto">
        <h2 className="text-[42px] font-bold text-center my-[20px]">
          How the app works
        </h2>
        <div className="w-full h-[5px] flex justify-center my-5">
          <hr className="w-[70%] border-[1.5px] border-stone-600" />
        </div>
        <div className="flex flex-col md:flex-row">
          <div className="flex order-1 basis-1/2 ">
            <img src="iron.png" alt="#" />
          </div>
          <div className="flex flex-col items-center p-8 md:order-1 basis-1/2 justify-center ">
            <span className="text-[20px] font-bold text-orange-600">
              Create an account
            </span>
            <h2 className="text-[32px] font-bold text-center my-[20px] md:text-justify">
              Create/login to an existing account to get started
            </h2>
            <p className="text-[18px] text-gray-400 text-center md:text-justify">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt
              amet, atque, assumenda quasi veniam vitae illo harum quia quod
              commodi iusto fugiat quo id tenetur molestias odio nulla alias
              neque.
            </p>
          </div>
        </div>
        <div className="flex flex-col md:flex-row">
          <div className="flex order-1 basis-1/2 ">
            <img src="iron.png" alt="#" />
          </div>
          <div className="flex flex-col items-center p-8 basis-1/2 justify-center ">
            <span className="text-[20px] font-bold text-orange-600">
              Create an account
            </span>
            <h2 className="text-[32px] font-bold text-center my-[20px] md:text-justify">
              Create/login to an existing account to get started
            </h2>
            <p className="text-[18px] text-gray-400 text-center md:text-justify">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt
              amet, atque, assumenda quasi veniam vitae illo harum quia quod
              commodi iusto fugiat quo id tenetur molestias odio nulla alias
              neque.
            </p>
          </div>
        </div>
        <div className="flex flex-col md:flex-row">
          <div className="flex order-1 basis-1/2 ">
            <img src="iron.png" alt="#" />
          </div>
          <div className="flex flex-col items-center p-8 md:order-1 basis-1/2 justify-center ">
            <span className="text-[20px] font-bold text-orange-600">
              Create an account
            </span>
            <h2 className="text-[32px] font-bold text-center my-[20px] md:text-justify">
              Create/login to an existing account to get started
            </h2>
            <p className="text-[18px] text-gray-400 text-center md:text-justify">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt
              amet, atque, assumenda quasi veniam vitae illo harum quia quod
              commodi iusto fugiat quo id tenetur molestias odio nulla alias
              neque.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppSteps;
