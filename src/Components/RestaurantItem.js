import React, { useState } from "react";
import { useParams } from "react-router-dom";
// import useRestaurantItem from "../../utils/useRestaurantItem";
import { RestaurantInfo } from "./RestaurantInfo";
import RestaurantMenu from "./RestaurantMenu";
import useRestaurantItem from "../hooks/useRestaurantItem";

const RestaurantItem = () => {
  const { id } = useParams();
  const { restaurantItem } = useRestaurantItem({ restaurantId: id });

  const [showIndex, setShowIndex] = useState(0);

  const restaurantInfo = restaurantItem?.cards?.[2]?.card?.card?.info || {};

  const restaurantMenu =
    restaurantItem?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards || [];

  return (
    <div>
      <RestaurantInfo info={restaurantInfo} />
      <RestaurantMenu
        showIndex={showIndex}
        setShowIndex={setShowIndex}
        menu={restaurantMenu}
      />
    </div>
  );
};

export default RestaurantItem;
