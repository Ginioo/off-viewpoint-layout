import {combineReducers} from 'redux';
import ImportFlowerImageListReducer from './ImportFlowerImageList';
import ExportFlowerImageListReducer from './ExportFlowerImageList';
import DecorationFlowerImageListReducer from './DecorationFlowerImageList';
import BlogPostsReducer from './BlogPosts';
import LightBoxReducer from './LightBox';
import LangReducer from './Lang';
import SlideMenuReducer from './SlideMenu';

const rootReducer = combineReducers({
  slideMenu: SlideMenuReducer,
  lang: LangReducer,
  importFlowserImageList: ImportFlowerImageListReducer,
  exportFlowerImageList: ExportFlowerImageListReducer,
  decorationFlowerImageList: DecorationFlowerImageListReducer,
  blogPosts: BlogPostsReducer,
  lightBox: LightBoxReducer
});

export default rootReducer;
