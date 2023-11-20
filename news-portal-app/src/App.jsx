import React from "react";
import PortalNews from "./pages/PortalNews";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Detail from "./pages/Detail";
import Home from "./pages/Home";
import Admin from "./pages/Admin/Dashboard";
import Transaction from "./pages/Admin/Transaction";
import Kategori from "./pages/Admin/MasterData/Kategori";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route element={<Login />} path="/" />
          <Route element={<PortalNews />} path="/portalnews" />
          <Route element={<Detail />} path="/detail/:title" />
          <Route element={<Home />} path="/home" />
          <Route element={<Admin />} path="/admin/dashboard" />
          <Route element={<Kategori />} path="/admin/kategori" />
          <Route element={<Transaction />} path="/admin/transaksi" />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
