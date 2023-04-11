import React from "react";
import Header from "../Components/Header";
import DoctorSpeciality from "../Components/DoctorSpeciality";
import Specialties from "../Components/Specialties";
import { db } from "../firebase-config";
import { getDocs, collection } from "firebase/firestore";
// import { getDatabase, ref, push, set } from "firebase/database";

const Home = () => {
  // const db2 = getDatabase();
  // const postListRef = ref(db2, 'Users');
  // console.log("post = ",postListRef);
  getDocs(collection(db, "Users")).then((res)=>{
   console.log(res.docs.map((doc)=>(doc.data())));
  });
  return (
    <div className="flex flex-col flex-1">
      <Header />
      <Specialties />
      <DoctorSpeciality />
    </div>
  );
};

export default Home;
