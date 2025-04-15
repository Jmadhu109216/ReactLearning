//here heading == will create an object/element
const heading = React.createElement(
  "h1",
  { className: "name", xyz: "ABC", id: "heading" },
  "Hello World from React!"
);
const root = ReactDOM.createRoot(document.getElementById("root"));
//root.render(heading);

/*
how to create the nested tags

<div id="parent">
  <div id="child">
    <h1>Iam inside H1 Tag</h1>
  </div>
</div>;

we can achive this with the same React.createElement()
*/

const nestedDOM = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "Im on H1 tag of child1"),
    React.createElement("h2", {}, "Iam an h2 Tag of child1"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", {}, "Im on H1 tag of child2"),
    React.createElement("h2", {}, "Iam an h2 Tag of child2"),
  ]),
]);

root.render(nestedDOM);
