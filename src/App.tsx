import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Main from './components/Main/Main';
import FullPost from './components/FullPost/FullPost';
import styles from './App.module.css'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Main/>}/>
        <Route path='/post/:id' element={<FullPost/>}/>
      </Routes>

    </BrowserRouter>
  );
};

export default App;