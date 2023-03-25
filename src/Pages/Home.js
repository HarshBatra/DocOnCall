import React from "react";
import Header from "../Components/Header";
import DoctorSpeciality from "../Components/DoctorSpeciality";
import Specialties from "../Components/Specialties";

const Home = () => {
  return (
    <div className="flex flex-col flex-1">
      <Header />
      <DoctorSpeciality />
      <Specialties />
    </div>
  );
};

export default Home;
