import ShimmerUi from "./ShimmerUi";
import { useParams } from "react-router-dom";
import useResturantMenu from "../Utils/useResturantMenu";
const ResturantMenu = () => {
  const { resId } = useParams();

  const menu = useResturantMenu(resId);

  if (menu === null) return <ShimmerUi />;

  const { name, costForTwoMessage } = menu?.cards[2]?.card?.card?.info;
  return (
    <>
      <div>
        <h1>{name}</h1>
        <h2>{costForTwoMessage}</h2>
      </div>
    </>
  );
};

export default ResturantMenu;
