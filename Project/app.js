const express = require('express');
const mongoose = require('mongoose');
const app = express();
const router = require('./routes/book-routes')
const cors = require('cors');


//Middleware
app.use(express.json());
app.use(cors());
app.use('/books',router);

const uri ="mongodb+srv://saidur:book@mybookstorecluster.cwhsv.mongodb.net/BookStoreDb?retryWrites=true&w=majority";
mongoose.connect(uri)
    .then(()=>console.log("Connected to Database"))
    .then(()=>{
        app.listen(700);
    })
    .catch((err)=>console.log(err));
