// src/components/App.js
import React from 'react';
import BlogForm from './BlogForm';
import BlogList from './BlogList';

const App = () => {
  return (
    <div>
      <h1>Blog Post App</h1>
      <BlogForm />
      <BlogList />
    </div>
  );
};

export default App;
