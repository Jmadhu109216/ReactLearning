import React, { use } from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { RESTAURANT_MENU_API } from "./Utils/constants";
import ShimmerUI from "./ShimmerUI";

const RestorentMenu = () => {
  const [response, setResponse] = useState([]);
  const [restName, setRestName] = useState([]);
  const { restId } = useParams(); // destructuring the restId from the useParams hook and storing it in the restId variable.
  // useParams is a hook that returns an object of key/value pairs of URL parameters. In this case, it returns the restId parameter from the URL.
  // The useParams hook is used to access the URL parameters in a functional component. It returns an object containing the URL parameters as key/value pairs.
  useEffect(() => {
    restMenuDetails();
  }, []);
  async function restMenuDetails() {
    const data = await fetch(RESTAURANT_MENU_API + restId);
    var json = await data.json();
    setResponse(
      json?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card
        ?.card?.itemCards
    );
    setRestName(json?.data?.cards[0]?.card?.card?.text);
  }
  if (response.length === 0) {
    return <ShimmerUI />;
  } else {
    return (
      <div className="restorent-cord-menu">
        <h1>Restorent Details</h1>
        <h2 style={{ textAlign: "center" }}>{restName}</h2>
        <h3>order will deliver in 5 min</h3>
        <h3>Menu details</h3>
        <ul>
          {response.map((item) => {
            return <li key={item.card.info.id}>{item.card.info.name}</li>;
          })}
        </ul>
      </div>
    );
  }
};

export default RestorentMenu;
