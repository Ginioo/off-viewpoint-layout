import React, {Component} from 'react';
import {connect} from 'react-redux';
import CatagoryTemplate from '../components/CatagoryTemplate';

class ExportPhalaenopsis extends Component {
  render() {
    return (
      <div className="export-phalaenopsis">
        <CatagoryTemplate {...this.props}
                          zh_tw={this.props.lang.zh_tw}
                          us={this.props.lang.us}
                          list={this.props.list.phalaenopsis}
                          list2={this.props.list.phalaenopsis}
                          list3={this.props.list.phalaenopsis}
                          list4={this.props.list.phalaenopsis}
        />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    list: state.exportFlowerImageList,
    lang: state.lang.export_phalaenopsis
  };
}

export default connect(mapStateToProps)(ExportPhalaenopsis);