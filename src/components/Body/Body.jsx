import React, { useEffect, useState } from "react";
import useRestaurants from "../../../utils/hooks/useRestaurants";
import RestaurantCard from "../RestaurantCard/RestaurantCard";
import Shimmer from "../../../utils/Shimmer";
import { Link } from "react-router-dom";

function Body() {
  const [searchedText, setSearchedText] = useState("");
  const [restaurants, filteredRestaurants, setFilteredRestaurants] =
    useRestaurants(); // custom hook -- nothing but a js function eith some functionality

  // handle Search functionality
  const handleSearch = () => {
    if (searchedText?.length === 0) {
      setFilteredRestaurants(restaurants);
    }
    let data = restaurants.filter((item) =>
      item?.info?.name?.toLowerCase()?.includes(searchedText?.toLowerCase())
    );
    setFilteredRestaurants(data);
    setSearchedText(" ");
  };
  if (restaurants.length === 0) {
    return <Shimmer />;
  }
  return (
    <div className="">
      {/* Search feild */}
      <div className="text-center m-2 p-1">
        <input
        data-testid="search-input"
          className=" bg-slate-100 border-spacing-1 text-center p-1 px-3 mx-5 m-1 hover:bg-orange-200"
          type="text"
          placeholder="search"
          onChange={(e) => setSearchedText(e.target.value)}
        />
        <button
        data-testid="search-btn"
          className="bg-blue-500 p-2 rounded-full px-4 text-white"
          onClick={handleSearch}
        >
          search
        </button>
      </div>

      {/* Restaurants Cards */}
      <div className="grid grid-cols-5 justify-items-center mt-2" data-testid="res-card">
        {filteredRestaurants?.map((item) => {
          return (
            <Link to={`/restaurants/${item.info.id}`}>
              <RestaurantCard key={item.info.id} item={item} />
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export default Body;
