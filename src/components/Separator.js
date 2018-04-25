import React, {Component} from 'react';
import '../styles/Separator.scss';

export default class Separator extends Component {
  render() {
    return (
      <div id="separator">
        <div className="hidden-lg-down separator"/>
        <div className="hidden-md-down hidden-xl-up separator-tablet"/>
        <div className="hidden-lg-up separator-mobile"/>
      </div>
    );
  }
}