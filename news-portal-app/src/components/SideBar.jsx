import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import dashboardIcon from "../assets/dashboard-sidebar-icon.svg";
import dropdownIcon from "../assets/arrow-down.svg";

const SideBar = () => {
  const location = useLocation();
  const [openDropDown, setOpenDropDown] = useState(true);

  const isLinkActive = (pathname) => {
    return location.pathname === pathname
      ? "bg-white text-violet-500 font-bold"
      : "";
  };

  const handleDropdown = () => {
    setOpenDropDown(!openDropDown);
  };

  return (
    <div className="w-[220px] bg-violet-800 pb-10 md:pb-0 md:grid">
      <div id="sidebar-wrapper" className="h-screen text-white">
        <div
          id="sidebar-header"
          className="flex flex-col items-center justify-center mt-[30px]"
        >
          <p className="text-white text-2xl">Dinda Ariska</p>
          <p className="text-white">dindaariska@gmail.com</p>
        </div>

        <div className="flex flex-col items-center justify-center mt-5 pt-5 shadow-inner shadow-slate-600">
          <ul className="flex flex-col items-start justify-center gap-[10px]">
            <li>
              <Link
                to="/admin/dashboard"
                className={` py-1 pl-2 pr-5 rounded w-full flex items-center justify-start gap-2 hover:bg-white hover:text-violet-500 ${isLinkActive(
                  "/admin/dashboard"
                )}`}
              >
                <img src={dashboardIcon} alt="" />
                Dashboard
              </Link>
            </li>
            <ul className="mt-1">
              <li
                className={`py-1 pl-2 pr-1 rounded w-full flex items-center justify-start gap-2 hover:bg-white hover:text-violet-500 cursor-pointer`}
                onClick={handleDropdown}
              >
                {/* tinggal tambah icon disini */}
                Master Data
                <img src={dropdownIcon} alt="" />
              </li>
              <ul className={`${openDropDown ? "hidden" : "block"}`}>
                <li>
                  <Link
                    to="/admin/kategori"
                    className={`ml-3 py-1 pl-2 pr-1 mt-2 rounded w-18 flex items-center justify-start gap-2 hover:bg-white hover:text-violet-500 ${isLinkActive(
                      "/admin/kategori"
                    )}`}
                  >
                    Kategori
                  </Link>
                </li>
                <li>
                  <Link
                    to="/admin/produk"
                    className={`ml-3 py-1 pl-2 pr-1 mt-2 rounded w-18 flex items-center justify-start gap-2 hover:bg-white hover:text-violet-500 ${isLinkActive(
                      "/admin/produk"
                    )}`}
                  >
                    Produk
                  </Link>
                </li>
                <li>
                  <Link
                    to="/admin/user"
                    className={`ml-3 py-1 pl-2 pr-1 mt-2 rounded w-18 flex items-center justify-start gap-2 hover:bg-white hover:text-violet-500 ${isLinkActive(
                      "/admin/user"
                    )}`}
                  >
                    User
                  </Link>
                </li>
                <li>
                  <Link
                    to="/admin/promo"
                    className={`ml-3 py-1 pl-2 pr-1 mt-2 rounded w-18 flex items-center justify-start gap-2 hover:bg-white hover:text-violet-500 ${isLinkActive(
                      "/admin/promo"
                    )}`}
                  >
                    Promo
                  </Link>
                </li>
                <li>
                  <Link
                    to="/admin/metode"
                    className={`ml-3 py-1 pl-2 pr-1 mt-2 rounded w-18 flex items-center justify-start gap-2 hover:bg-white hover:text-violet-500 ${isLinkActive(
                      "/admin/metode"
                    )}`}
                  >
                    Metode
                  </Link>
                </li>
              </ul>
            </ul>
            <li>
              <Link
                to="/admin/transaksi"
                className={`py-1 pl-2 pr-5 rounded w-full flex items-center justify-start gap-2 hover:bg-white hover:text-violet-500 ${isLinkActive(
                  "/admin/transaksi"
                )}`}
              >
                Transaksi
              </Link>
            </li>
            <li>
              <Link
                // to="/admin/pendaftaran"
                className={`py-1 pl-2 pr-5 rounded w-full flex items-center justify-start gap-2 hover:bg-white hover:text-violet-500 ${isLinkActive(
                  "/admin/pendaftaran"
                )}`}
              >
                Pendaftaran
              </Link>
            </li>
            <li>
              <Link
                // to="/admin/notifikasi"
                className={`py-1 pl-2 pr-5 rounded w-full flex items-center justify-start gap-2 hover:bg-white hover:text-violet-500 ${isLinkActive(
                  "/admin/notifikasi"
                )}`}
              >
                Notifikasi
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
