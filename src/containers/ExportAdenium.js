import React, {Component} from 'react';
import {connect} from 'react-redux';
import CatagoryTemplate from '../components/CatagoryTemplate';

class ExportAdenium extends Component {
  render() {
    return (
      <div className="export-adenium">
        <CatagoryTemplate {...this.props}
                          zh_tw={this.props.lang.zh_tw}
                          us={this.props.lang.us}
                          list={this.props.list.adenium}
                          list2={this.props.list.adenium}
                          list3={this.props.list.adenium}
                          list4={this.props.list.adenium}
        />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    list: state.exportFlowerImageList,
    lang: state.lang.export_adenium
  };
}

export default connect(mapStateToProps)(ExportAdenium);