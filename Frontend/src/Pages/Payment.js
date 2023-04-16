import React from "react";
import { useNavigate } from "react-router-dom"

const Payment = () => {
  const navigate = useNavigate();
  const handleOnClick = () =>{
    navigate("/video_call");
  }
  return (
    <div className="h-screen mx-10 flex flex-col justify-center items-center">
      <div className="w-auto flex items-center border-teal-300 border-2 p-4 rounded-xl">
        <div>
          Payment of <span className="font-bold text-teal-500">Rs. 399</span>{" "}
          needs to be done
        </div>
        <button className="bg-teal-600 transition-all text-white hover:bg-white hover:text-teal-600 hover:border-teal-600 hover:border-2 w-32 h-8 px-4 md:ml-4 ml-2 rounded flex flex-row align-middle justify-center content-center text-center items-center" onClick={handleOnClick}>
          Pay Now
        </button>
      </div>
      <div className="font-normal text-sm opacity-70 m-4">
        After Payment, you'll be redirected to the{" "}
        <span className="font-bold text-teal-500">Video Chat</span> with your
        doctor.
      </div>
    </div>
  );
};

export default Payment;
