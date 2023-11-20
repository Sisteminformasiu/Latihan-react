import React from "react";
import { useLocation } from "react-router-dom";

function Detail() {
  const location = useLocation();
  const news = location?.state?.news;
  return (
    <div className="p-32 w-screen h-full flex justify-center items-center">
      <div className="w-max">
        <h2 className="text-6xl font-bold mb-20">{news?.title}</h2>
        <img src={news?.urlToImage} className="w-full h-full mb-5" />
        <p>{news?.content}</p>
      </div>
    </div>
  );
}

export default Detail;
