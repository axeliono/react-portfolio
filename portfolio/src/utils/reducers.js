import { useReducer } from "react";
import { GET_CURRENT_POST, GET_POSTS, GET_PROJECTS } from "./actions";

export const reducer = (state, action) => {
  switch (action.type) {
    case GET_POSTS:
      return {
        ...state,
        posts: [...action.posts],
      };
    case GET_PROJECTS:
      return {
        ...state,
        projects: [...action.projects],
      };
    case GET_CURRENT_POST:
      return {
        ...state,
        currentPost: action.currentPost,
      }
    default:
      return state;
  }
};

export function useProjectReducer(initialState) {
  return useReducer(reducer, initialState);
}
