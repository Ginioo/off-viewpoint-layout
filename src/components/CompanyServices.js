import React, {Component} from 'react';
import {Container, Row, Col} from 'reactstrap'
import ServiceItem from './ServiceItem';
import ServiceItemSmall from './ServiceItemSmall';
import '../styles/CompanyServices.scss';

import brandIcon from "../images/brandIcon.png";

export default class CompanyServices extends Component {

  render() {
    return (
      <div id="company-services">
        <Container className="dark-gray">
          <div className="hidden-sm-down">
            <h1 className="display-4 font-bold padding-top-1em">
              <span>服務項目</span>
            </h1>
            <h1 className="display-4 font-anton font-bold">
              <span>SERVICE PROVIDED</span>
            </h1>
            <Row className="padding-bottom-4em">
              <Col className="hidden-md-down" md="1" lg="1" xl="2" />
              <Col md="4" lg="3" xl="3">
                <ServiceItem
                  linkTo="/import/"
                  acronym="i"
                  contentUs="IMPORT"
                  contentZhTw="進口項目"
                  bgImage="background-image-1"
                  buttonType="1"
                  buttonAnimation="zoomIn"
                  acronymAnimation="fadeInUp"/>
              </Col>
              <Col md="4" lg="4" xl="auto">
                <ServiceItem
                  linkTo="/export/"
                  acronym="e"
                  contentUs="EXPORT"
                  contentZhTw="出口項目"
                  bgImage="background-image-2"
                  buttonType="2"
                  buttonAnimation="fadeInLeft"
                  acronymAnimation="fadeInUp"/>
              </Col>
              <Col md="4" lg="3" xl="3">
                <ServiceItem
                  linkTo="/deco/"
                  acronym="d"
                  contentUs="DECO"
                  contentZhTw="乾燥裝飾"
                  bgImage="background-image-1"
                  buttonType="1"
                  buttonAnimation="bounceIn"
                  acronymAnimation="fadeInUp"/>
              </Col>
              <Col className="hidden-md-down" md="1" lg="1" xl="2" />
            </Row>
          </div>

          <div className="hidden-md-up">
            <h1 className="display-6 font-bold padding-top-1em">
              <span>服務項目</span>
            </h1>
            <h1 className="display-6 font-anton font-bold">
              <span>SERVICE PROVIDED</span>
            </h1>
            <Row className="padding-bottom-1em">
                <ServiceItemSmall
                  className="text-center"
                  linkTo="/import/"
                  acronym="i"
                  contentUs="IMPORT"
                  contentZhTw="進口項目"
                  bgImage="background-image-1"/>
                <ServiceItemSmall
                  linkTo="/export/"
                  acronym="e"
                  contentUs="EXPORT"
                  contentZhTw="出口項目"
                  bgImage="background-image-2"/>
                <div className="brand-ornamental-icon">
                  <img src={brandIcon} />
                </div>
                <ServiceItemSmall
                  linkTo="/deco/"
                  acronym="d"
                  contentUs="DECO"
                  contentZhTw="乾燥裝飾"
                  bgImage="background-image-1"/>
            </Row>
          </div>
        </Container>
      </div>
    );
  }
}