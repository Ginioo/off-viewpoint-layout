import React, {Component} from 'react';
import {connect} from 'react-redux';
import {slideLeft} from '../actions/ImageCarousel';
import {bindActionCreators} from 'redux';

class SliderLeftAnimationTrigger extends Component {
  componentDidMount() {
    this.timer = setInterval(() => this.props.slideLeft(), 5000);
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  render() {
    return (
      <div className="slide-left-animation-trigger" />
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({slideLeft}, dispatch);
}

export default connect(null, mapDispatchToProps)(SliderLeftAnimationTrigger);