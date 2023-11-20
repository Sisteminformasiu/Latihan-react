import React from "react";
import PortalNews from "./pages/PortalNews";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Detail from "./pages/Detail";
import Home from "./pages/Home";
import Admin from "./pages/Admin/Dashboard";
import MasterData from "./pages/Admin/MasterData";
import Transaction from "./pages/Admin/Transaction";

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
          <Route element={<MasterData />} path="/admin/master-data" />
          <Route element={<Transaction />} path="/admin/transaksi" />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
