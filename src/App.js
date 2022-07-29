import { Routes, Route } from "react-router-dom";
import Home from './Components/Home';
import BookList from "./Pages/BookList/BookList";
import UpdateBookList from "./Pages/UpdateBookList";
import UpdateStudentList from "./Pages/UpdateStudentList";
import Grid from '@mui/material/Grid';
import FrontPage from "./Components/FrontPage";
import StudentList from "./Pages/StudentList";


function App() {
  return (
    <Grid container>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route index element={<FrontPage></FrontPage>} />
          <Route path="book-list" element={<BookList />} />
          <Route path="student-list" element={<StudentList />} />
          <Route path="update-book-list" element={<UpdateBookList />} />
          <Route path="update-student-list" element={<UpdateStudentList />} />
        </Route>
       
      </Routes>
    </Grid>
  );
}

export default App;
