import { IMAGE_URL } from "../Utils/common";

const ResCard = ({ resData }) => {
  const { name, cuisines, avgRating, sla, costForTwo, cloudinaryImageId } =
    resData?.info;
  return (
    <div className="res-card">
      <img className="card-img" src={`${IMAGE_URL}${cloudinaryImageId}`}></img>
      <p>{name}</p>
      <p>Cuisines: {cuisines?.join(", ")} </p>
      <p>Rating: {avgRating}</p>
      <p>ETA: {sla?.slaString}</p>
      <p>Cost: {costForTwo}</p>
    </div>
  );
};

export default ResCard;
