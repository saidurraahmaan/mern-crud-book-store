import React from "react";
import Button from "@mui/material/Button";
import {Link} from "react-router-dom";
import "./Book.css";


const Book = ({book}) => {
    const {_id, name, description, author, image, price} = book;

    return (
        <div className="card">
            <img src={image} alt={name} style={{
                height: 200,
                width:200,

            }}/>
            <article>By {author}</article>
            <h3>{name}</h3>
            <p>{description}</p>
            <h3>Rs {price}</h3>
            <Button LinkComponent={Link} to={`/books/${_id}`} sx={{mt: "auto"}}>
                Update
            </Button>
            <Button color="error" sx={{mt: "auto"}}>
                Delete
            </Button>
        </div>


    );
}
export default Book;