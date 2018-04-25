import React, {Component} from 'react';
import {Link} from 'react-router';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {toggleSlideMenu} from '../actions/SlideMenu';
import '../styles/SlideMenu.scss';

class SlideMenu extends Component {
  render() {
    return (
      <div id="slide-menu" className="hidden-md-up change-color">
        <div className={`${this.props.slideMenu.isOpen ? 'darken-overlay' : 'darken-overlay-hidden'}`}
             onClick={() => this.props.toggleSlideMenu(true)}/>
        <div className="slide-menu padding-top-1em"
             onClick={() => this.props.toggleSlideMenu(true)}
        >
          <Link to="/hortilife/">首頁<br />HOME</Link>
          <div className="slide-separator"/>
          <Link to="/hortilife/import/">進口項目<br />IMPORT</Link>
          <div className="slide-separator"/>
          <Link to="/hortilife/export/">出口項目<br />EXPORT</Link>
          <div className="slide-separator"/>
          <Link to="/hortilife/deco/">乾燥裝飾<br />DECO</Link>
          <div className="slide-separator"/>
          <Link to="/hortilife/blog/">最新資訊<br />BLOG</Link>
          <div className="slide-separator"/>
          <Link to="/hortilife/contact/">聯絡方式<br />CONTACT</Link>
          <div className="slide-separator"/>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    slideMenu: state.slideMenu
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({toggleSlideMenu}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(SlideMenu);