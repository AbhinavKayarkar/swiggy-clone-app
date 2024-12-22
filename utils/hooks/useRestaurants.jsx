import React, { useEffect, useState } from "react";
import { SWIGGGY_API_URL } from "../constants";


// custom hook
const useRestaurants = () => {
  const [restaurants, setRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState(restaurants);
  useEffect(() => {
    // to fetch the restaurantsfrom Api of swiggy
    getRestaurants();
  }, []);

  async function getRestaurants() {
    const fetchedData = await fetch(SWIGGGY_API_URL);

    const json = await fetchedData.json();
    const res =
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants;
    setRestaurants(res);
    setFilteredRestaurants(res);
  }

  return [restaurants, filteredRestaurants, setFilteredRestaurants];
};

export default useRestaurants;
