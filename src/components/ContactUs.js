import React, {Component} from 'react';
import {Container, Row, Col} from 'reactstrap';
import '../styles/ContactUs.scss';

import facebookIcon from "../images/facebookIcon.png";

export default class ContactUs extends Component {

  render() {
    return (
      <div id="contact-us">
        <Container className="padding-top-2em padding-bottom-1em">
          <Row>
            <Col xs="12" sm="6" md={{size:4, offset:2}}>
              <p><span className="dark-gold">地址</span></p>
              <p><span>10556 台灣</span></p>
              <p><span>台北市</span></p>
              <p><span>松山區八德路三段12巷52弄11號2樓</span></p>
              <p><span className="dark-gold">電子郵箱</span></p>
              <p>hortlife@ms12.hinet.net</p>
              <p><span className="dark-gold">連絡電話</span></p>
              <p><span>+886 2 2578 7661</span></p>
            </Col>
            <Col xs="12" sm="6" md="4">
              <p><span className="dark-gold">Address</span></p>
              <p><span>2F, ALLEY 52, LANE 12, SEC 3, PA-TEH RD.</span></p>
              <p><span>TAIPEI</span></p>
              <p><span>TAIWAN 10556</span></p>
              <p><span className="dark-gold">Email</span></p>
              <p>hortlife@ms12.hinet.net</p>
              <p><span className="dark-gold">Phone</span></p>
              <p><span>+886 2 2578 7661</span></p>
            </Col>
          </Row>
        </Container>
        <Container fluid>
          <Row style={{backgroundColor:'#404040'}}>
            <Col>
              <img src={facebookIcon} className="padding-top-1em padding-bottom-1em"/>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}