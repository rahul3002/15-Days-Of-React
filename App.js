import React from "react";
import ReactDOM from "react-dom/client";
import RestaurantCard from "./components/RestaurantCard";
import RestaurantData from "./RestaurantData";

const Logo = () => {
  const src =
    "https://img.freepik.com/free-vector/detailed-chef-logo-template_23-2148986823.jpg";
  return <img className="logo" src={src}></img>;
};

const NavItems = () => {
  return (
    <div className="navItems">
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Help</li>
        <li>Cart</li>
      </ul>
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



const Body = () => {

  const cards = RestaurantData.map((restaurant, index) => <RestaurantCard key={index} restaurant={restaurant} />);
  return (
    <div className="body">
      <div className="search">
        Search
        <input className="name" placeholder="search food"></input>
      </div>
      <div className="res-Container">
        {cards}
      </div>
    </div>
  );
};

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);
