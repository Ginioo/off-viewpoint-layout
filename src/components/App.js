import React, {Component} from 'react';
import {connect} from 'react-redux';
import 'bootstrap/dist/css/bootstrap.css';
import 'animate.css';
import '../styles/index.scss';
import SlideMenu from '../containers/SlideMenu';
import NavigationBar from './NavigationBar';
import Footer from './Footer';

class App extends Component {

  render() {
    return (
      <div id="app">
      <div  className="viewpoint-wrapper">
        <div className={`${this.props.slideMenu.isOpen ? 'off-viewpoint' : 'viewpoint'}`}>
          <NavigationBar />
          <SlideMenu />
          {this.props.children}
          <Footer />
        </div>
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

export default connect(mapStateToProps)(App);