import React, {Component} from 'react';
import {Link} from 'react-router';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {
  Collapse,
  NavbarToggler,
  Navbar,
  NavbarBrand,
  Nav
} from 'reactstrap';
import {toggleSlideMenu} from '../actions/SlideMenu';
import '../styles/NavigationBar.scss';

import brandIcon from "../images/brandIcon.png";

class NavigationBar extends Component {
  render() {
    return (
      <div id="nav-bar">
        <Navbar inverse
                toggleable
                color="brown"
                fixed="top"
                className="ornamental-line"
        >
          <NavbarToggler className="navigation-bar-toggler" right onClick={() => this.props.toggleSlideMenu(false)}/>
          <NavbarBrand href="#">
            <img src={brandIcon} className="brand-icon"/>
          </NavbarBrand>
          <Collapse navbar>
            <Nav className="ml-auto" navbar>
              <div className="navbar-link">
                <Link to="/hortilife/">首頁<br />HOME</Link>
                <Link to="/hortilife/import/">進口項目<br />IMPORT</Link>
                <Link to="/hortilife/export/">出口項目<br />EXPORT</Link>
                <Link to="/hortilife/deco/">乾燥裝飾<br />DECO</Link>
                <Link to="/hortilife/blog/">最新資訊<br />BLOG</Link>
                <Link to="/hortilife/contact/">聯絡方式<br />CONTACT</Link>
              </div>
            </Nav>
          </Collapse>
        </Navbar>
        <div className="margin-top"/>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({toggleSlideMenu}, dispatch);
}

export default connect(null, mapDispatchToProps)(NavigationBar);