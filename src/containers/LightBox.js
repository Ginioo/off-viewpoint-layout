import React, {Component} from 'react';
import {connect} from 'react-redux';
import Hammer from 'react-hammerjs';
import '../styles/LightBox.scss';
import {
  closeLightBox,
  goPrevious,
  goNext,
  swipe
} from '../actions/LightBox';
import {bindActionCreators} from 'redux';

class LightBox extends Component {
  componentWillUnmount() {
    this.props.closeLightBox();
  }

  render() {
    if (!this.props.lightBox.open) {
      return <div id="light-box"/>
    }

    return (
      <div id="light-box" className="light-box">
        <div className="close-btn"
             onClick={() => this.props.closeLightBox()}>
          &times;
        </div>
        <Hammer onSwipe={(event => this.props.swipe(event, this.props.lightBox.current))}>
          <div>
            <img className="light-box-content" src={this.props.lightBox.current.image.lg}/>
            <div>
              <span>NO: {this.props.lightBox.current.id}</span>
              <br />
              <span>{this.props.lightBox.current.name.zh_tw} / {this.props.lightBox.current.name.us}</span>
            </div>
          </div>
        </Hammer>

        <div className="prev"
             onClick={() => this.props.goPrevious(this.props.lightBox.current)}>&#10094;</div>
        <div className="next"
             onClick={() => this.props.goNext(this.props.lightBox.current)}>&#10095;</div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    lightBox: state.lightBox
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    closeLightBox,
    goPrevious,
    goNext,
    swipe
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(LightBox);