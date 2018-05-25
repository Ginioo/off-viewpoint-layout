import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {closeMenu} from '~/src/actions/ToggleMenu';
import '~/src/style.css';

class Layout1 extends Component {
  render() {
    return (
      <div id="layout-1">
        {
          this.props.menu.isOpen
            ?
            <div className="off-viewpoint">
              <div className="viewpoint-wrapper">
                {this.props.children}
              </div>
            </div>
            :
            <div className="viewpoint">
              <div className="viewpoint-wrapper">
                {this.props.children}
              </div>
            </div>
        }
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    menu: state.menu
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    closeMenu
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Layout1);