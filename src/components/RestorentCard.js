import { Link } from "react-router-dom";
import RestDetailCordClass from "./RestorentMenu";

//Link is used to add the url to the tag similarly like ancker tag,
// but with the ancker tag entire app will get render

const RestorentCard = (
  { name, cloudinaryImageId, cuisines, sla, avgRatingString, id } // destructuring the props
) => {
  return (
    <div className="rest-cord">
      <img
        src={
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
          cloudinaryImageId
        }
      />
      <Link to={"/restorent/" + id}>
        <h1>{name}</h1>
      </Link>
      <h2>{name}</h2>
      <h3>{cuisines.join(", ")}</h3>
      <h4>{avgRatingString} star</h4>
      <h4>{sla.lastMileTravelString} minutes</h4>
    </div>
  );
};
export default RestorentCard;
