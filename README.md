# Off viewpoint layout
## a off viewpoint layout

1. add reducer to reducers/index.js
```
import {MenuReducer} from 'off-viewpoint-layout';

...

const rootReducer = combineReducers({
  menu: MenuReducer,

  ...

});
```

2. add action creator to a component
3. add toggleMenu action to onClick event
4. add className="side-menu" to menu <div>
```
import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {OffViewpointLayout, toggleMenu} from 'off-viewpoint-layout';

class SampleComponent extends Component {

  render() {
    return (
      <div id="sample">
        <OffViewpointLayout>
          <div onClick={() => this.props.toggleMenu()}>MAIN AREA</div>

          <div className="slide-menu">
            <ul>
              <li>menu item 1</li>
              <li>menu item 2</li>
              <li>menu item 3</li>
              <li>menu item 4</li>
            </ul>
          </div>
        </OffViewpointLayout>
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
    toggleMenu
  }, dispatch);
}
export default connect(mapStateToProps, mapDispatchToProps)(SampleComponent);
```