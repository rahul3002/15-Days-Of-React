import React from "react";
import ReactDOM from "react-dom/client";

const Logo = () => {
  const src =
    "https://img.freepik.com/free-vector/detailed-chef-logo-template_23-2148986823.jpg";
  return <img className="logo" src={src}></img>;
};

const NavItems = () => {
  return (
    <div className="navItems">
      <ui>
        <li>Home</li>
        <li>About</li>
        <li>Help</li>
        <li>Cart</li>
      </ui>
    </div>
  );
};

const Header = () => {
  return (
    <div className="header">
      <Logo />
      <NavItems />
    </div>
  );
};

const RestaurantCard = (props) => {
  console.log(props);
  return (
    <div className="res-card">
      <img
        className="res-logo"
        alt="restaurant-logo"
        src="https://media.istockphoto.com/id/1345624336/photo/chicken-biriyani.jpg?s=612x612&w=0&k=20&c=adU_N0P-1SKMQLZu5yu7aPknfLLgbViI8XILqLP92A4= "
      />
      <h3>{props.resName}</h3>
      <h4>Biriyani, North India, Asian</h4>
      <h4>4.4 stars</h4>
      <h4>38 minutes</h4>
    </div>
  );
};

const Body = () => {
  return (
    <div className="body">
      <div className="search">
        Search
        <input className="name" placeholder="search food"></input>
      </div>
      <div className="res-Container">
        <RestaurantCard
          resName="Meghana Foods"
          Cusines="Biriyani, North India, Asian"
        />
        <RestaurantCard resName="KFC" Cusine="Burgers, FastFood" />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
      </div>
    </div>
  );
};

const AppLayout = () => {
  return (
    <div class="app">
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);
