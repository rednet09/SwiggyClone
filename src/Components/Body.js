import ResCard, { vegResturant } from "./ResCard";
// import resList from "../Utils/mockData";
import { useEffect, useState } from "react";
import ShimmerUi from "./ShimmerUi";
import { API_URL } from "../API/Urls";
import { Link } from "react-router-dom";
import useOnlineStatus from "../Utils/useOnlineStatus";
const Body = () => {
  const [resturantList, setResturantList] = useState([]);
  const [filteredResturant, setFilteredResturant] = useState([]);
  const [searchText, setSearchText] = useState();
  const status = useOnlineStatus();
  const vegResCard = vegResturant(ResCard);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(API_URL);

    const json = await data.json();

    setResturantList(
      json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );

    setFilteredResturant(
      json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  if (!status) return <h1>Looks like Your Internet is not working</h1>;

  if (filteredResturant === null) return <ShimmerUi />;

  return (
    <main className="m-9">
      <div className="flex justify-between my-6">
        <button
          className="bg-slate-600 rounded-lg p-4 text-white"
          onClick={() => {
            const updateList = resturantList.filter((e) => {
              return e?.info?.avgRating > 4;
            });
            setResturantList(updateList);
            setFilteredResturant(updateList);
          }}
        >
          Top Rated Resturants
        </button>
        <div className="flex gap-2 items-center">
          <label className="py-2 mx-2">
            Search:
            <input
              className="border-2 border-black rounded-lg px-4"
              onChange={(e) => setSearchText(e.target.value)}
              type="text"
              name="name"
              value={searchText}
            />
          </label>
          <button
            className="bg-slate-600 rounded-lg px-2 text-white"
            onClick={() => {
              const searchList = resturantList.filter((e) => {
                return e?.info?.name
                  .toLocaleLowerCase()
                  .includes(searchText.toLowerCase());
              });
              setFilteredResturant(searchList);
            }}
          >
            Search
          </button>
        </div>
      </div>
      {resturantList?.length === 0 ? (
        <ShimmerUi />
      ) : (
        <div className="flex flex-wrap gap-4">
          {filteredResturant.map((resturant) => {
            return (
              <Link
                key={resturant?.info?.id}
                to={`/menu/${resturant?.info?.id}`}
              >
                {resturant?.info?.veg ? (
                  <vegResCard resData={resturant} />
                ) : (
                  <ResCard resData={resturant} />
                )}{" "}
              </Link>
            );
          })}
        </div>
      )}
    </main>
  );
};

export default Body;
