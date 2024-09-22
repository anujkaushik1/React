import { useEffect, useState } from "react";
import RestaurantCard from "./Restaurant";
import AboutClass from "./AboutClass";

const Body = () => {
  const [list, setList] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [storingList, setStoringList] = useState([]);

  const [inte, setinte] = useState(true);
  

  useEffect(() => {
    // console.log('use effect called');
    
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
      setStoringList(
        jsonData?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants || []
      );
    } catch (error) {
      console.log("error: ", error);
    }
  };

  const handleClick = () => {
    setinte(!inte)

    return;

    if(inputValue.length == 0){
      return setList(storingList);
    }

    const filteredArray = storingList.filter((ele) =>
      ele.info.name.toLowerCase().includes(inputValue.toLowerCase())
    );

    setList(filteredArray);
  };
  

  // console.log('render');
  

  return (
    <div className="body-container">
      {/* {
        inte &&
   <AboutClass name = 'Child 1'/>

      } */}

      <div className="btn-search-container">
        <input
          onChange={(e) => setInputValue(e.target.value)}
          value={inputValue}
          placeholder="Search an Item"
        ></input>
        <button onClick={handleClick} className="filter-data-btn">
          Filter Data
        </button>
      </div>

      <div className="restaurant-container">
        {list.map((items) => (
          <RestaurantCard
            key={items.info.id}
            time={items.info.sla.deliveryTime}
            title={items.info.name}
            cuisines={items.info.cuisines}
            rating={items.info.avgRating}
          />
        ))}
      </div>
    </div>
  );
};

export default Body;
