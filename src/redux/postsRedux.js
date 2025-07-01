const postsReducer = (statePart = [], action) => {
  return statePart;
};

export default postsReducer;

// selectors
export const getAllPosts = (state) => state.posts;
export const getPost = ({ posts }, postId) =>
  posts.find((post) => post.id === postId);

// actions

// actions creators
