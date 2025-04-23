import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";

//*****************************Project***************************************/
const root = ReactDOM.createRoot(document.getElementById("root"));

//**** project Design********
/*
==>Header
  -Logo
  -Navigation box (cort, home)

==>Bod y
  -Search bar and its button
  -Restorent container
  -Restorent cort

==>Footer
  -links
  -Copy wrights
  -Contact
*/

const AppLayout = () => {
  return (
    <div className="App-Name">
      {<Header />}

      {<Body />}
    </div>
  );
};
root.render(<AppLayout />);

//****************************Learning ******************************************

// //here heading == will create an object/element
// const heading = React.createElement(
//   "h1",
//   { className: "name", xyz: "ABC", id: "heading" },
//   "Hello World from React!"
// );
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);

// // /*
// // how to create the nested tags

// // <div id="parent">
// //   <div id="child">
// //     <h1>Iam inside H1 Tag</h1>
// //   </div>
// // </div>;

// // we can achive this with the same React.createElement()
// // */

// // const nestedDOM = React.createElement("div", { id: "parent" }, [
// //   React.createElement("div", { id: "child" }, [
// //     React.createElement("h1", {}, "Im on H1 tag of child1"),
// //     React.createElement("h2", {}, "Iam an h2 Tag of child1"),
// //   ]),
// //   React.createElement("div", { id: "child2" }, [
// //     React.createElement("h1", {}, "Im on H1 tag of child2"),
// //     React.createElement("h2", {}, "Iam an h2 Tag of child2"),
// //   ]),
// // ]);

// // root.render(nestedDOM);

// //**using JSX **********
// // this will also used to create the react element but it is very handy and eassy to write and understand*/
// const headingJSX = <h1 id="headingg">hello iam created by JSX</h1>;
// root.render(headingJSX);

// //*******functional component */

// // const HeadingTitle = function () {
// //   return <h1 id="main">iam from the parent function component</h1>;
// // };
// // const HeadingName = function () {
// //   return (
// //     <div id="container">
// //       <HeadingTitle />
// //       <h2 id="child">iam from the child component</h2>
// //     </div>
// //   );
// // };
// // root.render(<HeadingName />);

// /*****
// normal function

// function name1{
//   return true
// }

// const name2=function(){
//   return true
// }

// //arrow function
// const name3=()=>true
// // if there is a single line of execution then no need to wrap in {} and no need to mention return
// */

// //*******calling a funtion componet, JSX and java script varialble inside one each other */
// const TitleComp = () => {
//   return <h1>iam from title component </h1>;
// };

// const TitleJAS = <h2>Iam from title JAX component</h2>;
// const valueNum = 10000;
// const HeadingCom = () => (
//   <div id="parentt">
//     {TitleJAS}
//     {<TitleComp />}
//     {<title>how are u </title>}
//     {TitleComp()}
//     <h3 id="headinggg"> {valueNum} Iam from heading component</h3>;
//   </div>
// );
// root.render(<HeadingCom />);
