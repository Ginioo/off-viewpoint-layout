import React, {Component} from 'react';
import {Container, Row, Col} from 'reactstrap';
import '../styles/CompanyIntroduction.scss';

export default class CompanyIntroduction extends Component {
  render() {
    return (
      <div id="company-introduction">
        <div className="company-introduction-bg-image hidden-md-down">
          <Container className="dark-gray">
            <Row>
              <Col lg={{size: 6}}>
                <h1 className="display-4 font-bold padding-top-2em">
                  <span>公司背景</span>
                </h1>
                <p className="company-introduction-text padding-bottom-4em">
                  弘大園藝有限公司由 Charlie 和 Jany Chen 於1979年成立，是因為他們對園藝產生的熱情。 多年來，弘大一直通過進出口台灣和中國的園藝產品來擴大我們的服務範圍，為全球客戶提供廣泛的產品。
                  我們還與種植者和苗圃合作，提供高品質和專業的服務。 我們相信，我們的客戶是我們的工作的中心，並致力於提供專業的頂級服務。
                </p>
              </Col>
              <Col lg={{size: 6}}>
                <h1 className="display-4 font-anton font-bold padding-top-2em">
                  <span>OUR BACKGROUND</span>
                </h1>
                <p className="company-introduction-text padding-bottom-4em">
                  Hortilife Horticultural Co, Ltd was funded in 1979 by Charlie and Jany Chen with their passion in
                  horticultural productions. Over the years, Hortilife has been expending our services through importing
                  and
                  exporting horticultural products from both Taiwan and China to provide wide range of products for our
                  clients worldwide. We also partner with growers and nurseries to provide top quality and professional
                  services. We believe that our clients are at the center of what we do and committed to provide best
                  services professionally.
                </p>
              </Col>
            </Row>
          </Container>
        </div>

        <div className="company-introduction-bg-image-mobile hidden-lg-up">
          <Container className="dark-gray">
            <Row>
              <Col xs={{size: 12}}>
                <h1 className="display-6 font-bold padding-top-1em">
                  <span>公司背景</span>
                </h1>
                <p className="company-introduction-text">
                  弘大園藝有限公司由 Charlie 和 Jany Chen 於1979年成立，是因為他們對園藝產生的熱情。 多年來，弘大一直通過進出口台灣和中國的園藝產品來擴大我們的服務範圍，為全球客戶提供廣泛的產品。
                  我們還與種植者和苗圃合作，提供高品質和專業的服務。 我們相信，我們的客戶是我們的工作的中心，並致力於提供專業的頂級服務。
                </p>
              </Col>
              <Col xs={{size: 12}}>
                <h1 className="display-6 font-anton font-bold padding-top-1em">
                  <span>OUR BACKGROUND</span>
                </h1>
                <p className="company-introduction-text padding-bottom-1em">
                  Hortilife Horticultural Co, Ltd was funded in 1979 by Charlie and Jany Chen with their passion in
                  horticultural productions. Over the years, Hortilife has been expending our services through importing
                  and
                  exporting horticultural products from both Taiwan and China to provide wide range of products for our
                  clients worldwide. We also partner with growers and nurseries to provide top quality and professional
                  services. We believe that our clients are at the center of what we do and committed to provide best
                  services professionally.
                </p>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    );
  }
}