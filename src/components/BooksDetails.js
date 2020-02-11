import React, {useContext} from 'react';
import { BookContext } from '../contexts/BookContext';
import removeBookAction from '../actions/removeBookAction';

const BooksDetails = ({book}) => {
    const {dispatch} = useContext(BookContext);
    return (
       <li>
            <div className='title'>Title:{book.title}</div>
            <div className='author'>Author:{book.author}</div>
            <button onClick={() => dispatch(removeBookAction(book.id))}>DeleteBook</button>
       </li>
    );
};

export default BooksDetails;
