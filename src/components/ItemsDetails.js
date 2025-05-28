import { useState, useEffect } from "react";

import { ClOUDINARY_IMAGE_URL } from "../components/Utils/constants";

const ItemsDetails = (props) => {
  //console.log(Name);
  // console.log(props);
  return (
    <div className="border-b-2 border-gray-200 text-start py-4 flex justify-between">
      <div>
        <div className="font-semibold text-sm cursor-pointer">{props.name}</div>
        <span> ₹ {props.price / 100}</span>
        <p className="text-xs">{props.description}</p>
      </div>
      <div className="w-1/6">
        <img src={ClOUDINARY_IMAGE_URL + props.imageId}></img>
        <span className="text-xs text-white p-1 w-500 bg-black rounded-lg cursor-pointer mx-4 ">
          add to cart
        </span>
      </div>
    </div>
  );
};
export default ItemsDetails;
