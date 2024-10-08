import React, { useState } from "react";
import ItemsList from "./ItemsList";

const RestaurantAccoridan = ({ cardData, showCard = true, setShowIndex }) => {
  const handleClick = () => {
    setShowIndex("i am sending parent data");
  };

  return (
    <div className="flex flex-col items-center mt-5 mb-20">
      <div className="w-[60%] min-h-10 rounded-lg shadow-md p-2  cursor-pointer">
        <div onClick={handleClick} className="flex justify-between">
          <h1 className="text-lg font-bold font-sans">
            {cardData?.title} ({cardData?.itemCards?.length})
          </h1>
          <h1 className="text-[30px] font-bold font-sans">
            {showCard ? "↑" : "↓"}
          </h1>
        </div>

        {showCard && <ItemsList items={cardData?.itemCards} />}
      </div>
    </div>
  );
};

export default RestaurantAccoridan;
