import { IMAGE_URL } from "../Utils/common";

const ResCard = ({ resData }) => {
  const { name, cuisines, avgRating, sla, costForTwo, cloudinaryImageId } =
    resData?.info;
  return (
    <div className="bg-orange-300 p-4 m-4 w-[250px] rounded-lg hover:border-2 border-black">
      <img
        className="rounded-lg"
        src={`${IMAGE_URL}${cloudinaryImageId}`}
      ></img>
      <p className="font-bold py-2">{name}</p>
      <p>Cuisines: {cuisines?.join(", ")} </p>
      <p>Rating: {avgRating}</p>
      <p>ETA: {sla?.slaString}</p>
      <p>Cost: {costForTwo}</p>
    </div>
  );
};

export const vegResturant = (ResCard) => {
  return (props) => {
    <>
      <label className="absolute bg-black text-white">Veg Res</label>
      <ResCard {...props} />
    </>;
  };
};

export default ResCard;
