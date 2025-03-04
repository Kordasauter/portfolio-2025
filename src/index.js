import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router'

import './index.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
// import App from './App';
import Accueil from './pages/Accueil';
import Competences from './pages/Competences';
import Experiences from './pages/Experiences';
import Projets from './pages/Projets';

import NotFound from './pages/NotFound';

import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Header />
    <main>
      <Routes>
        <Route path="/*" element={<NotFound/>}/>
        <Route path="/" element={<Accueil/>}/>
        <Route path="/competences" element={<Competences/>}/>
        <Route path="/experiences" element={<Experiences/>}/>
        <Route path="/projets" element={<Projets/>}/>
      </Routes>
    </main>
    <Footer />
    </BrowserRouter>
    {/* <App /> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
