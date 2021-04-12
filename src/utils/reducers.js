import { useReducer } from "react";
import { GET_AUTHOR, GET_CURRENT_POST, GET_POSTS, GET_PROJECTS } from "./actions";

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
        singlePost: [...action.singlePost],
      }
    case GET_AUTHOR:
      return {
        ...state,
        author: [...action.author],
      }
    default:
      return state;
  }
};

export function useProjectReducer(initialState) {
  return useReducer(reducer, initialState);
}
