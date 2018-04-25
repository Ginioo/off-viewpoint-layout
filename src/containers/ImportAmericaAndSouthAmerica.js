import React, {Component} from 'react';
import {connect} from 'react-redux';
import CatagoryTemplate from '../components/CatagoryTemplate';

class ImportAmericaAndSouthAmerica extends Component {
  render() {
    return (
      <div className="import-holland-and-europe">
        <CatagoryTemplate {...this.props}
                          zh_tw={this.props.lang.zh_tw}
                          us={this.props.lang.us}
                          list={this.props.list.america}
                          list2={this.props.list.south_america}
                          list3={this.props.list.america}
                          list4={this.props.list.south_america}
        />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    list: state.importFlowserImageList,
    lang: state.lang.import_america_and_south_america
  };
}

export default connect(mapStateToProps)(ImportAmericaAndSouthAmerica);