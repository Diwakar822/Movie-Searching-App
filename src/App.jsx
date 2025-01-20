import React from 'react';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import MovieDetailsPage from './pages/MovieDetailsPage';

const App = () => {
  return (
    <div>
      <BrowserRouter>
      {/* <Router> */}
       <Routes>
       
     <Route path='/' element={<HomePage/>}/>
     <Route path='/details/:id' element={<MovieDetailsPage/>}/>
       

      </Routes>
      {/* </Router> */}
      </BrowserRouter>
       
    </div>
  );
};

export default App;