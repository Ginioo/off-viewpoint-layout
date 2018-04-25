import React, {Component} from 'react';
import {Link} from 'react-router';
import {BackTop} from 'antd';
import '../styles/ServiceItem.scss';

export default class ServiceItem extends Component {

  render() {
    return (
      <div id="service-item">
        <BackTop visibilityHeight={0}>
          <Link to={this.props.linkTo} className="text-white">
            <div className={`${this.props.bgImage} large-item`}>
              <h1 className={`display-1 font-anton padding-top-50px animated ${this.props.acronymAnimation}`}>
                {this.props.acronym}
              </h1>
              <h5 className="display-6 font-roboto">
                {this.props.contentUs}
              </h5>
              <h5 className="display-6 font-roboto">
                {this.props.contentZhTw}
              </h5>
            </div>
            <div className={`dark-gray animated ${this.props.buttonAnimation} buttonType-${this.props.buttonType}`}>
              {this.props.contentUs}
            </div>
          </Link>
        </BackTop>
      </div>
    );
  }
}