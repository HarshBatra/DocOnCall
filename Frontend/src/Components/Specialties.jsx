import React from "react";
import SpecialtiesData from "../Constants/SpecialtiesData";
import { useAuth } from "../contexts/contextsApi";
import { useNavigate } from "react-router-dom";
import SpecializationData from "../Constants/SpecializationData";
import axios from "axios";

function Card(props) {
  const { setCategory, setSpecialization } = useAuth();
  const navigate = useNavigate();
  const handleOnClick = (e)=>{
    setCategory(props.category);
    setSpecialization(props.specialization);
    navigate("/doctors")
  }

  // const fn = () =>{
  //   const data = SpecializationData;
  //   data.forEach((val, idx)=>{
  //     for(let i=0;i<5;i++){
  //       axios.post(`${process.env.REACT_APP_BackendAPI}/api/users`,{
  //         displayName:`Doctor ${idx}${i}`,
  //         email:`Doctor@${idx}${i}gmail.com`,
  //         isDoc:true,
  //         experience:`${idx}${i}`,
  //         specialization : val.specialization,
  //         degree:`MBBS${idx}${i}`
  //       })
  //       .then(res=>console.log(res))
  //       .catch(err=>alert(err));
  //     }
  //   })
  // }


  return (
    <h1 onClick={handleOnClick}>
      <div className="flex flex-col justify-center items-center">
        <div className="rounded-[50%] bg-white hover:bg-teal-100 cursor-pointer drop-shadow-lg md:h-24 md:w-24 h-16 w-16 mb-4 flex items-center justify-center transition grow">
          <img
            src={props.img}
            alt={props.category}
            className="md:p-4 p-3 relative drop-shadow-md"
          />
        </div>
        <div className="font-light md:font-medium text-xs md:text-sm text-teal-500 mb-8 w-full text-center px-2">
          {props.category}
        </div>
      </div>
    </h1>
  );
}

const Specialties = () => {
  return (
    <>
      <div className="mt-2 mb-20 md:mx-12">
        <div className="flex flex-col justify-center items-center pb-6 md:pb-10 mx-10">
          <h1 className="text-center text-3xl font-semibold text-gray-500">
            Choose from{" "}
            <span className="text-teal-500 font-bold">Symptoms</span>
          </h1>
          <span className="w-44 h-0.5 m-6 bg-gradient-to-r from-white to-white via-teal-500"></span>
        </div>
        <div className="w-auto h-auto grid md:grid-cols-6 grid-cols-3 mx-6 align-top items-start">
          {SpecialtiesData.map((icon) => (
            <Card key={icon.key} img={icon.icon} category={icon.category} specialization={icon.specialization} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Specialties;
