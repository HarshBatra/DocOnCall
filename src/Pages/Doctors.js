import React from "react";
import DoctorsData from "../Constants/DoctorsData";

const Doctors = () => {
  function Card(props) {
    return (
      <a href="/payment">
        <div className="p-4 h-auto shadow-lg rounded-2xl border-2 border-opacity-10 border-teal-500 lg:m-5 md:m-10 m-5 flex justify-center self-center align-middle items-center flex-col transition grow2 w-auto cursor-pointer">
          <div className="md:h-40 mb-2 h-32 w-auto rounded-xl flex justify-center items-center align-middle self-center overflow-clip">
            <img alt="Bestseller" src={props.img} className="self-center" />
          </div>
          <div className="flex justify-between w-full">
            <div className="md:font-medium md:text-sm text-xs">
              {props.name}
            </div>
            <div className="md:font-light md:text-sm text-xs opacity-80">
              {props.experience}+ years
            </div>
          </div>
          <div className="text-teal-500 font-semibold md:text-base text-sm mt-2">
            {props.degree}
          </div>
        </div>
      </a>
    );
  }

  return (
    <div className="justify-center items-center py-32">
      <div id="Doctors">
        <div className="flex justify-center self-center align-middle items-center mb-4 md:mb-10 flex-col">
          <div className="font-bold text-center text-3xl text-teal-500 mb-4">
            Doctors for you
          </div>
          <span className="w-44 h-0.5 bg-gradient-to-r from-white to-white via-teal-500"></span>
        </div>
        <div className="md:mx-20 mx-10 md:grid md:grid-cols-4 flex flex-col">
          {DoctorsData.map((card) => (
            <Card
              key={card.id}
              img={card.imgURL}
              name={card.name}
              degree={card.degree}
              experience={card.experience}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Doctors;
