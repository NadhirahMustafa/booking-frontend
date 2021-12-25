import React from "react";
import '../styles/navbar.css';

export default class Navbar extends React.Component {
  
  render() {
    return (
      <div className="navbar-container">
        <div className="unit-wrapper">
          <div className="row">
            <div className="col-md-12 no-pad">
              WELCOME!
            </div>
          </div>
        </div>
      </div>
    );
  }
}
