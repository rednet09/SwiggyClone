import ResCard from "./ResCard";
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
    <main className="body-content">
      <div className="search-container">
        <button
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
        <div>
          <label>
            Search:
            <input
              onChange={(e) => setSearchText(e.target.value)}
              type="text"
              name="name"
              value={searchText}
            />
          </label>
          <button
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
        <div className="res-container">
          {filteredResturant.map((resturant) => {
            return (
              <Link
                key={resturant?.info?.id}
                to={`/menu/${resturant?.info?.id}`}
              >
                <ResCard resData={resturant} />{" "}
              </Link>
            );
          })}
        </div>
      )}
    </main>
  );
};
export default Body;
