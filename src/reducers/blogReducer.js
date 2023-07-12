// src/reducers/blogReducer.js
const blogReducer = (state, action) => {
    switch (action.type) {
      case 'ADD_BLOG':
        return {
          ...state,
          blogs: [...state.blogs, action.payload],
        };
      case 'EDIT_BLOG':
        // Find and update the blog with the matching id
        const updatedBlogs = state.blogs.map((blog) =>
          blog.id === action.payload.id ? action.payload : blog
        );
        return {
          ...state,
          blogs: updatedBlogs,
        };
      case 'LIKE_BLOG':
        // Find and update the blog with the matching id
        const likedBlogs = state.blogs.map((blog) =>
          blog.id === action.payload ? { ...blog, likes: blog.likes + 1 } : blog
        );
        return {
          ...state,
          blogs: likedBlogs,
        };
      case 'DELETE_BLOG':
        // Filter out the blog with the matching id
        const filteredBlogs = state.blogs.filter(
          (blog) => blog.id !== action.payload
        );
        return {
          ...state,
          blogs: filteredBlogs,
        };
      default:
        return state; // Add a default case to return the state as is
    }
  };
  
  export { blogReducer };
  