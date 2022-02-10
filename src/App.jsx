import React, {useState} from "react";
import Header from "./components/Header";
import './App.css'
import {Routes,Route} from 'react-router-dom'
import Home from "./components/Home";
import AddBook from "./components/AddBook";
import Books from "./components/book/Books";
import About from "./components/About";
import {BookStoreProvider} from "./components/context/BookStoreContext";


const App = () => {

    return (
        <BookStoreProvider>
            <header>
                <Header/>
            </header>
            <main>
                <Routes>
                    <Route path="/" element={<Home/>} />
                    <Route path="/add" element={<AddBook/>} />
                    <Route path="/books" element={<Books/>} />
                    <Route path="/About" element={<About/>} />
                </Routes>
            </main>

        </BookStoreProvider>
    );
}
export default App;