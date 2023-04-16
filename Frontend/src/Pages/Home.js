import React from "react";
import Header from "../Components/Header";
import DoctorSpeciality from "../Components/DoctorSpeciality";
import Specialties from "../Components/Specialties";
import { db } from "../firebase-config";
import { getDocs, collection } from "firebase/firestore";

const Home = () => {
  return (
    <div className="flex flex-col flex-1">
      <Header />
      <Specialties />
      <DoctorSpeciality />
    </div>
  );
};

export default Home;
