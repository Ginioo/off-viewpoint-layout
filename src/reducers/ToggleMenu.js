import {
  CLOSE_MENU,
  TOGGLE_MENU
} from '~/src/actions/ToggleMenu';

const INITAIL_STATE = {
  isOpen: false
};

export default (state = INITAIL_STATE, action) => {
  switch (action.type) {
    case TOGGLE_MENU:
      return {isOpen: !state.isOpen};

    case CLOSE_MENU:
    default:
      return {isOpen: false};
  }
};