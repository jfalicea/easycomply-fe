import React, { Component } from "react";
import "./Home.css";
class Home extends Component {
  state = {
    password: "",
    username: "",
  };

  handleInputChange = (e) => {
    const { id, value } = e.target;
    switch (id) {
      case "username":
        return this.setState({ username: value });
      case "password":
        return this.setState({ password: value });
      default:
        return null;
    }
  };
  render() {
    return (
      <>
        <main>
          <div id='welcome-section'>
            <p>
              <h1>Easy Comply</h1>
              The easiest way to comply with SOC 2 requirements.
            </p>
            <div id='login-box'>
              <label htmlFor='username'>username: </label>
              <input
                id='username'
                type='text'
                value={this.state.username}
                onChange={this.handleInputChange}
              />
              <label htmlFor='password'>password: </label>
              <input
                id='password'
                type='password'
                value={this.state.password}
                onChange={this.handleInputChange}
              />
              <br />
              <button>submit</button>
            </div>
          </div>
        </main>
      </>
    );
  }
}

export default Home;
