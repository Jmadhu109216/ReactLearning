import { use } from "react";
import LogIn from "./LogIn";
import { useState } from "react";
const Header = () => {
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
          <li
            className="cart"
            src="https://cdn-icons-png.flaticon.com/512/1413/1413908.png"
          >
            Cart
          </li>
          <li className="Home">Home</li>
          <li className="About">About</li>
          <li className="SignOut">Sign Out</li>
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
