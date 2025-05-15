import RestorentCard from "./RestorentCard";
import restrautList from "./Utils/MockData";
import { useEffect, useState } from "react";
import ShimmerUI from "./ShimmerUI";
import NoResultFoundMsg from "./NoResultFoundMsg";
import useOnlineStatus from "./Utils/useOnlineStatusHook";

//state variable:
// - A state variable is a variable that holds the state of a component in React.
// - It is used to store data that can change over time and trigger a re-render of the component when it changes.
// - State variables are created using the useState Hook, which is a built-in Hook in React.
// - The useState Hook takes an initial value as an argument and returns an array with two elements: the current state value and a function to update it.
// - The current state value is accessed using the first element of the array, and the function to update it is accessed using the second element of the array.
// - The function to update the state variable can be called with a new value, and it will trigger a re-render of the component with the new state value.
// - State variables are used to manage the state of a component and can be used to store data such as user input, API responses, and other dynamic data that can change over time.
// - always declear the state variable at the top of the component function and it should be inside the component, before any other code.

/*UseState Hook:
 * - useState is a Hook that lets you add React state to function components.
 * - It returns an array with two elements: the current state value and a function to update it.
 * - The first element is the current state value, and the second element is a function that allows you to update that state value.
 * - The initial value of the state is passed as an argument to useState. in the below example, the initial value is an empty array.
 * - If the setListOfRestorent function is called, the component will re-render with the new state value.
 * - The state variable can be updated using the function returned by useState.
 */

/**
 * UseEffect Hook:
 * - useEffect is a Hook that lets you perform side effects in function components.
 * - It takes two arguments: a function to run and an array of dependencies.
 * - The function will run after the component renders and after every update, unless the dependencies array is provided.
 * - If the dependencies array is provided, the function will only run when the values in the array change.
 * - In the below example, the fetchData function is called when the component mounts (when the component is first rendered).
 * - The fetchData function fetches data from an API and updates the state variable listOfRestorent with the fetched data.
 * - The useEffect Hook is used to perform side effects in function components, such as fetching data, subscribing to events, or manually changing the DOM.
 * - It runs after the component renders and can be used to clean up resources when the component unmounts.
 * - UseEffectt is called=> dependency array is empty=> it will run only once when the component render(just once (fisrt time)).
 * - If the dependency array is not provided(empty array also not available), the effect will run after every render (in the below example, if any other components are render then body component is also render, as the result useEffect will also gets render)
 * - use effect is called=> dependency array is provided=> it will run only when the value of the dependencies changes.(in the below example, if the value of searchText changes  then the useEffect will be called,[searchText] need to be provided in the dependency array)
 *
 *
 */

/*
 * onchange event:
 * - The onChange event is triggered when the value of an input element changes.
 * - In the below example, the onChange event is used to update the state variable searchText with the value of the input element.
 * - The onChange event is used to handle user input in form elements, such as text inputs, checkboxes, and radio buttons.
 * - It is triggered when the value of the input element changes, and it can be used to update the state variable with the new value.
 */

// const [listOfRestorent, setlistOfRestorent] = useState([
//   {
//     info: {
//       id: "234875",
//       name: "Adil Hotel",
//       cloudinaryImageId: "gp1ityra6utvzqn6ghnv",
//       cuisines: ["North Indian", "Biryani", "Tandoor"],
//       avgRatingString: 3.0,
//       sla: {
//         lastMileTravelString: "11.5 km",
//       },
//     },
//   },
//   {
//     info: {
//       id: "2348756",
//       name: "Mehfil Hotel",
//       cloudinaryImageId: "gp1ityra6utvzqn6ghnv",
//       cuisines: ["North Indian", "Biryani", "Tandoor"],
//       avgRatingString: 4.9,
//       sla: {
//         lastMileTravelString: "11.5 km",
//       },
//     },
//   },
// ]);

// let restrautListDummay = [
//   {
//     info: {
//       id: "234875",
//       name: "Adil Hotel",
//       cloudinaryImageId: "gp1ityra6utvzqn6ghnv",
//       cuisines: ["North Indian", "Biryani", "Tandoor"],
//       avgRatingString: 3.0,
//       sla: {
//         lastMileTravelString: "11.5 km",
//       },
//     },
//   },
//   {
//     info: {
//       id: "2348756",
//       name: "Mehfil Hotel",
//       cloudinaryImageId: "gp1ityra6utvzqn6ghnv",
//       cuisines: ["North Indian", "Biryani", "Tandoor"],
//       avgRatingString: 4.9,
//       sla: {
//         lastMileTravelString: "11.5 km",
//       },
//     },
//   },
// ];

const Body = () => {
  const [listOfRestorent, setlistOfRestorent] = useState([]);
  const [searchListRestorent, setSearchListRestorent] = useState([]);
  const onlineStatus = useOnlineStatus();

  //search funtionality
  let [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetchData();
  },[]);

  async function fetchData() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=21.99740&lng=79.00110&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    var restAPIData = await data.json();

    var restorentListAPI =
      restAPIData.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants;
    console.log(restAPIData);
    setlistOfRestorent(restorentListAPI);
    //console.log(restorentListAPI);
    setSearchListRestorent(restorentListAPI);
  }
  if (onlineStatus === false) {
    return <h1>Looks like you are offline</h1>;
  }
  if (listOfRestorent.length === 0) {
    //adding shimmer UI insead of spinner for the good user experience
    return <ShimmerUI />;
  }
  //if no data found then show the no result found image
  if (searchListRestorent.length === 0) {
    return <NoResultFoundMsg />;
  }

  return (
    <div className="Body-Container">
      <div className="flex m-3 ">
        <input
          className="border-black border-2 mx-2"
          type="text"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        ></input>
        <button
          className="bg-green-200 px-2 rounded-md"
          onClick={() => {
            let searchData = listOfRestorent.filter((rest) => {
              return rest.info.name
                .toLocaleLowerCase()
                .includes(searchText.toLowerCase());
            });
            setSearchListRestorent(searchData);
          }}
        >
          Search
        </button>
        <button
          className="filter-btn bg-green-200 px-2 rounded-md mx-3 ml-6"
          onClick={() => {
            const filterData = listOfRestorent.filter((rest) => {
              return rest.info.avgRatingString >= 4.2;
            });
            setSearchListRestorent(filterData);
          }}
        >
          Top 4 star restorent
        </button>
        <button
          className="filter-btn  bg-green-200 px-2 rounded-md mx-3"
          onClick={() => {
            setSearchListRestorent(listOfRestorent);
          }}
        >
          All Restorents
        </button>
      </div>

      <div className="rest-Container flex flex-wrap">
        {searchListRestorent.map((restaurant) => {
          return (
            <RestorentCard {...restaurant.info} key={restaurant.info.id} />
          );
        })}
      </div>
    </div>
  );
};

export default Body;
