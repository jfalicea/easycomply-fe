import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./pages.js/Home.js/Home";
import Navbar from "./pages.js/Navabar/Navbar";
import VendorManagement from "./pages.js/Vendor.js/Vendor";

function App() {
  return (
    <Router>
      <Route path='/' component={Navbar} />
      <Route exact path='/' component={Home} />
      <Route exact path='/vendor' component={VendorManagement} />
    </Router>
  );
}

export default App;
