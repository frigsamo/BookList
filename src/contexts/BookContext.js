import React, {createContext, useState, useReducer} from 'react';
import uuid from 'uuid';
import { bookReducer } from '../reducers/bookReducer';
export const BookContext = createContext();

const BookContextProvider = props => {
    const initialSatate = [
        {title: 'Name of the wind ', author:'Patrick Rotfuss', id:1},
        {title: 'The final Empire ', author:'Brandom  Serderson', id:2},
    ];

    //const [books,setBooks] = useState(initialSatate);
    const [books, dispatch] = useReducer(bookReducer, initialSatate);
    
    
    return (
        <BookContext.Provider value={{books,dispatch}}>
            {props.children}
        </BookContext.Provider>
    );
};

export default BookContextProvider;