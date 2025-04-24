import RestorentCard from "./RestorentCard";
import restrautList from "./Utils/MockData";
import { useEffect, useState } from "react";
import ShimmerUI from "./ShimmerUI";

//state variable
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

  //search funtionality
  let [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=21.99740&lng=79.00110&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    var restAPIData = await data.json();
    console.log(
      restAPIData.data.cards[4].card.card.gridElements.infoWithStyle.restaurants
    );
    var restorentListAPI =
      restAPIData.data.cards[4].card.card.gridElements.infoWithStyle
        .restaurants;
    setlistOfRestorent(restorentListAPI);
    setSearchListRestorent(restorentListAPI);
  }

  //adding shimmer UI insead of spinner for the good user experience
  if (listOfRestorent.length === 0) {
    return <ShimmerUI />;
  }
  return (
    <div className="Body-Container">
      <div className="filter-container">
        <input
          type="text"
          className="search-input"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        ></input>
        <button
          className="search-btn"
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
          className="filter-btn"
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
          className="filter-btn"
          onClick={() => {
            setSearchListRestorent(listOfRestorent);
          }}
        >
          All Restorents
        </button>
      </div>

      <div className="rest-Container">
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
