import React from 'react';
import { Routes ,Route } from 'react-router-dom';
import CreateUser from './CreateUser';
import EditBook from './EditBook';
import EditUser from './EditUser';
import Home from "./Home";
import LoanBook from './LoanBook';
import ManageBooks from './ManageBooks';
import ManageUsers from "./ManageUsers";
import MyBooks from './MyBooks';
import MyBooksHistory from './MyBooksHistory';
import PossibleLoaners from './PossibleLoaners';
import BookLoaners from './WhoLoansTheBook';

const Main = () => {
  return (
    <Routes> {/* The Switch decides which component to show based on the current URL.*/}
      <Route exact path='/' element={<Home/>}></Route>
      <Route exact path='/books' element={<ManageBooks/>}></Route>
      <Route exact path='/users' element={<ManageUsers/>}></Route>
      <Route exact path='/add_new_user' element={<CreateUser/>}></Route>
      <Route exact path='/books_history' element={<MyBooksHistory/>}></Route>
      <Route exact path='/edit_user/:userName/:personalID/:userID' element={<EditUser/>}></Route>
      <Route exact path='/edit_book/:bookName/:author/:copies/:bookID' element={<EditBook/>}></Route>
      <Route exact path='/user_books/:userID' element={<MyBooks/>}></Route>
      <Route exact path='/loan_book/:userID' element={<LoanBook/>}></Route>
      <Route exact path='/poss_loaners/:bookID' element={<PossibleLoaners/>}></Route>
      <Route exact path='/loaners/:bookID' element={<BookLoaners/>}></Route>
    </Routes>
  );
}

export default Main;