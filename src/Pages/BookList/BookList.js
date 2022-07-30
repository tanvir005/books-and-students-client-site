import React from 'react';
import Grid from '@mui/material/Grid';
import BookListData from './BookListData';
import { Typography } from '@mui/material';

const BookList = () => {
    return (
        <Grid item xs={8} >
            <Typography variant='h3' sx={{ p: 10 }}> Book List </Typography>
            <BookListData></BookListData>
        </Grid>
    );
};

export default BookList;