import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Nav from './Nav';
import PostContent from './PostContent';
import CategoryPost from './categoryPosts';

export default function App() {
  return (
    <BrowserRouter>
      <Nav /> 
      <div className="pt-10"> 
        <Routes>
          <Route path="/" element={<CategoryPost />} />
          <Route path="/post/:slug" element={<PostContent />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
