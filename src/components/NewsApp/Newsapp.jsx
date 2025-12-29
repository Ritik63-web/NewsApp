import React from "react";
import Newsbar from "./Newsbar";
import Home from "./Home";
import NewsApi from "./NewsApi";
import { Routes, Route } from "react-router-dom";

const Newsapp = () => {
  return (
    <>
      <Newsbar />
      {/* <Home /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:category" element={<Home />} />
      </Routes>
    <NewsApi />
    </>
  );
};

export default Newsapp;
