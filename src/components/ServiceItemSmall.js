import React from 'react';
import {Link} from 'react-router';
import ServiceItem from './ServiceItem';
import {BackTop} from 'antd';
import '../styles/ServiceItem.scss';

export default class ServiceItemSmall extends ServiceItem {

  render() {
    return (
      <div id="service-item" className={`${this.props.bgImage} small-item`}>
        <BackTop visibilityHeight={0}>
          <Link to={this.props.linkTo} className="text-white">
            <h1 className="display-4 font-anton padding-top-15px">
              {this.props.acronym}
            </h1>
            <h6 className="display-6 font-roboto">
              {this.props.contentUs}
            </h6>
            <h6 className="display-6">
              {this.props.contentZhTw}
            </h6>
          </Link>
        </BackTop>
      </div>
    );
  }
}