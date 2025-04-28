import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import About from "../pages/About";
import Admission from "../pages/Admission";
import Notice from "../pages/Notice";
import Gallery from "../pages/Gallery";
import Calendar from "../pages/Calendar";
import Contact from "../pages/Contact";
import Login from "../pages/Login";

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <MainLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/admission" element={<Admission />} />
          <Route path="/notice" element={<Notice />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/calendar" element={<Calendar />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </MainLayout>
    </BrowserRouter>
  );
}