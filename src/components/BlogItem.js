// src/components/BlogItem.js
import React, { useContext, useState } from 'react';
import { BlogContext } from '../context/BlogContext';

const BlogItem = ({ blog, number }) => {
  const { dispatch } = useContext(BlogContext);
  const [isEditing, setIsEditing] = useState(false);
  const [editedTitle, setEditedTitle] = useState(blog.title);
  const [editedContent, setEditedContent] = useState(blog.content);

  const handleLike = () => {
    dispatch({ type: 'LIKE_BLOG', payload: blog.id });
  };

  const handleDelete = () => {
    dispatch({ type: 'DELETE_BLOG', payload: blog.id });
  };

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    const updatedBlog = {
      ...blog,
      title: editedTitle,
      content: editedContent,
    };
    dispatch({ type: 'EDIT_BLOG', payload: updatedBlog });
    setIsEditing(false);
  };

  const handleCancel = () => {
    setIsEditing(false);
    setEditedTitle(blog.title);
    setEditedContent(blog.content);
  };

  return (
    <div className="blog-item">
      <h3>
        Blog {number}: {isEditing ? (
          <input
            type="text"
            value={editedTitle}
            onChange={(e) => setEditedTitle(e.target.value)}
          />
        ) : (
          blog.title
        )}
      </h3>
      <p>
        {isEditing ? (
          <textarea
            value={editedContent}
            onChange={(e) => setEditedContent(e.target.value)}
          />
        ) : (
          blog.content
        )}
      </p>
      <div className="actions">
        Likes: {blog.likes}
        {isEditing ? (
          <>
            <button onClick={handleSave}>Save</button>
            <button onClick={handleCancel}>Cancel</button>
          </>
        ) : (
          <>
            <button onClick={handleLike}>Like</button>
            <button onClick={handleEdit}>Edit</button>
            <button onClick={handleDelete}>Delete</button>
          </>
        )}
      </div>
    </div>
  );
};

export default BlogItem;
