import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Box } from '@mui/system';
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField } from '@mui/material';



const StudentListDataShow = () => {
  const [open, setOpen] = React.useState(false);

  const firstName = React.useRef('');
  const lastName = React.useRef('');

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const handleAddClick = async event => {
    event.preventDefault();
    const data = {
      first_name: firstName.current.value,
      last_name: lastName.current.value
    }
    fetch('http://localhost:5000/student', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(data)
    })
      .then(res => res.json())
      .then(result => {
        console.log(result)
      })

    setOpen(false)
  }
  const [students, setStudents] = React.useState([]);
  React.useEffect(() => {
    fetch('http://localhost:5000/student')
      .then(res => res.json())
      .then(data => setStudents(data))
  }, [open])

  const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));
  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
      border: 0,
    },
  }));
  return (
    <Box>
      <Box sx={{ display: 'flex', gap: 10, alignItems: 'center' }}>
        <Button onClick={handleClickOpen}
          size='large' variant='outlined'
          sx={{ order: 2, bgcolor: 'green', color: 'black', fontWeight: 'bold' }}>
          Add Student
        </Button>
        <TableContainer component={Paper} sx={{ ml: 15 }}>
          <Table sx={{ minWidth: 500, ml: 15 }} aria-label="customized table">
            <TableHead>
              <TableRow>
                <StyledTableCell>Id</StyledTableCell>
                <StyledTableCell align="left">First Name</StyledTableCell>
                <StyledTableCell align="left">Last Name</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {students.map((student) => (
                <StyledTableRow key={student.id}>
                  <StyledTableCell component="th" scope="row">
                    {student.id}
                  </StyledTableCell>
                  <StyledTableCell align="left">{student.frist_name}</StyledTableCell>
                  <StyledTableCell align="left">{student.last_name}</StyledTableCell>
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>

      <div>
        <Dialog open={open}>
          <DialogTitle>Add New Student</DialogTitle>
          <DialogContent>

            <TextField
              autoFocus
              margin="dense"
              inputRef={firstName}
              label="Frist Name"
              type="text"
              fullWidth
              variant="standard"
            />
            <TextField
              autoFocus
              margin="dense"
              inputRef={lastName}
              label="Last Name"
              type="text"
              fullWidth
              variant="standard"
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>Cancel</Button>
            <Button onClick={handleAddClick}>Add</Button>
          </DialogActions>
        </Dialog>
      </div>
    </Box>
  );
};

export default StudentListDataShow;