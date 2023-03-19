import React, { useState } from "react";

const Product = ({ id, name, info, image, price, handleInterest }) => {

  const [read, setRead] = useState(false);

  const desc = read ? info : `${info.substring(0, 200)}...`

  const handleRead = () => {
    setRead(!read);
  };

  return (
    <div className="w-[25rem] h-fit p-5 flex flex-col gap-5 rounded-md overflow-hidden bg-white">
      <div className="flex gap-4 flex-col ">
        <img src={image} className="w-full object-fill aspect-square" />
        <h3 className="text-2xl font-bold">{name}</h3>
        <p className="text-orange-500 font-bold text-xl">₹{price}</p>
        <p className="opacity-80">
          {desc}
          <span className="opacity-100 text-blue-900 cursor-pointer" onClick={handleRead}>{read ? "Show less" : "Show more"}</span>
        </p>
      </div>

      <button className="bg-gray-200 p-4 rounded-md hover:bg-red-400 hover:text-white transition-all duration-200" onClick={() => handleInterest(id)}>Not Interested</button>
    </div>
  );
};

export default Product;
