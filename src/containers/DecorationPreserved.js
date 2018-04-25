import React, {Component} from 'react';
import {connect} from 'react-redux';
import CatagoryTemplate from '../components/CatagoryTemplate';

class DecorationPreserved extends Component {
  render() {
    return (
      <div className="decoration-preserved">
        <CatagoryTemplate {...this.props}
                          zh_tw={this.props.lang.zh_tw}
                          us={this.props.lang.us}
                          list={this.props.list.preserved}
                          list2={this.props.list.preserved}
                          list3={this.props.list.preserved}
                          list4={this.props.list.preserved}
        />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    list: state.decorationFlowerImageList,
    lang: state.lang.decoration_preserved
  };
}

export default connect(mapStateToProps)(DecorationPreserved);