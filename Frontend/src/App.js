import React, { useEffect } from "react";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import SignUp from "./Pages/SignUp";
import DocLogin from "./Pages/DocLogin";
import DocSignUp from "./Pages/DocSignUp";
import Payment from "./Pages/Payment";
import Doctors from "./Pages/Doctors";
import ScrollToTop from "./Components/ScrollToTop";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Checkout from "./Pages/stripe";
import VideoCall from "./Pages/VideoCall";
import { useAuth } from "./contexts/contextsApi";
import { auth } from "./firebase-config";
import Loading from "./Components/Loading";
import io from "socket.io-client";
export const socket = io.connect(`${process.env.REACT_APP_BackendAPI}`)

const App = () => {
  const { setUser, isLoading, setIsLoading } = useAuth();
  useEffect(() =>{
    const unlisten = auth.onAuthStateChanged((authUser)=>{
         authUser ? setUser(authUser) : setUser(null)
         setIsLoading(false);
         console.log("auth ",authUser);
    });

    return () => {
      setIsLoading(true);
      unlisten();
    }
  }, []);

  return (
    isLoading ? 
      <Loading /> 
      :  <div>
        <Router>
          <ScrollToTop />
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/patient_login" element={<Login />} />
            <Route path="/patient_signup" element={<SignUp />} />
            <Route path="/doctor_login" element={<DocLogin />} />
            <Route path="/doctor_signup" element={<DocSignUp />} />
            <Route path="/payment" element={<Payment />} />
            <Route path="/doctors" element={<Doctors />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/video_call" element={<VideoCall />} />
          </Routes>
          <Footer />
        </Router>
      </div>
  );
};

export default App;
