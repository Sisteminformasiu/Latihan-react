import React from "react";

function NewsCard({ id, title, image, author, date, onClick, onRead }) {
  return (
    <div
      id={id}
      onClick={onClick}
      className="w-full h-full p-3 rounded-md cursor-pointer shadow-md"
    >
      <div className="my-auto">
        <img
          src={
            image !== null && !image.includes("webp")
              ? image
              : "https://placehold.co/600x500"
          }
          className="w-full h-60"
        />
      </div>
      <div className="p-4 flex flex-col gap-y-5">
        <h2 className="font-bold text-1xl text-line-600">{title}</h2>
        <p className="font-semibold text-line-600">
          Author : {author !== null ? author : "author not provided"}
        </p>
        <p className="text-line-500">{date}</p>
      </div>
    </div>
  );
}

export default NewsCard;
