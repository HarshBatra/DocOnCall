import React from "react";
import SpecializationData from "../Constants/SpecializationData";

function Card(props) {
  return (
    <a href="/doctors">
      <div className="rounded-lg bg-white hover:bg-teal-100 cursor-pointer drop-shadow-lg my-4 md:mx-8 mx-4 flex items-center justify-center transition grow p-4">
        <div className="font-light md:font-medium text-xs md:text-sm text-teal-500 w-full text-center">
          {props.name}
        </div>
      </div>
    </a>
  );
}

const DoctorSpeciality = () => {
  return (
    <>
      <div className="mt-2 mb-20 md:mx-12">
        <div className="flex flex-col justify-center items-center pb-6 md:pb-10 mx-10">
          <h1 className="text-center text-3xl font-semibold text-gray-500">
            Choose from{" "}
            <span className="text-teal-500 font-bold">Specializations</span>
          </h1>
          <span className="w-44 h-0.5 m-6 bg-gradient-to-r from-white to-white via-teal-500"></span>
        </div>
        <div className="w-auto h-auto grid md:grid-cols-4 grid-cols-2 mx-6 align-top items-start">
          {SpecializationData.map((icon) => (
            <Card key={icon.key} name={icon.name} />
          ))}
        </div>
      </div>
    </>
  );
};

export default DoctorSpeciality;
