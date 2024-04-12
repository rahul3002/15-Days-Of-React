import React from "react";
import ReactDOM from "react-dom/client";

const Logo = () => {
  return <h1>Logo</h1>
}


const Header = () => {
  return (
    <div className="header">
      <div className="logoContainer">
        <img
          className="logo"
          src="https://img.freepik.com/free-vector/detailed-chef-logo-template_23-2148986823.jpg "
        ></img>
      </div>
      <div className="navItems">
        <ui>
          <li>AboutUs</li>
          <li>Home</li>
          <li>ContactUs</li>
          <li>Cart</li>
        </ui>
      </div>
    </div>
  );
};

const RestaurantCard = () => {
  return (
    <div className="res-card">
      <img
        className="res-logo"
        alt="restaurant-logo"
        src="https://media.istockphoto.com/id/1345624336/photo/chicken-biriyani.jpg?s=612x612&w=0&k=20&c=adU_N0P-1SKMQLZu5yu7aPknfLLgbViI8XILqLP92A4= "
      />
      <h3>Meghana Foods</h3>
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
      <Logo />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);
