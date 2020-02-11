import React,{useContext} from 'react';
import { BookContext } from '../contexts/BookContext';
import BooksDetails from './BooksDetails';

const BookList = () => {
    const {books} = useContext(BookContext);
   return(
     books && books.length > 0 ? (
         <div className="book-list">
             <ul>
                 {books && books.map(book => (
                     <BooksDetails book={book} key={book.id}/>
                 ))}
             </ul>
         </div>
     ) : (<div className='empty'> No books to read. Hello free time</div>)
   )
};

export default BookList