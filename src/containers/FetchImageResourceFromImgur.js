import React, {Component} from 'react';
import {connect} from 'react-redux';
// import {fetchImages} from '../actions/Imgur';
import {fetchImages} from '../actions/ImageCarousel';
import {bindActionCreators} from 'redux';

class FetchImageResourceFromImgur extends Component {
  constructor(props) {
    super(props);
    this.props.fetchImages('holland');
  }

  render() {
    return (
      <div className="fetch-image-resource-from-imgur" />
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({fetchImages}, dispatch);
}

export default connect(null, mapDispatchToProps)(FetchImageResourceFromImgur);