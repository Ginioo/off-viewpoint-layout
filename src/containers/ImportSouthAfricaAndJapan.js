import React, {Component} from 'react';
import {connect} from 'react-redux';
import CatagoryTemplate from '../components/CatagoryTemplate';

class ImportSouthAfricaAndJapan extends Component {
  render() {
    return (
      <div className="import-holland-and-europe">
        <CatagoryTemplate {...this.props}
                          zh_tw={this.props.lang.zh_tw}
                          us={this.props.lang.us}
                          list={this.props.list.south_africa}
                          list2={this.props.list.japan}
                          list3={this.props.list.south_africa}
                          list4={this.props.list.japan}
        />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    list: state.importFlowserImageList,
    lang: state.lang.import_south_africa_and_japan
  };
}

export default connect(mapStateToProps)(ImportSouthAfricaAndJapan);