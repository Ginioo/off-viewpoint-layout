import _Layout1 from '~/src/containers/Layout1';
import _MenuReducer from '~/src/reducers/ToggleMenu';
import _style from '~/src/style.css';

export {toggleMenu, closeMenu} from '~/src/actions/ToggleMenu';
export const OffViewpointLayout = _Layout1;
export const MenuReducer = _MenuReducer;
export const layoutStyle = _style;
