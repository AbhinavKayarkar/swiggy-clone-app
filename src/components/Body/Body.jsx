import React, { useEffect, useState } from "react";
import star from "../../assets/imgs/star-rating.png";
import { SWIGGGY_API_URL, IMG_URL } from "../../../utils/constants";
import useRestaurants from "../../../utils/hooks/useRestaurants";
import RestaurantCard from "../RestaurantCard/RestaurantCard";
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
  return (
    <>
      {/* Search feild */}
      <div>
        <input
          type="text"
          placeholder="search"
          onChange={(e) => setSearchedText(e.target.value)}
        />
        <button onClick={handleSearch}>search</button>
      </div>

      {/* Restaurants Cards */}
      <div className="cards">
        {filteredRestaurants?.map((item) => {
          return <RestaurantCard item={item} />;
        })}
      </div>
    </>
  );
}

export default Body;
