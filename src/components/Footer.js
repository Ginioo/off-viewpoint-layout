import React, {Component} from 'react';
import {BackTop} from 'antd';
import '../styles/Footer.scss';

export default class Footer extends Component {

  render() {
    return (
      <div id="footer" className="font-roboto bg-brown">
        <div className="dark-gray padding-bottom-1em">
          <BackTop visibilityHeight={0}>
            <div className="back-top-inner">BACK TO TOP</div>
          </BackTop>
          <div>All right reserved by </div>
          <span>Hortilife Horticultural Co., Ltd.</span>
        </div>
      </div>
    );
  }
}