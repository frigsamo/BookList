
import { ADD_BOOK, REMOVE_BOOK } from '../constants';

export const bookReducer = (state,action ) => {
    console.log(`Llego a reducer `)
  switch (action.type) {
     
    case 'ADD_BOOK':
      const nuewArray = [...state, action.payload];
      console.log(`this is newArray ${nuewArray}`);
      return nuewArray;

    case 'REMOVE_BOOK':
      return state.filter(book => book.id !== action.payload);

    default:
        console.log(action);
     return state;
  }
};
