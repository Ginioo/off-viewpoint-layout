import {SLIDE_LEFT} from '../actions/ImageCarousel';

const INITAIL_STATE = {
  dry_flower: [
    {
      id: 'CA81',
      image: {xs: 'http://placehold.it/200x200', sm:'http://placehold.it/280x200', lg: 'http://placehold.it/800x600'},
      name: {zh_tw: '圖片一', us: 'figure 1'}
    },
    {
      id: 'WA82',
      image: {xs: 'http://placehold.it/200x200', sm:'http://placehold.it/280x200', lg: 'http://placehold.it/800x600'},
      name: {zh_tw: '圖片二', us: 'figure 2'}
    },
    {
      id: 'CR83',
      image: {xs: 'http://placehold.it/200x200', sm:'http://placehold.it/280x200', lg: 'http://placehold.it/800x600'},
      name: {zh_tw: '圖片三', us: 'figure 3'}
    },
    {
      id: 'CR84',
      image: {xs: 'http://placehold.it/200x200', sm:'http://placehold.it/280x200', lg: 'http://placehold.it/800x600'},
      name: {zh_tw: '圖片四', us: 'figure 4'}
    },
    {
      id: 'CR85',
      image: {xs: 'http://placehold.it/200x200', sm:'http://placehold.it/280x200', lg: 'http://placehold.it/800x600'},
      name: {zh_tw: '圖片五', us: 'figure 5'}
    }
  ],
  preserved: [
    {
      id: 'CA91',
      image: {xs: 'http://placehold.it/200x200', sm:'http://placehold.it/280x200', lg: 'http://placehold.it/800x600'},
      name: {zh_tw: '圖片一', us: 'figure 1'}
    },
    {
      id: 'WA92',
      image: {xs: 'http://placehold.it/200x200', sm:'http://placehold.it/280x200', lg: 'http://placehold.it/800x600'},
      name: {zh_tw: '圖片二', us: 'figure 2'}
    },
    {
      id: 'CR93',
      image: {xs: 'http://placehold.it/200x200', sm:'http://placehold.it/280x200', lg: 'http://placehold.it/800x600'},
      name: {zh_tw: '圖片三', us: 'figure 3'}
    },
    {
      id: 'CR94',
      image: {xs: 'http://placehold.it/200x200', sm:'http://placehold.it/280x200', lg: 'http://placehold.it/800x600'},
      name: {zh_tw: '圖片四', us: 'figure 4'}
    },
    {
      id: 'CR95',
      image: {xs: 'http://placehold.it/200x200', sm:'http://placehold.it/280x200', lg: 'http://placehold.it/800x600'},
      name: {zh_tw: '圖片五', us: 'figure 5'}
    }
  ],
};

export default (state = INITAIL_STATE, action) => {
  switch (action.type) {
    case SLIDE_LEFT:
        let dry_flower = state.dry_flower.shift();
        let preserved = state.preserved.shift();

        state.dry_flower.push(dry_flower);
        state.preserved.push(preserved);

        return {
          dry_flower: [...state.dry_flower],
          preserved: [...state.preserved]
        };

    default:
      return state;
  }
}