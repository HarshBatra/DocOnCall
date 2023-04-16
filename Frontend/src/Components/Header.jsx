import React from "react";

const Header = () => {
  return (
    <div className="flex md:justify-around justify-center md:flex-row flex-col mb-20 md:mt-40 mt-20 md:mx-40 mx-10">
      <img
        className="md:h-96 md:w-96 my-4 md:mr-32"
        src={require("../Assets/headerimg.jpg")}
        alt="DocOnCall"
      />
      <div className="flex flex-col md:mr-32">
        <div className="text-3xl font-semibold text-gray-500">
          Your Doctor, On-Demand: Anytime, Anywhere with{" "}
          <span className="text-teal-500 font-bold">DocOnCall</span>.
        </div>
        <div className="text-sm text-gray-500 opacity-75 mt-6 text-justify">
          DocOnCall is a telemedicine platform that provides you with virtual
          medical care at your convenience. With DocOnCall, you can connect with
          certified healthcare professionals, including doctors, nurses, and
          specialists, from the comfort of your own home or wherever you are.
          Whether you have a minor health concern, need a prescription refill,
          or require ongoing treatment for a chronic condition, DocOnCall makes
          it easy for you to get the care you need without having to visit a
          physical clinic. Our user-friendly platform is designed to make
          healthcare accessible and affordable for everyone, with secure video
          consultations, real-time chat, and easy scheduling options. With
          DocOnCall, you can be confident that you're receiving high-quality
          medical care from the comfort of your own home.
        </div>
        <div className="flex flex-row mt-6 font-medium align-middle content-center text-center items-center">
          <a href="/patient_login">
            <button className="bg-teal-600 transition-all text-white hover:bg-white hover:text-teal-600 hover:border-teal-600 hover:border-2 w-32 h-8 px-4 rounded flex flex-row align-middle justify-center content-center text-center items-center">
              Consult
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Header;
