import React from "react";
import { CDN_URL } from "../utils/constants";

const RestaurantCard = ({
  name,
  cuisines = [],
  cloudinaryImageId,
  lastMileTravelString,
  avgRating,
}) => {
  return (
    <div className="res-card">
      <img
        className="res-logo"
        alt="restaurant-logo"
        src={CDN_URL + cloudinaryImageId}
      />
      <h2>{name}</h2>
      <h3>{cuisines.join(", ")}</h3>
      <h4>{lastMileTravelString} minutes</h4>
      <h4>{avgRating}</h4>
    </div>
  );
};

export default RestaurantCard;
