import React, {useContext} from 'react';
import { BookContext } from '../contexts/BookContext';

const Navbar = () => {
    const {books} = useContext(BookContext);
    return (
        <div className="navbar">
            <h1>Frank Books</h1>
    <p>I have {books.length} to get throught</p>
        </div>
    );
};

export default Navbar;