import React, { Component } from 'react';
import './Nav.css';

class Nav extends Component {
  constructor() {
    super()
  }

  render() {
    return (
      <div className="nav-wrapper">
        <div className="header-row">
          <h1 className="title-logo">SWAPIBox</h1>
          <div className="favorites">FAV PLACEHOLDER</div>
        </div>
        <div className="button-row">
          <button>ButtonPlaceholder</button>
          <button>ButtonPlaceholder</button>
          <button>ButtonPlacedholder</button>
        </div>
      </div>
    )
  }
}

export default Nav;