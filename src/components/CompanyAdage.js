import React, {Component} from 'react';
import {Container} from 'reactstrap';
import '../styles/CompanyAdage.scss';
import ScrollEvent from 'react-onscroll';

export default class CompanyAdage extends Component {

  constructor(props) {
    super(props);
    this.handleScrollCallback = this.handleScrollCallback.bind(this);
    this.state = {
      Y: 0,
      width: 100,
      top: 20
    };
  }

  handleScrollCallback() {
    if (this.hitTopBound())
      this.setState({
        width: 100,
        top: 20
      }); // reset width
    else if (this.scrollDownward())
      this.zoomOut();
    else if (this.scrollUpward() && this.scrollHalfPage())
      this.zoomIn();

    this.setState({Y: window.scrollY}); // record Y
  }

  scrollUpward() {
    return (this.state.Y < window.scrollY);
  }

  scrollDownward() {
    return (this.state.Y > window.scrollY);
  }

  scrollHalfPage() {
    return (window.scrollY > (2 * window.innerHeight / 3));
  }

  hitTopBound() {
    return (window.scrollY === 0);
  }

  zoomIn() {
    if (this.state.width < 200)
      this.setState({
        width: this.state.width + 0.5,
        top: this.state.top - 0.5
      });
  }

  zoomOut() {
    if (this.state.width >= 100)
      this.setState({
        width: this.state.width - 0.5,
        top: this.state.top + 0.5
      });
  }

  render() {
    return (
      <div id="company-adage">
        <ScrollEvent handleScrollCallback={this.handleScrollCallback}/>
        <div className="hidden-sm-down">
          <Container fluid className="company-adage-bg-image"
                     style={{
                       backgroundSize: `${this.state.width}%`,
                     }}
          >
            <div className="transbox-white dark-gray">
              <h1 className="display-4 font-anton padding-top-2em animated fadeIn">
                <span>伴隨弘大花卉，享受美麗生活</span>
              </h1>
              <h1 className="display-4 font-anton animated fadeIn">
                <span>Enjoy your life, Enjoy Hortilife.</span>
              </h1>
              <div className="display-5 padding-top-1em padding-bottom-4em font-roboto">
                <span>— Charlie Chen, Hortilife</span>
              </div>
            </div>
          </Container>
        </div>

        <div className="hidden-sm-up">
          <Container fluid className="company-adage-bg-image-mobile">
            <div className="transbox-white dark-gray">
              <h4 className="display-6 font-anton padding-top-2em animated fadeIn">
                <span>伴隨弘大花卉，享受美麗生活</span>
              </h4>
              <h4 className="display-6 font-anton animated fadeIn">
                <span>Enjoy your life, Enjoy Hortilife.</span>
              </h4>
              <div className="padding-top-1em padding-bottom-4em font-roboto">
                <span>— Charlie Chen, Hortilife</span>
              </div>
            </div>
          </Container>
        </div>
      </div>
    );
  }
}