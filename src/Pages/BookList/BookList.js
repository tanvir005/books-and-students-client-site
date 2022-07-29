import React from 'react';
import Grid from '@mui/material/Grid';
import Table from './Table';

const BookList = () => {
    return (
        <Grid item xs={8} >
            <Table></Table>
        </Grid>
    );
};

export default BookList;