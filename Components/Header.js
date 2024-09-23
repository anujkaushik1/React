import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <div className="header-container">
      <img
        className="logo"
        src="https://img.freepik.com/free-vector/food-delivery-logo-with-bike-man-courier_1308-46245.jpg?t=st=1726426412~exp=1726430012~hmac=0de7dc132f092db8e692fd9096939f135a7471b8d2e036fbde4b56cd24ebb81f&w=740"
      />
      <div className="nav-items">
        <ul>
          <li><Link to={"/"}>Home </Link></li>
          <li><Link to={"/about"}>About Us </Link></li>
          <li><Link to={"/contact"}>Contact Us </Link></li>
          <li><Link to={"/card"}>Card </Link></li>
          <li><Link to={"/grocery"}>Grocery </Link></li>
        </ul>
      </div>
    </div>
  );
};


export default Header;


