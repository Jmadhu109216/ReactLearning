import React from "react";
class User extends React.Component {
  constructor(props) {
    super(props);
    // constructor is used to initialize the state and props of the component
    // constructor is called only once when the component is mounted
    //super(props) is used to call the constructor of the parent class (React.Component)
    //this.props is used to access the props of the component
    this.state = {
      count: 0,
    };
    console.log(this.props.userName + " constructor called");
  }
  componentDidMount() {
    console.log(this.props.userName + "child componentDidMount called");
  }

  componentDidUpdate() {
    console.log("" + this.props.userName + "child componentDidUpdate called");
  }

  render() {
    const { userName, userRole } = this.props;
    return (
      <div className="user-details text">
        <h1>
          User Details {console.log(this.props.userName + " render called")}
        </h1>
        <button
          className="bg-gray-300 border border-black rounded-l px-2"
          onClick={() => this.setState({ count: this.state.count + 1 })}
        >
          count
        </button>
        <h2>count: {this.state.count}</h2>
        <h2>User Name: {userName}</h2>
        <h3>User Role: {userRole}</h3>
      </div>
    );
  }
}

export default User;
