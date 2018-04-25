import React, {Component} from 'react';
import uuid from 'uuid';
import {Container} from 'reactstrap';
import MakeUpText from './MakeUpText';
import '../styles/Header.scss';

export default class Header extends Component {
  constructor(props) {
    super(props);

    this.state = {contents: [], mobile: {contents: []}};
  }

  render() {
    return (
      <div id="header">
        <div className="hidden-md-down">
          <Container fluid className="header-bg-image">
            <div className="transbox">
              {this.state.contents.map((c) => (
                <MakeUpText key={uuid.v4()} contents={[c]}>
                  <MakeUpText contents={c.contents}/>
                </MakeUpText>
              ))}
            </div>
          </Container>
        </div>

        <div className="hidden-lg-up">
          <Container fluid className="header-bg-image-xs">
            <div className="transbox">
              {this.state.mobile.contents.map((c) => (
                <MakeUpText key={uuid.v4()} contents={[c]}>
                  <MakeUpText contents={c.contents}/>
                </MakeUpText>
              ))}
            </div>
          </Container>
        </div>
      </div>
    );
  }
}