import React, {Component} from 'react';
import {connect} from 'react-redux';
import CatagoryTemplate from '../components/CatagoryTemplate';

class ImportAustraliaAndNewZealand extends Component {
  render() {
    return (
      <div className="import-holland-and-europe">
        <CatagoryTemplate {...this.props}
                          zh_tw={this.props.lang.zh_tw}
                          us={this.props.lang.us}
                          list={this.props.list.australia}
                          list2={this.props.list.new_zealand}
                          list3={this.props.list.australia}
                          list4={this.props.list.new_zealand}
        />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    list: state.importFlowserImageList,
    lang: state.lang.import_australia_and_new_zealand
  };
}

export default connect(mapStateToProps)(ImportAustraliaAndNewZealand);