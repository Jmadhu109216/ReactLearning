import React from "react";
import ReactDOM from "react-dom/client";

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

const RestContainer = (prop) => {
  return (
    <div className="rest-cord">
      <img
        className="Item-IMG"
        src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/lwpftwtyym12ly6udmgf"
      />
      <h4 className="rest-Name">{prop.restName}</h4>
      <h4 className="rest-rating">{prop.restRate}</h4>
      <h4 className="location">{prop.restLocation}</h4>
    </div>
  );
};

const Body = () => {
  return (
    <div className="Body-Container">
      <div className="Search-Container">Search bar</div>

      <div className="rest-Container">
        <RestContainer
          restName="Mehfil"
          restRate="4 star"
          restLocation="Hitech City"
        />
        <RestContainer
          restName="Anthera"
          restRate="4.7 star"
          restLocation="Madhapur"
        />
        <RestContainer
          restName="KFC"
          restRate="3.2 star"
          restLocation="Raidhurgam"
        />
      </div>
    </div>
  );
};

const Header = () => {
  return (
    <div className="Header-Container">
      <div className="Logo">
        <img
          className="Logo-Name"
          src="https://i0.wp.com/opportunitycell.com/wp-content/uploads/2022/09/Screen-Shot-2022-09-02-at-4.52.38-PM.png?fit=480%2C250&ssl=1"
        />
      </div>
      <div className="Navigation-box">
        <ul>
          <li
            className="cart"
            src="https://cdn-icons-png.flaticon.com/512/1413/1413908.png"
          >
            Cart
          </li>
          <li className="Home">Home</li>
          <li className="About">About</li>
          <li className="SignOut">Sign Out</li>
        </ul>
      </div>
    </div>
  );
};

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
