import React from "react";

const Footer = () => {
  return (
    <div
      id="Footer"
      className="flex overflow-clip flex-col md:px-20 pt-2 md:pt-10 pb-20 w-full md:justify-around justify-center self-center md:text-left text-center items-center align-top bg-teal-900 relative"
    >
      <div className="flex md:flex-row flex-col w-full md:justify-between justify-center self-center md:text-left text-center items-center align-middle">
        <div className="flex flex-col gap-6 md:gap-12 my-8 z-20">
          <div className="text-2xl font-bold text-white">DocOnCall</div>
          <div className="flex flex-col">
            <p className="text-white font-bold">Contact Us</p>
            <p className="text-xs text-teal-300 md:text-base">
              New Delhi, Delhi, India 🧡🤍💚
            </p>
          </div>
          <div className="text-xs text-teal-300 md:text-base">
            Find this project on{" "}
            <a href="https://github.com/HarshBatra/DocOnCall">
              <span className="text-white font-bold">GitHub</span>
            </a>
          </div>
        </div>

        <div className="flex flex-col justify-between mt-3">
          <div className="flex flex-col gap-2 md:gap-4 font-medium mb-8 text-teal-300 text-base">
            <a href="/#Specialties">
              <p>Specialties</p>
            </a>
            <a href="/doctor_login">
              <p>DOCTOR Login</p>
            </a>
            <a href="/doctor_signup">
              <p>DOCTOR Sign-Up</p>
            </a>
            <a href="/patient_login">
              <div className="flex font-semibold hover:bg-white hover:text-teal-500 hover:border-teal-500 hover:border-2 justify-center items-center text-sm text-white bg-teal-500 rounded-2xl w-60 h-8 shadow-[0px_4px_4px_rgba(0,0,0,0.25)] cursor-pointer mt-2 transition-all">
                CONSULT
              </div>
            </a>
          </div>
          <div className="text-white opacity-50 text-xs text-center tracking-widest md:mt-16 mb-4 md:mb-0">
            {new Date().getFullYear()} @DocOnCall. All rights Reserved.
          </div>
        </div>
      </div>

      <div className="vert-move2 absolute w-[250px] h-[250px] top-[10rem] left-[28rem] rounded-full bg-gradient-to-b from-teal-500 z-10"></div>
      <div className="vert-move1 absolute w-[300px] h-[300px] top-[-12rem] left-[83rem] rounded-full bg-gradient-to-b from-teal-500 z-10"></div>
      <div className="vert-move3 absolute w-[250px] h-[250px] top-[20rem] left-[-13rem] rounded-full bg-gradient-to-b from-teal-500 z-10"></div>
      <div className="vert-move absolute w-[70px] h-[70px] bottom-[10rem] right-[-0.5rem] rounded-full bg-gradient-to-tl from-teal-500 z-10"></div>
      <div className="w-full h-[0.1rem] my-4 bg-gradient-to-tr from-transparent to-transparent via-teal-100"></div>
      <div className="-mb-10">
        <p className="text-teal-300 text-bold text-sm">
          Developed with ❤️ by{" "}
          <a href="https://github.com/HarshBatra">
            <span className="text-white cursor-pointer">Harsh Batra</span>
          </a>{" "}
          &{" "}
          <a href="https://github.com/Xaier310">
            <span className="text-white cursor-pointer">
              Pradeep Vishwakarma
            </span>
          </a>
        </p>
      </div>
    </div>
  );
};

export default Footer;
