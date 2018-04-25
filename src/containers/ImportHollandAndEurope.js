import React, {Component} from 'react';
import {connect} from 'react-redux';
import CatagoryTemplate from '../components/CatagoryTemplate';

class ImportHollandAndEurope extends Component {
  render() {
    return (
      <div className="import-holland-and-europe">
        <CatagoryTemplate {...this.props}
                          zh_tw={this.props.lang.zh_tw}
                          us={this.props.lang.us}
                          list={this.props.list.holland}
                          list2={this.props.list.europe}
                          list3={this.props.list.holland}
                          list4={this.props.list.europe}
        />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    list: state.importFlowserImageList,
    lang: state.lang.import_holland_and_europe
  };
}

export default connect(mapStateToProps)(ImportHollandAndEurope);