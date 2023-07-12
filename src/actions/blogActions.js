// src/actions/blogActions.js
export const addBlog = (blog) => {
    return {
      type: 'ADD_BLOG',
      payload: blog,
    };
  };
  
  export const editBlog = (blog) => {
    return {
      type: 'EDIT_BLOG',
      payload: blog,
    };
  };
  
  export const likeBlog = (blogId) => {
    return {
      type: 'LIKE_BLOG',
      payload: blogId,
    };
  };
  
  export const deleteBlog = (blogId) => {
    return {
      type: 'DELETE_BLOG',
      payload: blogId,
    };
  };
  