import User from "./UserClass";
import React from "react";

class About extends React.Component {
  constructor(props) {
    super(props);
    console.log("parent constructor called");
  }

  componentDidMount() {
    console.log("parent componentDidMount called");
  }

  componentDidUpdate() {
    console.log("parent componentDidUpdate called");
  }

  //React lifecycle methods:
  //1. constructor: is used to initialize the state and props of the component
  //2. render: is used to render the component on the screen.
  //3. componentDidMount: is used to fetch data from API and it is called only once when the component is mounted
  //4. componentDidUpdate: is used to update the component when the state or props are changed.
  //5. componentWillUnmount: is used to clean up the resources when the component is unmounted.

  /*componentDidMount(): is used to fetch data from API and it is called only once when the component is mounted
   *First constructor is called, then render is called, and then componentDidMount is called.
   *cycle of the component is like this:
   *constructor -> render -> componentDidMount ->
   * if multiple components are there, then the cycle will be like this:it will be mount in 2 phases,
   * 1st phase(Render Phase): actual DOM is created and then the constructor is called, then render is called, 
   * 2nd phase (commit phase) DOM is updated in in single BATCH: the component is mounted and the componentDidMount is called
   
   bellow is the output of the console.log statements in the code:
      parent constructor called 
      Parent render called 

        First User constructor called 
        First User render called 

        Second User constructor called 
        Second User render called 

        First User child componentDidMount called 
        Second User child componentDidMount called
      parent componentDidMount called


      componentDidUpdate: is used to update the component when the state or props are changed.
      *componentDidUpdate is called when the state or props are changed.

   */

  render() {
    return (
      <div className="about text-center bg-gray-100 w-fit p-10 m-10 mx-96 justify-self-center rounded-xl">
        <h1 className="font-bold">React/React/React.....seeekoooo</h1>
        <h2>This project helps you to learn React library</h2>
        <h3>Below are the technologies are used to build this project</h3>
        <ul>
          <li>React</li>
          <li>React Router</li>
          <li>React DOM</li>

          <li>JavaScript</li>
          <li>HTML</li>
          <li>CSS</li>
          <li>***Madhu Skills***{console.log("Parent render called")}</li>
        </ul>
        <div className="userDetails">
          <div className="user">
            <User userName={"First User"} userRole={"AdminUser"} />
            <User userName={"Second User"} userRole={"SuperUser"} />
          </div>
        </div>
      </div>
    );
  }
}
export default About;
