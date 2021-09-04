import {BookData} from '../../src/assets/data/BookData';

const initialState = {
  isauthenticated: false,
  userDetails: {},
  modal: false,
  BookData: BookData,
  bookMarkData:[]
};

const RootReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'login':
      return {
        ...state,
        userDetails: action.payload,
        isauthenticated: !state.isauthenticated,
      };
    case 'modal':
      return {
        ...state,
        modal: action.payload,
      };
    case 'bookmark':
          return {
          // bookMarkData:bookMarkData.push(action.payload)
          ...state,
          bookMarkData: [...state.bookMarkData, action.payload]    
       };
    default:
      return state;
  }
};

export default RootReducer;
