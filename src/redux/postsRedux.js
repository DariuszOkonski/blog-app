const postsReducer = (statePart = [], action) => {
  switch (action.type) {
    case REMOVE_POST:
      return statePart.filter((post) => post.id !== action.payload);
    default:
      return statePart;
  }
};

export default postsReducer;

// selectors
export const getAllPosts = (state) => state.posts;
export const getPost = ({ posts }, postId) =>
  posts.find((post) => post.id === postId);

// actions
const createActionName = (actionName) => `app/lists/${actionName}`;
const REMOVE_POST = createActionName('ADD_LIST');

// actions creators
export const removePost = (payload) => ({ type: REMOVE_POST, payload });
