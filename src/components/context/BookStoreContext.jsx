import React, {createContext, useEffect, useState} from "react";
import axios from "axios";
import {useNavigate} from "react-router";

const BookStoreContext = createContext();
const URL = "http://localhost:700/books";



export const BookStoreProvider = ({children})=>{
    const history = useNavigate();
    const [books, setBooks] = useState([]);
    const [checked, setChecked] = useState(false);
    const [inputs, setInputs] = useState({
        name: "",
        description: "",
        price: "",
        author: "",

        image: "",
    });

    useEffect(()=>{
        fetchHandler().then((data)=>setBooks(data.books))
    },[])

    const fetchHandler = async () => {
        return await axios.get(URL)
            .then((res) => res.data);
    }

    const sendRequest = async () => {
        await axios
            .post(URL, {
                name: String(inputs.name),
                author: String(inputs.author),
                description: String(inputs.description),
                price: Number(inputs.price),
                image: String(inputs.image),
                available: Boolean(checked),
            })
            .then((res) => res.data);
    };

    const handleChange = (e) => {
        setInputs((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value,
        }));
        // console.log(e.target.name, "Value", e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(inputs, checked);
        sendRequest().then(() => history("/books"));
    };



    return(
        <BookStoreContext.Provider value={{
            books,
            checked,
            setChecked,
            inputs,
            handleChange,
            handleSubmit,

        }}>
            {children}
        </BookStoreContext.Provider>
    );
}
export default BookStoreContext;
