import {expect} from 'chai';

import {
  TOGGLE_MENU,
  CLOSE_MENU,
  toggleMenu,
  closeMenu
} from '../../src/actions/ToggleMenu';

describe('Toggle Menu Action Creator tests', () => {
  describe('toggle menu creator test', () => {
    it('should return a action object {type: TOGGLE_MENU}', () => {
      const obj = toggleMenu();
      expect(obj).to.deep.equal({type: TOGGLE_MENU});
    });
  });

  describe('close action creator test', () => {
    it('should return a action object {type: CLOSE_MENU, payload: false}', () => {
      const obj = closeMenu();
      expect(obj).to.deep.equal({type: CLOSE_MENU, payload: false});
    });
  });
});