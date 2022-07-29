import React from 'react';
import img from '../images/liberary.png';
import Grid from '@mui/material/Grid';
import { Box } from '@mui/system';
import { Card, CardContent, CardMedia, IconButton, Typography } from '@mui/material';

const FrontPage = () => {
    const HomePageStyle = {
        heading: {
            color: 'orange',
            fontSize: '25px',
            fontWeight: 'bold',
            width: '50%',
        },
        img: {
            width: '50%'
        },
        picTitleDiv: {
            display: 'flex',
            alignItems: 'center'
        }
    }
    return (

        <Box sx={{ display: 'flex', alignItems: 'center' }}>
            
                <CardContent sx={{color: '#508e44', textTransform: 'uppercase', fontWeight: 'bold',  fontSize: 25, fontFamily: 'Monospace', textAlign: 'center', }}>
                    Welcome to Student's <br/> Book Borrow System
                </CardContent>

            
            <CardMedia
                component="img"
                sx={{ width: 751 }}
                image={img}
                alt="Library"
            />
        </Box>


    );
};

export default FrontPage;