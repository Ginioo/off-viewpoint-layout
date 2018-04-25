import {
  TOGGLE_SLIDE_MENU
} from '../actions/SlideMenu';

const INITIAL_STATE = {
  isOpen: false
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case TOGGLE_SLIDE_MENU:
      return {
        isOpen: !action.payload
      };
    default:
      return state;
  }
}