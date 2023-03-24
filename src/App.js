import React from "react";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import SignUp from "./Pages/SignUp";
import DocLogin from "./Pages/DocLogin";
import DocSignUp from "./Pages/DocSignUp";
import Payment from "./Pages/Payment";
import VideoCall from "./Pages/VideoCall";
import Doctors from "./Pages/Doctors";
import ScrollToTop from "./Components/ScrollToTop";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <div>
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
          <Route path="/video_call" element={<VideoCall />} />
          <Route path="/doctors" element={<Doctors />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
};

export default App;
