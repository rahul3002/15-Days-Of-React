import RestaurantCard from "./RestaurantCard";
import restList from "../utils/mockData";

const Body = () => {
  return (
    <div className="body">
      <div className="btn">
        <button
          className="rated-rest-btn"
          onClick={() => {
            restList = restList.filter((restaurant) => {
              return restaurant.data.rating > 1.8;
            });
            console.log(restList);
          }}
        >
          Top Rated Restaurant
        </button>
      </div>
      <div className="res-Container">
        {restList.map((restaurant) => {
          return (
            <RestaurantCard {...restaurant.data} key={restaurant.data.id} />
          );
        })}
      </div>
    </div>
  );
};

export default Body;
