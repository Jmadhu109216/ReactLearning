import React, { use } from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { RESTAURANT_MENU_API } from "./Utils/constants";
import ShimmerUI from "./ShimmerUI";
import Category from "./Category";
import { ClOUDINARY_IMAGE_URL } from "./Utils/constants";

const RestorentMenu = () => {
  const [expanded, setExpanded] = useState(1);
  const [response, setResponse] = useState([]);
  const [restName, setRestName] = useState([]);
  const [UserName, setUserName] = useState("Madhu");
  const { restId } = useParams(); // destructuring the restId from the useParams hook and storing it in the restId variable.
  // useParams is a hook that returns an object of key/value pairs of URL parameters. In this case, it returns the restId parameter from the URL.
  // The useParams hook is used to access the URL parameters in a functional component. It returns an object containing the URL parameters as key/value pairs.
  useEffect(() => {
    restMenuDetails();
  }, []);

  async function restMenuDetails() {
    const data = await fetch(RESTAURANT_MENU_API + restId);
    var json = await data.json();

    // console.log(json?.data?.cards[4]?.groupedCard?.cardGroupMap.REGULAR.cards);
    const restMenuDetails =
      json?.data?.cards[4]?.groupedCard?.cardGroupMap.REGULAR.cards.filter(
        (res) => {
          return (
            res.card.card["@type"] ===
            "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
          );
        }
      );
    setResponse(restMenuDetails);
    setRestName(json?.data?.cards[2]?.card?.card?.info);
    //console.log(json?.data?.cards[2]?.card?.card?.info);
  }
  if (restName.length === 0) {
    return <ShimmerUI />;
  } else {
    return (
      <div>
        <div className="menu-details my-10 mx-6/12 text-center justify-between ">
          <h1 className="font-bold text-xl">{restName.name}</h1>
          <span>Location: {restName.locality} </span>
          <h3>order will deliver in 5 min</h3>
        </div>
        <div>
          {response.map((res, index) => {
            return (
              <Category
                key={index}
                {...res.card.card}
                showItems={index === expanded}
                setExpanded={() => setExpanded(index)}
                setUserName={setUserName}
              />
            );
          })}
        </div>
      </div>

      // <div className="restorent-cord-menu text-center p-5 border-black bg-gray-200 my-20 mx-40">
      //   <h1 className="text-2xl font-bold">Restorent Details</h1>
      //   <h2 className="font-extrabold" style={{ textAlign: "center" }}>
      //     {restName}
      //   </h2>
      //   <h3>order will deliver in 5 min</h3>
      //   <h3>Menu details</h3>
      //   <ul>
      //     {response.map((item) => {
      //       return <li key={item.card.info.id}>{item.card.info.name}</li>;
      //     })}
      //   </ul>
      // </div>
    );
  }
};

export default RestorentMenu;
