import React, {useContext} from "react";
import BookStoreContext from "../context/BookStoreContext";
import Book from "./Book";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import "./Book.css";

const Books = () => {

    const {books} = useContext(BookStoreContext);

    return (
        <div>
            <ul>
                {books && books.map((item, i) => (
                    <Book key={i} book={item}/>
                ))}
            </ul>
        </div>
    );
}


export default Books;