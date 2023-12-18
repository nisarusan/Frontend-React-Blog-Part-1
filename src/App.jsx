import React, {useEffect, useState} from 'react';
import './App.css';
import logo from './assets/logo-medium.png';
import Navi from './component/navigate/Navi';
import Home from './component/home/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Blog from './component/blog/Blog';
import ErrorPage from './component/error/ErrorPage';
import Blogpost from './component/blog/Blogpost';
import NewPost from './component/NewPost/NewPost';

function App() {
    return (
        <>
            <Navi logo={logo} alt="Blogventures" />
            <div className="page-container">
                <Routes>
                    <Route path="/" element={<Home title="Bij blogventure geloven we in de kracht van woorden" />} />
                    <Route path="/blog" element={<Blog />} />
                    <Route path="/blogpost/:id" element={<Blogpost />} />
                    <Route path="/new-post" element={<NewPost />} />
                    <Route path="/error" element={<ErrorPage />} />
                </Routes>
            </div>
        </>
    );
}

export default App;
