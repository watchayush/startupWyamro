import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Tour from "../Tour/Tour";
import Navbar from "../../components/molecules/Navbar/Navbar";
import TourGallery from "../TourGallery/TourGallery";
import Home from "../Home/Home";
import Courses from "../Courses/Courses";
import "./AppComponent.css";
import Footer from "../../components/molecules/Footer/Footer";
import ContactUs from "../ContactUs/ContactUs";
import AboutUs from "../AboutUs/AboutUs";
import Admission from "../Admission/Admission";
import Members from "../Members/Members";

export default function AppComponent() {
  return (
    <div>
      {/* <div className="topBar"></div> */}
      <BrowserRouter>
        <Navbar />
        <Routes>
          {/* <Route path="/" element={<Tour />} /> */}
          <Route path="/" element={<Home />} />
          <Route path="/tour" element={<Tour />} />
          <Route path="/tourGallery" element={<TourGallery />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/courses/:slug" element={<Courses />} />
          <Route path="/admissionForm" element={<Admission />} />
          <Route path="/contactUs" element={<ContactUs />} />
          <Route path="/aboutUs" element={<AboutUs />} />
          <Route path="/members" element={<Members />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}
