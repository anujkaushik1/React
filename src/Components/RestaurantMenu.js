import React from "react";
import RestaurantAccoridan from "./RestaurantAccoridan";

const RestaurantMenu = ({ menu = [], showIndex, setShowIndex }) => {
  return (
    <div>
      {menu?.map((data, idx) => {
        return (
          data?.card?.card?.title &&
          data?.card?.card?.itemCards && (
            <RestaurantAccoridan
              setShowIndex={(childData) => {
                console.log('data coming from child = ', childData);

                if(idx == showIndex){
                  return setShowIndex(null);
                }
                
                setShowIndex(idx);
              }}
              showCard={idx == showIndex ? true : false}
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
