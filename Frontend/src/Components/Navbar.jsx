import React, { useEffect } from "react";
import Button from "@material-ui/core/Button"
import { auth } from "../firebase-config";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/contextsApi";
import io from "socket.io-client";
import { answerCall } from "../Pages/VideoCall";
export const socket = io.connect(`${process.env.REACT_APP_BackendAPI}`)

const Navbar = () => {
  const { 
    user, 
    setMe, 
    receivingCall, 
    callAccepted, 
    name, 
    stream,
    caller,
    callerSignal, 
    userVideo, 
    connectionRef,
    setCallAccepted,
    setReceivingCall,
    setCaller,
    setCallerSignal,
    setName,
    setConnectedWith,
  } = useAuth();
  const navigate = useNavigate();

  useEffect(()=>{
    socket.emit("sendid");
    socket.on("me", (id) => {
			setMe(id);
      user.getIdTokenResult().then((token)=>{
        if(user && token?.claims?.isDoc) {
          socket.emit("active", {email:user.email, socketId:id});
        }
      })
		})
    socket.on("callUser", (data) => {
			setReceivingCall(true);
			setCaller(data.from);
			setName(data.name);
			setCallerSignal(data.signal);
			setConnectedWith(data.from);
		})
  },[]);

  const handleOnClick = () => {
    const ele = document.querySelector(".nav-btn label");
    if (ele) {
      ele.click();
    }
  };

  const handleOnSignOut = async (e) => {
    await signOut(auth);
    navigate("/");
  };

  return (
    <div className="nav w-screen flex flex-row shadow-lg h-16 items-center fixed z-50 bg-white bg-opacity-60 backdrop-blur-md">
      <input type="checkbox" id="nav-check" />
      <a href="/">
        <div className="text-2xl font-bold text-teal-600 md:ml-20 ml-8">
          DocOnCall
        </div>
      </a>
      <div className="nav-btn">
        <label htmlFor="nav-check">
          <span></span>
          <span></span>
          <span></span>
        </label>
      </div>
      <div className="nav-links flex flex-row absolute right-40">
        <div className="items-center text-teal-600 font-medium flex flex-col text-base md:flex-row md:mt-0 mt-6 gap-y-8 md:gap-y-0 gap-x-10">
          <a href="/" onClick={handleOnClick}>
            <div className="cursor-pointer hover:drop-shadow-md">Home</div>
          </a>
          <a href="/#Specialties" onClick={handleOnClick}>
            <div className="cursor-pointer hover:drop-shadow-md">
              Specialties
            </div>
          </a>
          <a href="#Footer" onClick={handleOnClick}>
            <div className="cursor-pointer hover:drop-shadow-md">
              Contact Us
            </div>
          </a>
        </div>
        {!user ? (
          <>
            <div className="flex flex-row md:ml-16 md:mt-0 mt-8 gap-x-4 font-medium align-middle justify-center content-center text-center items-center">
              <a href="/patient_login">
                <button className="bg-teal-600 transition-all text-white hover:bg-white hover:text-teal-600 hover:border-teal-600 hover:border-2 w-32 h-8 px-4 rounded flex flex-row align-middle justify-center content-center text-center items-center">
                  Login
                </button>
              </a>
            </div>
            <div className="flex flex-row md:ml-8 md:mt-0 mt-8 gap-x-4 font-medium align-middle justify-center content-center text-center items-center">
              <a href="/patient_signup">
                <button className="bg-teal-600 transition-all text-white hover:bg-white hover:text-teal-600 hover:border-teal-600 hover:border-2 w-32 h-8 px-4 rounded flex flex-row align-middle justify-center content-center text-center items-center">
                  Sign Up
                </button>
              </a>
            </div>
          </>
        ) : (
          <div className="flex flex-row md:ml-16 md:mt-0 mt-8 gap-x-4 font-medium align-middle justify-center content-center text-center items-center">
            <a href="/">
              <button
                className="bg-teal-600 transition-all text-white hover:bg-white hover:text-teal-600 hover:border-teal-600 hover:border-2 w-32 h-8 px-4 rounded flex flex-row align-middle justify-center content-center text-center items-center"
                onClick={handleOnSignOut}
              >
                Sign Out
              </button>
            </a>
          </div>
        )}
      </div>
      <div className="absolute right-6 top-[5rem]">
				{receivingCall && !callAccepted ? (
						<div className="flex flex-col justify-center align-middle">
						<h1 >{name} is calling...</h1>
						<Button variant="contained" color="primary" onClick={()=>answerCall({
              setCallAccepted, stream, caller, userVideo, callerSignal, connectionRef, navigate
            })}>
							Answer
						</Button>
					</div>
				) : null}
			</div>
    </div>
  );
};

export default Navbar;
