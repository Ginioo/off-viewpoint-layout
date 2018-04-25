export const TOGGLE_SLIDE_MENU = 'TOGGLE_SLIDE_MENU';

export function toggleSlideMenu(isOpen) {
  return {
    type: TOGGLE_SLIDE_MENU,
    payload: isOpen
  };
}