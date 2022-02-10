const Book = require("../model/Book")

//Add Book controller
const getAllBooks = async (req, res, next) => {
    let books;
    try {
        books = await Book.find();
    } catch (err) {
        console.log(err)
    }
    if (!books) {
        return res.status(404).json({message: "No products found"});
    }
    return res.status(200).json({books: books});
}
//Add Book controller
const addBook = async (req, res, next) => {
    const {name, author, description,image,available,price} = req.body;
    let book;
    try {
        book = new Book({
            name,
            author,
            image,
            price,
            description,
            available,
        })
        await book.save();
    } catch (e) {
        console.log(e)
    }
    if (!book) {
        return res.status(500).json({message: 'Unable to add'});
    }
    return res.status(200).json({book});
}

//Get book by id
const getBookById = async (req, res, next) => {
    const id = req.params.id;
    let book;
    try {
        book = await Book.findById(id);
    } catch (e) {
        console.log(e)
    }
    if (!book) {
        return res.status(500).json({message: 'Unable to By Id'});
    }
    return res.status(200).json({book});
}

//Update Book by id

const updateBook = async (req, res, next) => {
    const id = req.params.id;
    const {name, image,author, description, price, available} = req.body;
    let book;
    try {
        book = await Book.findByIdAndUpdate(id, {
            name,
            author,
            description,
            price,
            available,
            image
        })
        await book.save();
    } catch (e) {
        console.log(e)
    }
    if (!book) {
        return res.status(500).json({message: 'Unable to Update'});
    }
    return res.status(200).json({book});
}

const deleteBookById = async (req,res,next)=>{
    const id = req.params.id;
    let book;
    try{
        book = await Book.findByIdAndRemove(id);
    }catch(e){
        console.log(e)
    }
    if (!book) {
        return res.status(500).json({message: 'Unable to Delete'});
    }
    return res.status(200).json({book});
}

exports.getAllBooks = getAllBooks;
exports.addBook = addBook;
exports.getBookById = getBookById;
exports.updateBook = updateBook;
exports.deleteBookById = deleteBookById;