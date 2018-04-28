import React, {Component} from 'react';

export default class RightSideMenu extends Component {
  render() {
    return (
      <div id="right-side-menu" className="slide-menu">
        {this.props.children}
      </div>
    );
  }
}