import { useContext } from "react";
import { Link } from "react-router-dom";
import UserContext from "../../context/UserContext";

export const Header = () => {

  const {loggedInUser} = useContext(UserContext);
  return (
    <div className="flex w-full justify-between items-center border-2 border-gray-50 mt-0">
      <img
        className="logo w-24 m-4"
        src="https://img.freepik.com/free-vector/food-delivery-logo-with-bike-man-courier_1308-46245.jpg?t=st=1726426412~exp=1726430012~hmac=0de7dc132f092db8e692fd9096939f135a7471b8d2e036fbde4b56cd24ebb81f&w=740"
      />
      <div className="flex">
        <ul className="flex p-4 m-4">
          <li className="mx-4">
            <Link to={"/"}>Home </Link>
          </li>
          <li className="mx-4">
            <Link to={"/about"}>About Us </Link>
          </li>
          <li className="mx-4">
            <Link to={"/contact"}>Contact Us </Link>
          </li>
          <li className="mx-4">
            <Link to={"/card"}>Card </Link>
          </li>
          <li className="mx-4">
            <Link to={"/grocery"}>Grocery </Link>
          </li>
          <li className="mx-4">
            {loggedInUser}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
