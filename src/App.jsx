import React from "react";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import MyRouter from "./router/MyRouter";
import NavBar from "./components/navbar/NavBar";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <MyRouter />
    </BrowserRouter>
  );
}

export default App;
