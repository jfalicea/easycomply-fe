import React, { Component } from "react";
import "./Vendor.css";
class VendorManagement extends Component {
  state = {
    vendorRisks: {
      stratRisks: {
        q1: "",
        q2: "",
        q3: "",
      },
      finRisks: {
        q1: "",
        q2: "",
        q3: "",
      },
    },
  };

  render() {
    return (
      <>
        <main>
          <h1>Vendor Management</h1>
          <div id='modal'>
            <h1>Add a Vendor</h1>
            <p>Strategic Risk: </p>
            <ul className='riskQuestions'>
              <li>
                Risk One: <input />
              </li>
              <li>
                Risk Two: <input />
              </li>
              <li>
                Risk Three: <input />
              </li>
            </ul>
            <p>Financial Risk: </p>
            <ul className='riskQuestions'>
              <li>
                Risk One: <input />
              </li>
              <li>
                Risk Two: <input />
              </li>
              <li>
                Risk Three: <input />
              </li>
            </ul>
          </div>
        </main>
      </>
    );
  }
}

export default VendorManagement;
