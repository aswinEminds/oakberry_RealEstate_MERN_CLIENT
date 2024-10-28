import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/home/Home";
import About from "../pages/about/About";
import Properties from "../pages/properties/Properties";
import Agents from "../pages/agents/Agents";
import Blogs from "../pages/blogs/Blogs";
import Contact from "../pages/contacts/Contact";
import Login from "../pages/auth/Login";
import Register from "../pages/auth/Register";
import SinglePropertyView from "../pages/properties/SinglePropertyView";
import AddProperty from "../pages/properties/AddProperty";

function MyRouter() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/properties" element={<Properties />} />
      <Route path="/agents" element={<Agents />} />
      <Route path="/blogs" element={<Blogs />} />
      <Route path="/contacts" element={<Contact />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/singlePropertyView" element={<SinglePropertyView />} />
      <Route path="/addProperty" element={<AddProperty />} />
    </Routes>
  );
}

export default MyRouter;
