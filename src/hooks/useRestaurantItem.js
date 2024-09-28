import { useEffect, useState } from "react";

const useRestaurantItem = ({ restaurantId }) => {
  const [restaurantItem, setRestaurantItem] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const data = await fetch(
        `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.65200&lng=77.16630&restaurantId=${restaurantId}`
      );

      const jsonData = await data.json();
      setRestaurantItem(jsonData?.data || []);
    } catch (error) {}
  };

  return { restaurantItem };
};

export default useRestaurantItem;
