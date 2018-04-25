import React, {Component} from 'react';
import {connect} from 'react-redux';
import uuid from 'uuid';
import {bindActionCreators} from 'redux';
import {openLightBox} from '../actions/LightBox';
import LightBox from '../containers/LightBox';
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';
import '../styles/ImageCarousel.scss';

class ImageCarousel extends Component {
  render() {
    return (
      <div id="image-carousel"
           className={this.props.mobile ? "wrapper-mobile" : "wrapper"}
      >
        <div className="slide"
             onClick={() => this.props.openLightBox(this.props.flowers, this.props.flowers[0])}
        >
          <CSSTransitionGroup
            transitionName="background"
            transitionEnterTimeout={1000}
            transitionLeaveTimeout={1000}
          >
            <img key={uuid.v4()}
                 className={this.props.mobile ? "slide-img-mobile" : "slide-img"}
                 src={this.props.mobile ? this.props.flowers[0].image.sm : this.props.flowers[0].image.xs}/>
            <span className={this.props.mobile ? "description-mobile" : "description"}>
              <div>
                NO: {this.props.flowers[0].id}
              </div>
              <div>
                {this.props.flowers[0].name.zh_tw} / {this.props.flowers[0].name.us}
              </div>
            </span>
          </CSSTransitionGroup>
        </div>
        <LightBox />
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({openLightBox}, dispatch);
}

export default connect(null, mapDispatchToProps)(ImageCarousel);
