import { Route, Routes } from "react-router";
import React, { useState } from "react";
import Constants from "./utilities/Constants";
import PostCreateForm from "./components/PostCreateForm";
import PostUpdateForm from "./components/PostUpdateForm";
import About from "./components/About";
import Account from "./components/Account";
import Home from "./components/Home";

import "./styles.css"
import ResponsiveAppBar from "./components/NavBar";




function App(){

  return (
    <div className="container">
      <ResponsiveAppBar />
      <Routes>
        <Route path = "/" element={<Home />} />
        <Route path = "About" element={<About />} />
        <Route path = "Account" element={<Account />} />
      </Routes>
      
    </div>
  );
}

export default App;
  