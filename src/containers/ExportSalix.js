import React, {Component} from 'react';
import {connect} from 'react-redux';
import CatagoryTemplate from '../components/CatagoryTemplate';

class ExportSalix extends Component {
  render() {
    return (
      <div className="export-salix">
        <CatagoryTemplate {...this.props}
                          zh_tw={this.props.lang.zh_tw}
                          us={this.props.lang.us}
                          list={this.props.list.salix}
                          list2={this.props.list.salix}
                          list3={this.props.list.salix}
                          list4={this.props.list.salix}
        />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    list: state.exportFlowerImageList,
    lang: state.lang.export_salix
  };
}

export default connect(mapStateToProps)(ExportSalix);