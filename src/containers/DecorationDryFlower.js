import React, {Component} from 'react';
import {connect} from 'react-redux';
import CatagoryTemplate from '../components/CatagoryTemplate';

class DecorationDryFlower extends Component {
  render() {
    return (
      <div className="decoration-dry-flower">
        <CatagoryTemplate {...this.props}
                          zh_tw={this.props.lang.zh_tw}
                          us={this.props.lang.us}
                          list={this.props.list.dry_flower}
                          list2={this.props.list.dry_flower}
                          list3={this.props.list.dry_flower}
                          list4={this.props.list.dry_flower}
        />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    list: state.decorationFlowerImageList,
    lang: state.lang.decoration_dry_flower
  };
}

export default connect(mapStateToProps)(DecorationDryFlower);