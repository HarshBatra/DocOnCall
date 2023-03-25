import React from "react";
import { auth } from "../firebase-config";
import useGetUser from "./getUser";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const currentUser = useGetUser();
  const navigate = useNavigate();

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
        <label for="nav-check">
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
        {!currentUser ? (
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
    </div>
  );
};

export default Navbar;
