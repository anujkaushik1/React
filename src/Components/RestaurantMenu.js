import React from "react";
import RestaurantAccoridan from "./RestaurantAccoridan";

const RestaurantMenu = ({ menu = [] }) => {
  console.log(
    "meny = ",
    menu.filter((ele) => ele?.card?.card?.title)
  );

  return (
    <div>
      {menu?.map((data, idx) => {
        return (
          data?.card?.card?.title && data?.card?.card?.itemCards && (
            <RestaurantAccoridan
              key={idx}
              cardData={data?.card?.card}
            />
          )
        );
      })}
    </div>
  );
};

export default RestaurantMenu;
