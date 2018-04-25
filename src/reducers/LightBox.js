import {
  OPEN_LIGHTBOX,
  CLOSE_LIGHTBOX,
  GO_PREVIOUS,
  GO_NEXT
} from '../actions/LightBox';

const INITIAL_STATE = {
  list: null,
  current: null,
  open: false
};

export default (state = INITIAL_STATE, action) => {
  let pos = 0;

  switch (action.type) {
    case OPEN_LIGHTBOX:
      return {
        list: action.payload.list,
        current: action.payload.current,
        open: true
      };

    case CLOSE_LIGHTBOX:
      return {
        ...state,
        open: false
      };

    case GO_PREVIOUS:

      pos = state.list.map(function (f) {
        return f.id;
      }).indexOf(action.payload.id);

      pos = pos - 1;
      if (pos < 0) {
        pos = state.list.length - 1;
      }

      return {
        ...state,
        current: state.list[pos]
      };

    case GO_NEXT:
      pos = state.list.map(function (f) {
        return f.id;
      }).indexOf(action.payload.id);

      pos = pos + 1;
      if (pos >= state.list.length) {
        pos = 0;
      }

      return {
        ...state,
        current: state.list[pos]
      };

    default:
      return state;
  }
}