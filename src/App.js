import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import Shimmer from "./components/Shimmer";

const AppLayout = () => {
  return (
    <div>
      <Header />
      <Body />
      <Shimmer />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);
