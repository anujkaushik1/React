import React from "react";
import { CDN_URL } from "../../utils/constants";

const ItemsList = ({ items = [] }) => {
  return items?.map((item) => {
    const { name, description, imageId } = item?.card?.info || {};
    const itemPrice =
      item?.card?.info?.price || item?.card?.info?.defaultPrice || {};

    return (
      <div className="mb-10">
        <div className="flex">
          <div className="w-[30%]">
            <h2 className="font-sans text-lg">{name}</h2>
            <h2 className="font-sans text-lg font-semibold ml-1">
              - ₹ {itemPrice / 100}
            </h2>
          </div>

          <div className="w-full flex justify-end">
            <img className="w-[20%] h-16 rounded-md" src={`${CDN_URL}/${imageId}`} />
          </div>
        </div>
        <h3 className="mt-2 text-xs">{description}</h3>
      </div>
    );
  });
};

export default ItemsList;
