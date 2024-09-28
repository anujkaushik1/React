import { useEffect, useState } from "react";

const useRestaurantData = () => {
  const [list, setList] = useState([]);

  useEffect(() => {
    console.log('hook wala use effect');

    fetchData();
  }, []);
  const fetchData = async () => {
    try {
      const data = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.9615398&lng=79.2961468&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
      );
      const jsonData = await data.json();     
                  
      setList(
        jsonData?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants || []
      );
    } catch (error) {
      console.log("error: ", error);
    }
  };

  console.log('hook wala render');
  

  return { list };
};

export default useRestaurantData;
