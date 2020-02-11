import React, {createContext, useState} from 'react';
import uuid from 'uuid';
export const BookContext = createContext();

const BookContextProvider = props => {
    const initialSatate = [
        {title: 'Name of the wind ', author:'Patrick Rotfuss', id:1},
        {title: 'The final Empire ', author:'Brandom  Serderson', id:2},
    ];

    const [books,setBooks] = useState(initialSatate);
    const addBook = (title,author) => {
        setBooks([...books,{title,author,id:uuid()}])
    }
    const removeBook = id => {
        setBooks(books.filter(e => (e.id !== id)))
    }
    return (
        <BookContext.Provider value={{books,addBook,removeBook}}>
            {props.children}
        </BookContext.Provider>
    );
};

export default BookContextProvider;