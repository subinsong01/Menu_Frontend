import React from 'react';
import MenuAdminInputPage from './MenuAdminInputPage';
import {
    BrowserRouter,
    Routes, 
    Route,
} from "react-router-dom"
import MenuAdminListPage from './MenuAdminListPage';
import MenuAdminUpdatePage from './MenuAdminUpdatePage';
import ErrorPage from './ErrorPage';
import MainPage from './MainPage';

function MenupanCrud01(props) {
  return (
   <>
   <BrowserRouter>
    <Routes>
      <Route index element={<MainPage/>} />
      <Route path="/list" element={<MenuAdminListPage />}/>
      <Route path="/input" element={<MenuAdminInputPage/>}/>
      <Route path="/update" element={<MenuAdminUpdatePage />}/>
      <Route path="*" element={<ErrorPage />}/>
    </Routes>
   </BrowserRouter>
   </>
  );
}

export default MenupanCrud01;