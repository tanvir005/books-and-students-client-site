import React from 'react';
import Grid from '@mui/material/Grid';
import StudentListDataShow from './StudentListDataShow';
import { Typography } from '@mui/material';

const StudentList = () => {
    return (
        <Grid item xs={8}>
           <Typography variant='h3' sx={{p:10}}> Student list </Typography>
            <StudentListDataShow></StudentListDataShow>
        </Grid>
    );
};

export default StudentList;