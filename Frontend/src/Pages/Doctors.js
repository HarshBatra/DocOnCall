import React, { useEffect, useState } from "react";
import DoctorsData from "../Constants/DoctorsData";
import axios from "axios";
import { db } from "../firebase-config";
import { getDocs, collection } from "firebase/firestore";
import doctorImg from "../Assets/doctor.jpg"
import { useAuth } from "../contexts/contextsApi";
import ToggleOnIcon from '@mui/icons-material/ToggleOn';
import ToggleOffIcon from '@mui/icons-material/ToggleOff';
import { useNavigate, useSearchParams } from "react-router-dom";

const Doctors = () => {
  const navigate = useNavigate();
  let [params, setSearchParams] = useSearchParams();
  const { 
    specialization, 
    doctors, setDoctors, 
    activeDocs, setActiveDocs, 
    setSelectedDoctor,
    isLoading, setIsLoading,
    setSpecialization
  } = useAuth();
  const handleOnClick = (props) =>{
    if(props?.isActive){
      setSelectedDoctor(activeDocs.get(props?.email));
      navigate("/payment");
    } else{
      alert("Doctor is Offline");
    }
  }

  const Card = (props) => {
    return (
      <div onClick={()=>handleOnClick(props)}>
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
            {props.specialization} ({props.degree})
          </div>
          <div className="">
            {props?.isActive ? 
            <h1 className="text-teal-500 font-semibold md:text-base text-sm mt-2">Online</h1> : 
            <h1 className="text-red-500 font-semibold md:text-base text-sm mt-2">Offline</h1>}
          </div>
        </div>
      </div>
    );
  }

  useEffect(()=>{
    if(params?.get("specialization")) setSpecialization(params.get("specialization"));
  },[]);
  
  useEffect(()=>{
    getDocs(collection(db, "Users")).then((res)=>{
      setIsLoading(true);
      var docs = res?.docs?.map((doc)=>(doc.data()));
      setDoctors(docs?.filter((doc)=>{
        if(specialization==="") return doc.isDoc===true;
        return (doc.isDoc===true && doc.specialization === specialization);
      }));
      setIsLoading(false);
    });
    getDocs(collection(db, "Active")).then((res)=>{
      setActiveDocs(new Map(res?.docs?.map(doc=>[doc.data().email,doc.data().socketId])));
    });
  },[specialization]);

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
          {doctors?.map((card, idx) => (
            <Card
              key={idx}
              img={doctorImg}
              name={card.displayName}
              degree={card.degree}
              experience={card.experience}
              specialization={card.specialization}
              isActive={activeDocs.has(card.email)}
              email={card.email}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Doctors;
