import ItemsDetails from "./ItemsDetails";
import { useState, useEffect, useContext } from "react";
import userName from "./Utils/userContext";
const Category = (props) => {
  // const [items, setItems] = useState(false);

  const data = useContext(userName);
  console.log(data);

  const expandItems = () => {
    // return items ? setItems(false) : setItems(true);
    props.setExpanded();
  };
  return (
    <div>
      {/* accoudian Header */}
      <div className="w-6/12 bg-gray-50 shadow-md py-1 px-10 my-2 mx-auto ">
        <div
          className="justify-between flex cursor-pointer"
          onClick={expandItems}
        >
          <h1 className="font-bold ">
            {props.title} ({props.itemCards.length})
          </h1>
          <h1> {props.showItems ? "⬆" : "⬇"} </h1>
        </div>
        <div>
          {/* {console.log(props.itemCards)} */}
          {props.itemCards.map((item, index) => {
            return (
              //component will be rendered only if items is true(when user clicks on the header to expand the items)
              props.showItems && (
                <ItemsDetails key={item.card.info.id} {...item.card.info} />
              )
            );
          })}
        </div>
      </div>
    </div>
  );
};
export default Category;
