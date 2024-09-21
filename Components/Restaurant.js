const RestaurantCard = ({title, cuisines, rating, time}) => {
  return (
    <div className="restaurant-card-container">
      <img src="https://i.pinimg.com/474x/de/79/bb/de79bb3fcae9d0e4d80ab5aa581cfd5e.jpg" />
      <h3>{title}</h3>
      <h4>{cuisines}</h4>
      <h4>{rating}</h4>
      <h4>{time}</h4>
    </div>
  );
};

export default RestaurantCard;
