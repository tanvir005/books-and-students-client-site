import React from 'react';
import { Outlet } from "react-router-dom";
import Grid from '@mui/material/Grid';
import Navbar from '../Components/Navbar/Navbar';


const Home = () => {
    return (
        <Grid container>
            <Navbar></Navbar>
            <Outlet />

        </Grid>
    );
};

export default Home;