import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";

const Body = () => {
  const [resList, setResList] = useState([]);

  const fetchData = async () => {
    try {
      const response = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.5538241&lng=73.9476689&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
      );
      const data = await response.json();
      setResList(data.restaurants); // Assuming the data is in data.restaurants
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const filterRestaurants = () => {
    // Filter the restaurants based on your condition
    const filteredRestaurants = resList.filter((restaurant) => {
      // Replace the condition below with your own filtering logic
      return restaurant.rating > 4.5;
    });

    // Update the state with the filtered restaurants
    setResList(filteredRestaurants);
  };

  return (
    <div className="body">
      <div className="btn">
        <button className="rated-rest-btn" onClick={filterRestaurants}>
          Top Rated Restaurant
        </button>
      </div>
      <div className="res-Container">
        {resList.map((restaurant) => {
          return <RestaurantCard key={restaurant.id} {...restaurant} />;
        })}
      </div>
    </div>
  );
};

export default Body;
