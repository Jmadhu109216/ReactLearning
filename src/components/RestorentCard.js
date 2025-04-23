const RestorentCard = (
  { name, cloudinaryImageId, cuisines, sla, avgRatingString } // destructuring the props
) => {
  return (
    <div className="rest-cord">
      <img
        src={
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
          cloudinaryImageId
        }
      />
      <h2>{name}</h2>
      <h3>{cuisines.join(", ")}</h3>
      <h4>{avgRatingString} star</h4>
      <h4>{sla.lastMileTravelString} minutes</h4>
    </div>
  );
};
export default RestorentCard;
