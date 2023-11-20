import React from "react";
import SideBar from "../../../components/SideBar";

const Transaction = () => {
  return (
    <div className="bg-[#DDE5E9]">
      <div className=" grid grid-cols-1 md:grid-cols-[1fr_3fr]">
        <SideBar />
        <div className="flex justify-center items-center text-4xl">
          {/* nanti lanjut disini */} Transaksi
        </div>
      </div>
    </div>
  );
};

export default Transaction;
