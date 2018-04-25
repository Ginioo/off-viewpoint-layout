import React, {Component} from 'react';
import CompanyName from './CompanyName';
import CompanyIntroduction from './CompanyIntroduction';
import CompanyAdage from './CompanyAdage';
import CompanyServices from './CompanyServices';

export default class MainPage extends Component {
  render() {
    return (
      <div id="main-page">
        <CompanyName />
        <CompanyServices />
        <CompanyAdage />
        <CompanyIntroduction />
      </div>
    );
  }
}