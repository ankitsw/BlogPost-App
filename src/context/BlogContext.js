// src/context/BlogContext.js
import React, { createContext, useReducer } from 'react';
import { blogReducer } from '../reducers/blogReducer';

const initialState = {
  blogs: [], // Initialize blogs as an empty array
};

export const BlogContext = createContext();

const BlogContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(blogReducer, initialState);

  // Add your actions here (addBlog, editBlog, likeBlog, deleteBlog)

  return (
    <BlogContext.Provider value={{ state, dispatch }}>
      {children}
    </BlogContext.Provider>
  );
};

export default BlogContextProvider;
