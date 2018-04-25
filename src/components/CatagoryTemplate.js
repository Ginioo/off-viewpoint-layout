import React, {Component} from 'react';
import {Container, Row, Col} from 'reactstrap';
import ImageCarousel from './ImageCarousel';

class CatagoryTemplate extends Component {
  render() {
    return (
      <div className="flower-list">
        {/* desktop */}
        <Container className="hidden-md-down" style={{marginTop: '1em'}}>
          <Row>
            <Col className="hidden-md-down" lg={{size: 5}} xl={{size: 5, push: 1}}>
              <Row>
                <Col>
                  <h1 className={`display-3 font-bold ${this.props.gold ? 'dark-gold' : 'dark-gray'}`}>
                    <div>{this.props.zh_tw.line1}</div>
                    <div>{this.props.zh_tw.line2}</div>
                  </h1>
                </Col>
              </Row>
              <Row>
                <Col>
                  <h1 className="display-3 light-gray font-bold font-anton">
                    <div>{this.props.us.line1}</div>
                    <div>{this.props.us.line2}</div>
                  </h1>
                </Col>
              </Row>
              <Row>
                <Col>
                  <div className="display-5 dark-gray font-bold">{this.props.zh_tw.line3}</div>
                  <div className="display-5 light-gray">{this.props.us.line3}</div>
                </Col>
              </Row>
            </Col>
            <Col lg={{size: 6}} xl={{size: 5, push: 1}}>
              <Row>
                <Col xl={{size: 6}} style={{marginTop: '0.5em', marginBottom: '0.5em'}}>
                  <ImageCarousel flowers={this.props.list}/>
                </Col>
                <Col xl={{size: 6}} style={{marginTop: '0.5em', marginBottom: '0.5em'}}>
                  <ImageCarousel flowers={this.props.list2}/>
                </Col>
                <Col xl={{size: 6}} style={{marginTop: '0.5em', marginBottom: '0.5em'}}>
                  <ImageCarousel flowers={this.props.list3}/>
                </Col>
                <Col xl={{size: 6}} style={{marginTop: '0.5em', marginBottom: '0.5em'}}>
                  <ImageCarousel flowers={this.props.list4}/>
                </Col>
              </Row>
            </Col>
            <Col lg={{size: 2, push: 11}} xl={{size: 2, push: 1}}>
              <div style={{
                position: 'absolute',
                bottom: 0,
                marginLeft: '-1em',
                cursor: 'pointer',
                fontSize: '1.2em',
                textDecoration: 'underline'
              }}>
                <strong>
                  <a className="text-gray-dark font-bold font-anton" href="/">See More</a>
                </strong>
              </div>
            </Col>
          </Row>

        </Container>

        {/* tablet */}
        <Container className="hidden-sm-down hidden-lg-up" style={{margin: '1em'}}>
          <Row>
            <Col md={{size: 12}}>
              <Row>
                <Col>
                  <h5 className={`display-4 font-bold ${this.props.gold ? 'dark-gold' : 'dark-gray'}`}>
                    {this.props.zh_tw.line1}{this.props.zh_tw.line2}
                  </h5>
                </Col>
              </Row>
              <Row>
                <Col>
                  <h1 className="display-6 light-gray font-bold font-anton">
                    {this.props.us.line1}{this.props.us.line2}
                  </h1>
                </Col>
              </Row>
            </Col>
            <Col>
              <div className="display-5 dark-gray font-bold">{this.props.zh_tw.line3}</div>
              <div className="display-5 light-gray">{this.props.us.line3}</div>
            </Col>
            <Col md={{size: 2}}>
              <div style={{
                cursor: 'pointer',
                fontSize: '1.2em',
                textDecoration: 'underline'
              }}>
                <strong>
                  <a className="text-gray-dark font-bold font-anton" href="/">See More</a>
                </strong>
              </div>
            </Col>
          </Row>
          <Row>
            <Col md={{size: 12}}>
              <Row>
                <Col>
                  <ImageCarousel flowers={this.props.list}/>
                </Col>
                <Col>
                  <ImageCarousel flowers={this.props.list2}/>
                </Col>
                <Col>
                  <ImageCarousel flowers={this.props.list3}/>
                </Col>
              </Row>
            </Col>
          </Row>

        </Container>

        {/* mobile */}
        <div className="hidden-md-up">
          <Container>
            <Row>
              <Col xs={{size: 12}}>
                <Row>
                  <Col style={{paddingTop: '0.5em'}}>
                    <h2 className={`display-6 font-bold ${this.props.gold ? 'dark-gold' : 'dark-gray'}`}>
                      <span>{this.props.zh_tw.line1}</span>
                      <span>{this.props.zh_tw.line2}</span>
                    </h2>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <h2 className="display-6 light-gray font-bold font-anton">
                      <span>{this.props.us.line1}</span>
                      <span>{this.props.us.line2}</span>
                    </h2>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <h6 className="display-6 light-gray">
                      <div>{this.props.zh_tw.line3}</div>
                      <div>{this.props.us.line3}</div>
                    </h6>
                  </Col>
                </Row>
              </Col>
              <Col xs={{size: 12}}>
                <Row>
                  <Col style={{paddingTop: '0.5em', paddingBottom: '0.5em'}}>
                    <ImageCarousel mobile flowers={this.props.list}/>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    );
  }
}

export default CatagoryTemplate;