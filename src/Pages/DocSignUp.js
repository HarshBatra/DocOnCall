import React,{useRef,useState} from "react";
import { auth } from "../firebase-config";
import { updateProfile, createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import SpecializationData from "../Constants/SpecializationData";
import axios from "axios";
  
const DocSignUp = () => {
  const emailRef = useRef();
  const passRef = useRef();
  const nameRef = useRef();
  const expRef = useRef();
  const specRef = useRef();
  const degRef = useRef();

  const [errorMsg, setErrorMsg] = useState(null);

  const navigate = useNavigate();

  const handleOnSignup = async (e) =>{
    e.preventDefault();
    if(!emailRef.current.value || !passRef.current.value || !nameRef.current.value || !expRef.current.value || !specRef.current.value || !degRef.current.value){
      alert("Please fill all the fields");
      return;
    }
    createUserWithEmailAndPassword(auth, emailRef.current.value, passRef.current.value)
      .then((userCredential)=>{
        updateProfile(auth.currentUser, {
          displayName: nameRef.current.value,
        }).then(() => {
            auth?.currentUser?.getIdToken(true).then((token)=>{
              axios.post(`${process.env.REACT_APP_BackendAPI}/api/setclaims`,
              {
                uid:userCredential.user.uid,
                isDoc:true
              })
              .then(res=>{
                console.log(res);
              })
              .catch(err=>{
                console.log(err);
              });
            });
  
            axios.post(`${process.env.REACT_APP_BackendAPI}/api/users`,
              {
                displayName:nameRef.current.value,
                email:emailRef.current.value,
                isDoc:true,
                experience:expRef.current.value,
                specialization : specRef.current.value,
                degree:degRef.current.value
              })
              .then(res=>console.log(res))
              .catch(err=>alert(err));
  
            // alert("Successfully Sign up");
            navigate("/");
        }).catch((err) => {
          console.log(err.message);
          setErrorMsg(err.message);
          alert(err.message);
        });
      })
      .catch((err)=>{
        console.log(err.message);
        setErrorMsg(err.message);
        alert(err.message);
      })
  }
  return (
    <div className="flex justify-center">
      <div
        className="md:w-96 mx-10 px-14 py-16 rounded-[20px] my-40"
        style={{
          background:
            "linear-gradient(147.38deg, rgba(19, 168, 158, 0.28) 0%, rgba(19, 168, 158, 0) 100%)",
          boxShadow: "5px 5px 20px 2px #00000040",
        }}
      >
        <div className="flex flex-col">
          <h1 className="md:text-3xl text-2xl font-bold">
            <span className="text-teal-500">Register</span> as a DOCTOR
          </h1>
          <div className="flex flex-col mt-8">
            <label className="font-medium text-xs ml-2 mb-2">Name</label>
            <input
              className="font-medium text-xs p-3 rounded-full focus:outline-none"
              placeholder="eg. John Doe"
              ref={nameRef}
            />
          </div>
          <div className="flex flex-col mt-8">
            <label className="font-medium text-xs ml-2 mb-2">Speciality</label>
            <select id="cars" className="font-medium text-xs p-3 pr-6 rounded-full focus:outline-none" ref={specRef}>
              {
                SpecializationData.map((val,ind)=>{
                  return(
                    <option value={val.name} key={ind}>{val.name}</option>
                  )
                })
              }
            </select>          
          </div>
          <div className="flex flex-col mt-8">
            <label className="font-medium text-xs ml-2 mb-2">Degree</label>
            <select id="cars" className="font-medium text-xs p-3 pr-6 rounded-full focus:outline-none" ref={degRef}>
              <option value="None" key="-1">None</option>
              {
                SpecializationData.map((val,ind)=>{
                  return(
                    <option value={val.name} key={ind}>MD</option>
                  )
                })
              }
            </select>          
          </div>
          <div className="flex flex-col mt-8">
            <label className="font-medium text-xs ml-2 mb-2">Experience</label>
            <input
              className="font-medium text-xs p-3 rounded-full focus:outline-none"
              placeholder="eg. 8 (in years)"
              type="number"
              ref={expRef}
            />
          </div>
          <div className="flex flex-col mt-8">
            <label className="font-medium text-xs ml-2 mb-2">Email</label>
            <input
              className="font-medium text-xs p-3 rounded-full focus:outline-none"
              placeholder="eg. John Doe"
              ref={emailRef}
            />
          </div>
          <div className="flex flex-col mt-6">
            <label className="font-medium text-xs ml-2 mb-2">Password</label>
            <input
              className="font-medium text-xs p-3 rounded-full focus:outline-none"
              placeholder="eg. 123456"
              type="password"
              ref={passRef}
            />
          </div>
          <a href="/">
            <button className="px-6 py-2 border-[1px] border-teal-500 text-xl font-medium rounded-full bg-teal-500 text-white ease-in duration-300 hover:bg-white hover:text-teal-500 mt-6 w-full"
            onClick={handleOnSignup}>
              Sign-Up
            </button>
          </a>
          <div className="mt-4 ml-2 opacity-60 text-sm">
            Already a user?{" "}
            <a href="/doctor_login">
              <span className="opacity-100 text-teal-600 font-bold">Login</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DocSignUp;
