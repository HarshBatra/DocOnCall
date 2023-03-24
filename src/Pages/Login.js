import React from "react";

const Login = () => {
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
            Please enter your <span className="text-teal-500">Login</span>{" "}
            details
          </h1>
          <div className="flex flex-col mt-8">
            <label className="font-medium text-xs ml-2 mb-2">Username</label>
            <input
              className="font-medium text-xs p-3 rounded-full focus:outline-none"
              placeholder="eg. John Doe"
            />
          </div>
          <div className="flex flex-col mt-6">
            <label className="font-medium text-xs ml-2 mb-2">Password</label>
            <input
              className="font-medium text-xs p-3 rounded-full focus:outline-none"
              placeholder="eg. 123456"
            />
          </div>
          <a href="/">
            <button className="px-6 py-2 border-[1px] border-teal-500 text-xl font-medium rounded-full bg-teal-500 text-white ease-in duration-300 hover:bg-white hover:text-teal-500 mt-6 w-full">
              Login
            </button>
          </a>
          <div className="mt-4 ml-2 opacity-60 text-sm">
            New user?{" "}
            <a href="/patient_signup">
              <span className="opacity-100 text-teal-600 font-bold">
                Sign-Up
              </span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
