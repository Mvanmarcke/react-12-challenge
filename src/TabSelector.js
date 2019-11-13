import React, { Component } from 'react';

class TabSelector extends Component {
  constructor(props) {
    super(props);
  }

  

  render() {
    return (
      <div className="TabSelector">
        <button
          id="home"
          onClick={this.props.handleChangeTab}
          className={this.props.activeID === 'home' ? 'active' : ''}
        >
          Home
        </button>
        <button
          id="about"
          onClick={this.props.handleChangeTab}
          className={this.props.activeID === 'about' ? 'active' : ''}
        >
          About
        </button>
        <button
          id="contact"
          onClick={this.props.handleChangeTab}
          className={this.props.activeID === 'contact' ? 'active' : ''}
        >
          Contact
        </button>
      </div>
    );
  }
}

export default TabSelector;
