import { useEffect, useState } from "react";
import RestaurantCard from "./Restaurant";
import AboutClass from "./AboutClass";
import useRestaurantData from "../utils/useRestaurantData";
import useOnlineOfflineStatus from "../utils/useOnlineOfflineStatus";

const Body = () => {
  const [inputValue, setInputValue] = useState("");

  const { list: storingList } = useRestaurantData();
  const onlineOfflineState = useOnlineOfflineStatus();
  
  

  const [list, setList] = useState(storingList);



  useEffect(() => {
    console.log('use effect');
    
    setList(storingList);
  }, [storingList]);

  const handleClick = () => {
    if (inputValue.length == 0) {
      return setList(storingList);
    }

    const filteredArray = storingList.filter((ele) =>
      ele.info.name.toLowerCase().includes(inputValue.toLowerCase())
    );

    setList(filteredArray);
  };

  console.log('render');

  if(!onlineOfflineState){
    return <h1>App is Offline</h1>
  }

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
