import React, { useState } from "react";
import Product from "./Product";
import data from "./Data";

const ProductPage = () => {
  const [tour, setTour] = useState(data);

  const handleInterest = (id) => {
    const newTour = tour.filter((tour) => tour.id !== id);
    setTour(newTour);
  };

  const handleRefresh = () => {
    setTour(data);
  };

  if (tour.length > 0) {
    return (
      <div className="w-full flex flex-col gap-5 items-center justify-center py-20 px-5 bg-zinc-100">
        <h2 className="text-4xl font-bold capitalize">Plan with Vivek</h2>

        <div className="w-[90%] max-w-[1300px] mx-auto justify-center flex flex-row flex-wrap h-fit gap-4 my-5 ">
          {tour.map((tour) => {
            return (
              <Product
                {...tour}
                key={tour.id}
                handleInterest={handleInterest}
              />
            );
          })}
        </div>
      </div>
    );
  }
  return (
    <div className="flex justify-center items-center w-full h-full flex-col gap-10 bg-zinc-100">
      <h2 className="text-4xl font-bold">No Tour Left to Plan</h2>
      <button className="bg-gray-200 px-20 py-4 rounded-md hover:bg-red-400 hover:text-white transition-all duration-200 " onClick={handleRefresh}>Refresh</button>
    </div>
  );
};

export default ProductPage;
