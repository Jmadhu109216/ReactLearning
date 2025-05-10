import { use } from "react";
import LogIn from "./LogIn";
import { useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "./Utils/useOnlineStatusHook";
const Header = () => {
  const onlineStatus = useOnlineStatus();
  console.log(onlineStatus);
  let [btnName, setbtnName] = useState(["LogIn"]);
  return (
    <div className="Header-Container">
      <div className="Logo">
        <img
          className="Logo-Name"
          src="https://i0.wp.com/opportunitycell.com/wp-content/uploads/2022/09/Screen-Shot-2022-09-02-at-4.52.38-PM.png?fit=480%2C250&ssl=1"
        />
      </div>
      <div className="Navigation-box">
        <ul>
          <li className="OnlineStatus">
            Online Status:{onlineStatus ? " ✅" : " 🔴"}
          </li>
          <li
            className="cart"
            src="https://cdn-icons-png.flaticon.com/512/1413/1413908.png"
          >
            Cart
          </li>

          <li className="Home">
            <Link to="/">Home</Link>
          </li>
          <li className="About">
            <Link to="/about">About</Link>
          </li>
          <li className="Contact Us">
            <Link to="/contact">Contact Us</Link>
          </li>
          <li className="Grocery">
            <Link to="/grocery">Grocery</Link>
          </li>
          <button
            className="LogIn-Button"
            onClick={() => {
              return btnName === "LogIn"
                ? setbtnName("LogOut")
                : setbtnName("LogIn");
            }}
          >
            {btnName}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
