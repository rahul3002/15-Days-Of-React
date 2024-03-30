const heading = React.createElement(
  "div",
  { id: "parent" },
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "Hello I'm H1 Tag"),
    React.createElement("h2", {}, "Hello I'm H2 Tag"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", {}, "Hello I'm H1 Tag"),
    React.createElement("h2", {}, "Hello I'm H2 Tag"),
  ])
);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);
