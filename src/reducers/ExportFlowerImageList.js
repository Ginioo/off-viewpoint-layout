import {SLIDE_LEFT} from '../actions/ImageCarousel';

const INITAIL_STATE = {
  phalaenopsis: [
    {
      id: 'CA41',
      image: {xs: 'http://placehold.it/200x200', sm:'http://placehold.it/280x200', lg: 'http://placehold.it/800x600'},
      name: {zh_tw: '圖片一', us: 'figure 1'}
    },
    {
      id: 'WA42',
      image: {xs: 'http://placehold.it/200x200', sm:'http://placehold.it/280x200', lg: 'http://placehold.it/800x600'},
      name: {zh_tw: '圖片二', us: 'figure 2'}
    },
    {
      id: 'CR43',
      image: {xs: 'http://placehold.it/200x200', sm:'http://placehold.it/280x200', lg: 'http://placehold.it/800x600'},
      name: {zh_tw: '圖片三', us: 'figure 3'}
    },
    {
      id: 'CR44',
      image: {xs: 'http://placehold.it/200x200', sm:'http://placehold.it/280x200', lg: 'http://placehold.it/800x600'},
      name: {zh_tw: '圖片四', us: 'figure 4'}
    },
    {
      id: 'CR45',
      image: {xs: 'http://placehold.it/200x200', sm:'http://placehold.it/280x200', lg: 'http://placehold.it/800x600'},
      name: {zh_tw: '圖片五', us: 'figure 5'}
    }
  ],
  adenium: [
    {
      id: 'CA51',
      image: {xs: 'http://placehold.it/200x200', sm:'http://placehold.it/280x200', lg: 'http://placehold.it/800x600'},
      name: {zh_tw: '圖片一', us: 'figure 1'}
    },
    {
      id: 'WA52',
      image: {xs: 'http://placehold.it/200x200', sm:'http://placehold.it/280x200', lg: 'http://placehold.it/800x600'},
      name: {zh_tw: '圖片二', us: 'figure 2'}
    },
    {
      id: 'CR53',
      image: {xs: 'http://placehold.it/200x200', sm:'http://placehold.it/280x200', lg: 'http://placehold.it/800x600'},
      name: {zh_tw: '圖片三', us: 'figure 3'}
    },
    {
      id: 'CR54',
      image: {xs: 'http://placehold.it/200x200', sm:'http://placehold.it/280x200', lg: 'http://placehold.it/800x600'},
      name: {zh_tw: '圖片四', us: 'figure 4'}
    },
    {
      id: 'CR55',
      image: {xs: 'http://placehold.it/200x200', sm:'http://placehold.it/280x200', lg: 'http://placehold.it/800x600'},
      name: {zh_tw: '圖片五', us: 'figure 5'}
    }
  ],
  salix: [
    {
      id: 'CA61',
      image: {xs: 'http://placehold.it/200x200', sm:'http://placehold.it/280x200', lg: 'http://placehold.it/800x600'},
      name: {zh_tw: '圖片一', us: 'figure 1'}
    },
    {
      id: 'WA62',
      image: {xs: 'http://placehold.it/200x200', sm:'http://placehold.it/280x200', lg: 'http://placehold.it/800x600'},
      name: {zh_tw: '圖片二', us: 'figure 2'}
    },
    {
      id: 'CR63',
      image: {xs: 'http://placehold.it/200x200', sm:'http://placehold.it/280x200', lg: 'http://placehold.it/800x600'},
      name: {zh_tw: '圖片三', us: 'figure 3'}
    },
    {
      id: 'CR64',
      image: {xs: 'http://placehold.it/200x200', sm:'http://placehold.it/280x200', lg: 'http://placehold.it/800x600'},
      name: {zh_tw: '圖片四', us: 'figure 4'}
    },
    {
      id: 'CR65',
      image: {xs: 'http://placehold.it/200x200', sm:'http://placehold.it/280x200', lg: 'http://placehold.it/800x600'},
      name: {zh_tw: '圖片五', us: 'figure 5'}
    }
  ],
};

export default (state = INITAIL_STATE, action) => {
  switch (action.type) {
    case SLIDE_LEFT:
        let phalaenopsis = state.phalaenopsis.shift();
        let adenium = state.adenium.shift();
        let salix = state.salix.shift();

        state.phalaenopsis.push(phalaenopsis);
        state.adenium.push(adenium);
        state.salix.push(salix);

        return {
          phalaenopsis: [...state.phalaenopsis],
          adenium: [...state.adenium],
          salix: [...state.salix]
        };

    default:
      return state;
  }
}