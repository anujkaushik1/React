import React, { useState } from "react";
import ItemsList from "./ItemsList";

const RestaurantAccoridan = ({ cardData }) => {
  const [isAccoridanClicked, setIsAccoridanClicked] = useState(true);

  const handleClick = () => {
    setIsAccoridanClicked(!isAccoridanClicked);
  };

  return (
    <div className="flex flex-col items-center mt-5 mb-20">
      <div
        onClick={handleClick}
        className="w-[60%] min-h-10 rounded-lg shadow-md p-2  cursor-pointer"
      >
        <div className="flex justify-between">
          <h1 className="text-lg font-bold font-sans">
            {cardData?.title} ({cardData?.itemCards?.length})
          </h1>
          <h1 className="text-[30px] font-bold font-sans">
            {isAccoridanClicked ? "↑" : "↓"}
          </h1>
        </div>

        {isAccoridanClicked && <ItemsList items={cardData?.itemCards} />}
      </div>
    </div>
  );
};

export default RestaurantAccoridan;
