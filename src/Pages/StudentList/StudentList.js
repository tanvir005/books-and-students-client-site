import React from 'react';
import Grid from '@mui/material/Grid';
import StudentListDataShow from './StudentListDataShow';

const StudentList = () => {
    return (
        <Grid item xs={8}>
            student list
            <StudentListDataShow></StudentListDataShow>
        </Grid>
    );
};

export default StudentList;