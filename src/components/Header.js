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
    <div className="flex justify-between border-b-4 bg-blue-50">
      <div className="Logo">
        <img
          className="w-56"
          src="https://i0.wp.com/opportunitycell.com/wp-content/uploads/2022/09/Screen-Shot-2022-09-02-at-4.52.38-PM.png?fit=480%2C250&ssl=1"
        />
      </div>
      <div className="Navigation-box">
        <ul className="flex m-10 space-x-2">
          <li className="px-3">Online Status:{onlineStatus ? " ✅" : " 🔴"}</li>
          <li className="px-2">Cart</li>

          <li className="px-3">
            <Link to="/">Home</Link>
          </li>
          <li className="px-3">
            <Link to="/about">About</Link>
          </li>
          <li className="px-3">
            <Link to="/contact">Contact Us</Link>
          </li>
          <li className="px-3">
            <Link to="/grocery">Grocery</Link>
          </li>
          <button
            className="px-3 rounded-sm bg-green-200"
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
