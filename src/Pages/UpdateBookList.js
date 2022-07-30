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


const UpdateBookList = () => {

  const [open, setOpen] = React.useState(false);

  const bookName = React.useRef('');
  const authorName = React.useRef('');
  const borrower = React.useRef('');
  const borrowedDate = React.useRef('');
  const returnDate = React.useRef('');

  const handleClickAddBook = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const handleAddClick = async event => {
    event.preventDefault();
    const data = {
      book_name: bookName.current.value,
      author_name: authorName.current.value,
      borrower_name: borrower.current.value,
      borrow_date: borrowedDate.current.value,
      tentative_return_date: returnDate.current.value
    }
    fetch('http://localhost:5000/books', {
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

  const [books, setBooks] = React.useState([]);
  React.useEffect(() => {
    fetch('http://localhost:5000/books')
      .then(res => res.json())
      .then(data => setBooks(data))
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




 
  const handleClickLendBook = () =>{
    
  }


    return (
        <Box>
      <TableContainer component={Paper} sx={{ ml: 15}}>
        <Table sx={{ minWidth: 500, ml: 15 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>Book Nmae</StyledTableCell>
              <StyledTableCell align="right">Author Name</StyledTableCell>
              <StyledTableCell align="right">Borrowed By</StyledTableCell>
              <StyledTableCell align="right">Borrowed Date</StyledTableCell>
              <StyledTableCell align="right">Return Date</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {books.map((book) => (
              <StyledTableRow key={book.book_name}>
                <StyledTableCell component="th" scope="row">
                  {book.book_name}
                </StyledTableCell>
                <StyledTableCell align="right">{book.author_name}</StyledTableCell>
                <StyledTableCell align="right">{book.borrower_name}</StyledTableCell>
                <StyledTableCell align="right">{book.borrow_date}</StyledTableCell>
                <StyledTableCell align="right">{book.tentative_return_date}</StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Box sx={{display:'flex', gap:10, ml:60, mt:10}}>
        <Button onClick={handleClickAddBook} sx={{bgcolor:'green', color: 'black', fontWeight:'bold', pl:2, pr:2}}>Add Book</Button>
        <Button onClick={handleClickLendBook} sx={{bgcolor:'orange', color: 'black', fontWeight:'bold', pl:2, pr:2}}>To Lend</Button>
      </Box>

      <div>
        <Dialog open={open}>
          <DialogTitle>Add New Book</DialogTitle>
          <DialogContent>

            <TextField
              autoFocus
              margin="dense"
              inputRef={bookName}
              label="Book Name"
              type="text"
              fullWidth
              variant="standard"
            />
            <TextField
              autoFocus
              margin="dense"
              inputRef={authorName}
              label="Author Name"
              type="text"
              fullWidth
              variant="standard"
            />
            <TextField
              autoFocus
              margin="dense"
              inputRef={borrower}
              label="Borrower Name"
              type="text"
              fullWidth
              variant="standard"
            />
            <TextField
              autoFocus
              margin="dense"
              inputRef={borrowedDate}
              label="Borrowed Date"
              type="text"
              fullWidth
              variant="standard"
            />
            <TextField
              autoFocus
              margin="dense"
              inputRef={returnDate}
              label="Return Date"
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

export default UpdateBookList;