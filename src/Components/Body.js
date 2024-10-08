import { useContext, useEffect, useState } from "react";
import RestaurantCard, { withPrefferedLabelRestaurantCard } from "./Restaurant";
import AboutClass from "./AboutClass";
// import useOnlineOfflineStatus from "../../utils/useOnlineOfflineStatus";
import { Link } from "react-router-dom";
import useOnlineOfflineStatus from "../hooks/useOnlineOfflineStatus";
import useRestaurantData from "../hooks/useRestaurantData";
import UserContext from "../../context/UserContext";

const Body = () => {
  const [inputValue, setInputValue] = useState("");

  const { list: storingList } = useRestaurantData();

  const onlineOfflineState = useOnlineOfflineStatus();
  const {loggedInUser, setUserName = () => {}} = useContext(UserContext);

  const [list, setList] = useState(storingList);

  const RestaurantCardPreffered =
    withPrefferedLabelRestaurantCard(RestaurantCard);

  useEffect(() => {
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

  if (!onlineOfflineState) {
    return <h1>App is Offline</h1>;
  }
  return (
    <div className="px-4">
      {/* {
        inte &&
   <AboutClass name = 'Child 1'/>

      } */}

      <div className="btn-search-container ">
        <input
          className="border-2 p-2 rounded-md"
          data-testid = "search_test"
          onChange={(e) => setInputValue(e.target.value)}
          value={inputValue}
          placeholder="Search an Item"
        ></input>
        <button
          onClick={handleClick}
          className="ml-5 bg-blue-200 p-2 rounded-md"
        >
          Filter Data
        </button>

        <input
          className="border-2 p-2 rounded-md m-10"
          value={loggedInUser}
          onChange={(e) => setUserName(e.target.value)}
        ></input>
      </div>

      <div className="flex flex-wrap justify-between mt-10">
        {list.map((items) => (
          <Link to={`/restaurant/${items.info.id}`}>
            {items.info.preffered ? (
              <RestaurantCardPreffered
                key={items.info.id}
                time={items.info.sla.deliveryTime}
                title={items.info.name}
                cuisines={items.info.cuisines}
                rating={items.info.avgRating}
              />
            ) : (
              <RestaurantCard
                key={items.info.id}
                time={items.info.sla.deliveryTime}
                title={items.info.name}
                cuisines={items.info.cuisines}
                rating={items.info.avgRating}
              />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
