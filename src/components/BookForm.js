import React, { useContext, useState } from "react";
import { BookContext } from "../contexts/BookContext";
import addBookAction from "../actions/addBookAction";

const BookForm = () => {
  const { dispatch, books } = useContext(BookContext);
  const [book, setBook] = useState({});

  const handleInput = e => {
    setBook({
      ...book,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(addBookAction(book.title, book.author));
    
    setBook({title: '',author:''})
  };
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="title">Title</label>
      <input
        type="text"
        name="title"
        id="title"
        placeholder="Title"
        value={book.title}
        onChange={handleInput}
      />
      <label htmlFor="author">Author</label>
      <input
        type="text"
        name="author"
        id="author"
        placeholder="Author"
        value={book.author}
        onChange={handleInput}
      />
      <input type="submit" value="Add book" />
    </form>
  );
};

export default BookForm;
