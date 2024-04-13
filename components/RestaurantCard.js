
const RestaurantCard = (props) => {
    const restaurant = props.restaurant;
    return (
        <div className="res-card">
            <img
                className="res-logo"
                alt="restaurant-logo"
                src="https://media.istockphoto.com/id/1345624336/photo/chicken-biriyani.jpg?s=612x612&w=0&k=20&c=adU_N0P-1SKMQLZu5yu7aPknfLLgbViI8XILqLP92A4= "
            />
            <h3>{restaurant.name}</h3>
            <h4>{restaurant.rating}</h4>
            <h4>{restaurant.address}</h4>
            <h4>{restaurant.other_info.cuisine}</h4>
        </div>
    );
};

export default RestaurantCard;