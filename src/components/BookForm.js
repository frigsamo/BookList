import React, {useContext, useState} from 'react';
import { BookContext } from '../contexts/BookContext';

const BookForm = () => {
    const {addBook} = useContext(BookContext);
    const [book,setBook] = useState({})

    const handleInput = e => {
       setBook({
           ...book,
          [e.target.name]: e.target.value
       })
    }

    const handleSubmit = e => {
        e.preventDefault();
        addBook(book.title, book.author);
    }
    return (
        <form onSubmit={handleSubmit}>
           <label htmlFor='title'>Title</label> 
           <input
           type='text'
           name='title'
           id='title'
           placeholder='Title'
           onChange={handleInput}
           />
           <label htmlFor='author'>Author</label> 
           <input
           type='text'
           name='author'
           id='author'
           placeholder='Author'
           onChange={handleInput}
        
           />
           <input
           type='submit'
           value='Add book'/>
        </form>
    );
};

export default BookForm;