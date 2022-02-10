import React, {useContext, useState} from "react";
import TextField from "@material-ui/core/TextField";
import Box from "@material-ui/core/Box";
import FormLabel from "@material-ui/core/FormLabel";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Button from "@material-ui/core/Button";
import BookStoreContext from "./context/BookStoreContext";


const AddBook = () => {

    const {inputs,handleChange,checked,setChecked,handleSubmit} = useContext(BookStoreContext);

    return (
        <form onSubmit={handleSubmit}>
            <Box
                display="flex"
                flexDirection="column"
                justifyContent={"center"}
                maxWidth={700}
                alignContent={"center"}
                alignSelf="center"
                marginLeft={"auto"}
                marginRight="auto"
                marginTop={10}
            >
                <FormLabel>Name</FormLabel>
                <TextField
                    value={inputs.name}
                    onChange={handleChange}
                    margin="normal"
                    fullWidth
                    variant="outlined"
                    name="name"
                />
                <FormLabel>Author</FormLabel>
                <TextField
                    value={inputs.author}
                    onChange={handleChange}
                    margin="normal"
                    fullWidth
                    variant="outlined"
                    name="author"
                />
                <FormLabel>Description</FormLabel>
                <TextField
                    value={inputs.description}
                    onChange={handleChange}
                    margin="normal"
                    fullWidth
                    variant="outlined"
                    name="description"
                />
                <FormLabel>Price</FormLabel>
                <TextField
                    value={inputs.price}
                    onChange={handleChange}
                    type="number"
                    margin="normal"
                    fullWidth
                    variant="outlined"
                    name="price"
                />
                <FormLabel>Image</FormLabel>
                <TextField
                    value={inputs.image}
                    onChange={handleChange}
                    margin="normal"
                    fullWidth
                    variant="outlined"
                    name="image"
                />
                <FormControlLabel
                    control={
                        <Checkbox checked={checked} onChange={() => setChecked(!checked)}/>
                    }
                    label="Available"
                />

                <Button variant="contained" type="submit">
                    Add Book
                </Button>
            </Box>
        </form>
    );
}
export default AddBook;