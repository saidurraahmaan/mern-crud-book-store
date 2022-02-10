import React, {useState} from "react";
import {AppBar} from "@mui/material";
import Typography from "@mui/material/Typography";
import LibraryBooksOutlinedIcon from '@mui/icons-material/LibraryBooksOutlined';
import Toolbar from "@mui/material/Toolbar";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import {NavLink} from "react-router-dom";


const Header = () => {
    const [value, setValue] = useState(0);
    return (
        <AppBar
            position="sticky"
            sx={{backgroundColor:"#114057"}}
        >
            <Toolbar>
                <Typography >

                    <LibraryBooksOutlinedIcon />

                </Typography>
                <Tabs
                    sx={{ml:"auto"}}
                    textColor="inherit"
                    indicatorColor='primary'
                    value={value}
                    onChange={(e, val) => setValue(val)}>
                    <Tab LinkComponent={NavLink} to="/add" label='Add product'/>
                    <Tab LinkComponent={NavLink} to="/books" label='Books'/>
                    <Tab LinkComponent={NavLink} to="/about" label='About Us'/>
                </Tabs>
            </Toolbar>
        </AppBar>
    );
}
export default Header;