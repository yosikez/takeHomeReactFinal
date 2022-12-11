import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import HomePages from './pages/HomePages/HomePages';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import MasterDataPages from './components/TabelBook/MasterDataPages';
import DetailData from './pages/DetailPages/DetailData';
import TabsData from './pages/TabsPages/TabsData';
import TableAuthor from './components/TabelAuthor/TabelAuthor';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<HomePages/>}/>
        <Route path='/master-data' element={<TabsData/>}>
          <Route index element={<MasterDataPages/>}/>
          <Route path='/master-data/books' element={<MasterDataPages/>}/>
          <Route path='/master-data/author' element={<TableAuthor/>} />
        </Route>
        <Route path='detail/:id' element={<DetailData/>}/>
      </Routes>
    </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
