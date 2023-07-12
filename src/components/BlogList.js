// src/components/BlogList.js
import React, { useContext } from 'react';
import { BlogContext } from '../context/BlogContext';
import BlogItem from './BlogItem';

const BlogList = () => {
  const { state } = useContext(BlogContext);
  const { blogs } = state;

  // Sort blogs by timestamp in descending order
  const sortedBlogs = blogs.sort((a, b) => b.timestamp - a.timestamp);

  return (
    <div>
      <h2>All Blogs</h2>
      {sortedBlogs.length > 0 ? (
        sortedBlogs.map((blog, index) => (
          <BlogItem key={blog.id} blog={blog} number={index + 1} />
        ))
      ) : (
        <p>No blogs yet.</p>
      )}
    </div>
  );
};

export default BlogList;
