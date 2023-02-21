import React from 'react';
import { Routes ,Route } from 'react-router-dom';
import AddOrEditUser from './EditOrAddUserForm';
import EditUser from './EditUser';

import Home from "./Home"
import ManageBooks from './ManageBooks';
import ManageUsers from "./ManageUsers"
const Main = () => {
  return (
    <Routes> {/* The Switch decides which component to show based on the current URL.*/}
      <Route exact path='/' element={<Home/>}></Route>
      <Route exact path='/books' element={<ManageBooks/>}></Route>
      <Route exact path='/users' element={<ManageUsers/>}></Route>
      <Route exact path='/add_new_user' element={<AddOrEditUser name="" pID=""/>}></Route>
      <Route exact path='/edit_user/:userName/:personalID' element={<EditUser/>}></Route>
    </Routes>
  );
}

export default Main;