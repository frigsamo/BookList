import React, {useContext} from 'react';
import { BookContext } from '../contexts/BookContext';

const BooksDetails = ({book}) => {
    const {removeBook} = useContext(BookContext);
    return (
       <li>
            <div className='title'>Title:{book.title}</div>
            <div className='author'>Author:{book.author}</div>
            <button onClick={() => removeBook(book.id)}>DeleteBook</button>
       </li>
    );
};

export default BooksDetails;
