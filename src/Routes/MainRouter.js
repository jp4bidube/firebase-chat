import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PrivateRoute from "./PrivateRoute";
import Login from "../pages/Login";
import Home from "../pages/Home";
import Chat from "../pages/Chat";
import About from "../pages/About";
import Pagina404 from "../pages/Pagina404";

function MainRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <PrivateRoute>
              <Home />
            </PrivateRoute>
          }
        />
        <Route path="/login" element={<Login />} />
        <Route
          path="/about"
          element={
            <PrivateRoute>
              <About />
            </PrivateRoute>
          }
        />
        <Route
          path="/chat"
          element={
            <PrivateRoute>
              <Chat />
            </PrivateRoute>
          }
        />
        <Route path="*" element={<Pagina404 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default MainRouter;
