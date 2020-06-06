import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
class Navbar extends Component {
  state = {
    navDisplay: "none",
  };

  hideNavbar = () => {
    if (this.state.navDisplay === "none") {
      this.setState({ navDisplay: "block" });
    } else {
      this.setState({ navDisplay: "none" });
    }
  };

  render() {
    return (
      <nav>
        <span onClick={this.hideNavbar} className='material-icons'>
          menu
        </span>
        <div id='navBar' style={{ display: this.state.navDisplay }}>
          <Link to='/'> Home </Link>
          <br />
          <Link to='/vendor'> Vendor Management </Link>
          <br />
          <Link to='/policy'> Policies </Link>
          <br />
          <Link to='/riskassessment'> Risk Assessment </Link>
          <br />
          <Link to='/bia'> Business Impact Analysis </Link>
          <br />
          <Link to='/tasks'> Compliance Tasks </Link>
          <br />
        </div>
        <h1>Easy Comply</h1>
      </nav>
    );
  }
}

export default Navbar;
