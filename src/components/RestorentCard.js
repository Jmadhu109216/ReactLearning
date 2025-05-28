import { Link } from "react-router-dom";
import RestDetailCordClass from "./RestorentMenu";
import { ClOUDINARY_IMAGE_URL } from "../components/Utils/constants";

//Link is used to add the url to the tag similarly like ancker tag,
// but with the ancker tag entire app will get render

const RestorentCard = (
  { name, cloudinaryImageId, cuisines, sla, avgRatingString, id } // destructuring the props
) => {
  return (
    <div className="rest-cord w-52 m-3 shadow-xl shadow-gray-300 border border-white bg-gray-100 hover:bg-gray-200 rounded-lg">
      <img
        className="p-1 h-80 rounded-2xl"
        src={ClOUDINARY_IMAGE_URL + cloudinaryImageId}
      />
      <Link to={"/restorent/" + id}>
        <h1 className="font-bold py-2">{name}</h1>
      </Link>

      <h3>{cuisines.join(", ")}</h3>
      <h4>{avgRatingString} star</h4>
      <h4>{sla.lastMileTravelString} minutes</h4>
    </div>
  );
};

//Heigher order components
//will take one component as argument and return enhanced component
export const PromotedLableOnCard = (restorent) => {
  return () => {
    return (
      <div>
        <lable>Promoted</lable>
        <RestorentCard />
      </div>
    );
  };
};
export default RestorentCard;
