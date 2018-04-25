import {SLIDE_LEFT} from '../actions/ImageCarousel';
import {FETCH_IMAGES} from '../actions/Imgur';

const INITAIL_STATE = {
  holland: [
    {
      id: 'CA01',
      image: {xs: 'http://placehold.it/200x200', sm: 'http://placehold.it/280x200', lg: 'http://placehold.it/800x600'},
      name: {zh_tw: '圖片一', us: 'figure 1'}
    },
    {
      id: 'WA02',
      image: {xs: 'http://placehold.it/200x200', sm: 'http://placehold.it/280x200', lg: 'http://placehold.it/800x600'},
      name: {zh_tw: '圖片二', us: 'figure 2'}
    },
    {
      id: 'CR03',
      image: {xs: 'http://placehold.it/200x200', sm: 'http://placehold.it/280x200', lg: 'http://placehold.it/800x600'},
      name: {zh_tw: '圖片三', us: 'figure 3'}
    },
    {
      id: 'CR04',
      image: {xs: 'http://placehold.it/200x200', sm: 'http://placehold.it/280x200', lg: 'http://placehold.it/800x600'},
      name: {zh_tw: '圖片四', us: 'figure 4'}
    },
    {
      id: 'CR05',
      image: {xs: 'http://placehold.it/200x200', sm: 'http://placehold.it/280x200', lg: 'http://placehold.it/800x600'},
      name: {zh_tw: '圖片五', us: 'figure 5'}
    }
  ],
  europe: [
    {
      id: 'CA11',
      image: {xs: 'http://placehold.it/200x200', sm: 'http://placehold.it/280x200', lg: 'http://placehold.it/800x600'},
      name: {zh_tw: '圖片一', us: 'figure 1'}
    },
    {
      id: 'WA12',
      image: {xs: 'http://placehold.it/200x200', sm: 'http://placehold.it/280x200', lg: 'http://placehold.it/800x600'},
      name: {zh_tw: '圖片二', us: 'figure 2'}
    },
    {
      id: 'CR13',
      image: {xs: 'http://placehold.it/200x200', sm: 'http://placehold.it/280x200', lg: 'http://placehold.it/800x600'},
      name: {zh_tw: '圖片三', us: 'figure 3'}
    },
    {
      id: 'CR14',
      image: {xs: 'http://placehold.it/200x200', sm: 'http://placehold.it/280x200', lg: 'http://placehold.it/800x600'},
      name: {zh_tw: '圖片四', us: 'figure 4'}
    },
    {
      id: 'CR15',
      image: {xs: 'http://placehold.it/200x200', sm: 'http://placehold.it/280x200', lg: 'http://placehold.it/800x600'},
      name: {zh_tw: '圖片五', us: 'figure 5'}
    }
  ],
  america: [
    {
      id: 'CA21',
      image: {xs: 'http://placehold.it/200x200', sm: 'http://placehold.it/280x200', lg: 'http://placehold.it/800x600'},
      name: {zh_tw: '圖片一', us: 'figure 1'}
    },
    {
      id: 'WA22',
      image: {xs: 'http://placehold.it/200x200', sm: 'http://placehold.it/280x200', lg: 'http://placehold.it/800x600'},
      name: {zh_tw: '圖片二', us: 'figure 2'}
    },
    {
      id: 'CR23',
      image: {xs: 'http://placehold.it/200x200', sm: 'http://placehold.it/280x200', lg: 'http://placehold.it/800x600'},
      name: {zh_tw: '圖片三', us: 'figure 3'}
    },
    {
      id: 'CR24',
      image: {xs: 'http://placehold.it/200x200', sm: 'http://placehold.it/280x200', lg: 'http://placehold.it/800x600'},
      name: {zh_tw: '圖片四', us: 'figure 4'}
    },
    {
      id: 'CR25',
      image: {xs: 'http://placehold.it/200x200', sm: 'http://placehold.it/280x200', lg: 'http://placehold.it/800x600'},
      name: {zh_tw: '圖片五', us: 'figure 5'}
    }
  ],
  south_america: [
    {
      id: 'CA31',
      image: {xs: 'http://placehold.it/200x200', sm: 'http://placehold.it/280x200', lg: 'http://placehold.it/800x600'},
      name: {zh_tw: '圖片一', us: 'figure 1'}
    },
    {
      id: 'WA32',
      image: {xs: 'http://placehold.it/200x200', sm: 'http://placehold.it/280x200', lg: 'http://placehold.it/800x600'},
      name: {zh_tw: '圖片二', us: 'figure 2'}
    },
    {
      id: 'CR33',
      image: {xs: 'http://placehold.it/200x200', sm: 'http://placehold.it/280x200', lg: 'http://placehold.it/800x600'},
      name: {zh_tw: '圖片三', us: 'figure 3'}
    },
    {
      id: 'CR34',
      image: {xs: 'http://placehold.it/200x200', sm: 'http://placehold.it/280x200', lg: 'http://placehold.it/800x600'},
      name: {zh_tw: '圖片四', us: 'figure 4'}
    },
    {
      id: 'CR35',
      image: {xs: 'http://placehold.it/200x200', sm: 'http://placehold.it/280x200', lg: 'http://placehold.it/800x600'},
      name: {zh_tw: '圖片五', us: 'figure 5'}
    }
  ],
  australia: [
    {
      id: 'CA31',
      image: {xs: 'http://placehold.it/200x200', sm: 'http://placehold.it/280x200', lg: 'http://placehold.it/800x600'},
      name: {zh_tw: '圖片一', us: 'figure 1'}
    },
    {
      id: 'WA32',
      image: {xs: 'http://placehold.it/200x200', sm: 'http://placehold.it/280x200', lg: 'http://placehold.it/800x600'},
      name: {zh_tw: '圖片二', us: 'figure 2'}
    },
    {
      id: 'CR33',
      image: {xs: 'http://placehold.it/200x200', sm: 'http://placehold.it/280x200', lg: 'http://placehold.it/800x600'},
      name: {zh_tw: '圖片三', us: 'figure 3'}
    },
    {
      id: 'CR34',
      image: {xs: 'http://placehold.it/200x200', sm: 'http://placehold.it/280x200', lg: 'http://placehold.it/800x600'},
      name: {zh_tw: '圖片四', us: 'figure 4'}
    },
    {
      id: 'CR35',
      image: {xs: 'http://placehold.it/200x200', sm: 'http://placehold.it/280x200', lg: 'http://placehold.it/800x600'},
      name: {zh_tw: '圖片五', us: 'figure 5'}
    }
  ],
  new_zealand: [
    {
      id: 'CA31',
      image: {xs: 'http://placehold.it/200x200', sm: 'http://placehold.it/280x200', lg: 'http://placehold.it/800x600'},
      name: {zh_tw: '圖片一', us: 'figure 1'}
    },
    {
      id: 'WA32',
      image: {xs: 'http://placehold.it/200x200', sm: 'http://placehold.it/280x200', lg: 'http://placehold.it/800x600'},
      name: {zh_tw: '圖片二', us: 'figure 2'}
    },
    {
      id: 'CR33',
      image: {xs: 'http://placehold.it/200x200', sm: 'http://placehold.it/280x200', lg: 'http://placehold.it/800x600'},
      name: {zh_tw: '圖片三', us: 'figure 3'}
    },
    {
      id: 'CR34',
      image: {xs: 'http://placehold.it/200x200', sm: 'http://placehold.it/280x200', lg: 'http://placehold.it/800x600'},
      name: {zh_tw: '圖片四', us: 'figure 4'}
    },
    {
      id: 'CR35',
      image: {xs: 'http://placehold.it/200x200', sm: 'http://placehold.it/280x200', lg: 'http://placehold.it/800x600'},
      name: {zh_tw: '圖片五', us: 'figure 5'}
    }
  ],
  japan: [
    {
      id: 'CA31',
      image: {xs: 'http://placehold.it/200x200', sm: 'http://placehold.it/280x200', lg: 'http://placehold.it/800x600'},
      name: {zh_tw: '圖片一', us: 'figure 1'}
    },
    {
      id: 'WA32',
      image: {xs: 'http://placehold.it/200x200', sm: 'http://placehold.it/280x200', lg: 'http://placehold.it/800x600'},
      name: {zh_tw: '圖片二', us: 'figure 2'}
    },
    {
      id: 'CR33',
      image: {xs: 'http://placehold.it/200x200', sm: 'http://placehold.it/280x200', lg: 'http://placehold.it/800x600'},
      name: {zh_tw: '圖片三', us: 'figure 3'}
    },
    {
      id: 'CR34',
      image: {xs: 'http://placehold.it/200x200', sm: 'http://placehold.it/280x200', lg: 'http://placehold.it/800x600'},
      name: {zh_tw: '圖片四', us: 'figure 4'}
    },
    {
      id: 'CR35',
      image: {xs: 'http://placehold.it/200x200', sm: 'http://placehold.it/280x200', lg: 'http://placehold.it/800x600'},
      name: {zh_tw: '圖片五', us: 'figure 5'}
    }
  ],
  south_africa: [
    {
      id: 'CA31',
      image: {xs: 'http://placehold.it/200x200', sm: 'http://placehold.it/280x200', lg: 'http://placehold.it/800x600'},
      name: {zh_tw: '圖片一', us: 'figure 1'}
    },
    {
      id: 'WA32',
      image: {xs: 'http://placehold.it/200x200', sm: 'http://placehold.it/280x200', lg: 'http://placehold.it/800x600'},
      name: {zh_tw: '圖片二', us: 'figure 2'}
    },
    {
      id: 'CR33',
      image: {xs: 'http://placehold.it/200x200', sm: 'http://placehold.it/280x200', lg: 'http://placehold.it/800x600'},
      name: {zh_tw: '圖片三', us: 'figure 3'}
    },
    {
      id: 'CR34',
      image: {xs: 'http://placehold.it/200x200', sm: 'http://placehold.it/280x200', lg: 'http://placehold.it/800x600'},
      name: {zh_tw: '圖片四', us: 'figure 4'}
    },
    {
      id: 'CR35',
      image: {xs: 'http://placehold.it/200x200', sm: 'http://placehold.it/280x200', lg: 'http://placehold.it/800x600'},
      name: {zh_tw: '圖片五', us: 'figure 5'}
    }
  ],
};

export default (state = INITAIL_STATE, action) => {
  switch (action.type) {
    case SLIDE_LEFT:
      let holland = state.holland.shift();
      let europe = state.europe.shift();
      let america = state.america.shift();
      let south_america = state.south_america.shift();
      let australia = state.australia.shift();
      let new_zealand = state.new_zealand.shift();
      let japan = state.japan.shift();
      let south_africa = state.south_africa.shift();

      state.holland.push(holland);
      state.europe.push(europe);
      state.america.push(america);
      state.south_america.push(south_america);
      state.australia.push(australia);
      state.new_zealand.push(new_zealand);
      state.japan.push(japan);
      state.south_africa.push(south_africa);

      return {
        holland: [...state.holland],
        europe: [...state.europe],
        america: [...state.america],
        south_america: [...state.south_america],
        australia: [...state.australia],
        new_zealand: [...state.new_zealand],
        japan: [...state.japan],
        south_africa: [...state.south_africa]
      };

    case FETCH_IMAGES:
      const newState = {};
      const url = 'http://localhost:9000';

      action.payload.data.forEach((data) => {
        const detail = {
          id: data.path,
          image: {xs: 'http://placehold.it/200x200', sm: 'http://placehold.it/280x200', lg: 'http://placehold.it/800x600'},
          name: {zh_tw: '圖片名稱', us: 'figure'}
        };
        detail.image[data.size] = `${url}/${data.path}`;
        detail.image['xs'] = `${url}/${data.path}`;

        if (newState[data.country] === undefined) newState[data.country] = [];
        newState[data.country].push(detail);
      });

      console.log(newState);
      return {
        ...state,
        ...newState
      };

    default:
      return state;
  }
}