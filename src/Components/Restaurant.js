const RestaurantCard = ({ title, cuisines, rating, time }) => {
  return (
    <div className="bg-gray-200 flex flex-col items-center w-80 min-h-96 mb-12  text-center py-5 hover:bg-gray-300">
      <img
        className="w-72"
        src="https://i.pinimg.com/474x/de/79/bb/de79bb3fcae9d0e4d80ab5aa581cfd5e.jpg"
      />
      <h3 className="mt-2">{title}</h3>
      <h4 className="flex flex-wrap break-words">{cuisines.join(", ")}</h4>
      <h4>{rating}</h4>
      <h4>{time}</h4>
    </div>
  );
};

export const withPrefferedLabelRestaurantCard = (RestaurantCard = () => {}) => {
  return (props) => {
    return (
      <div>
        <label>Preffered</label>
        <RestaurantCard {...props} />
      </div>
    );
  };
};



export default RestaurantCard;
