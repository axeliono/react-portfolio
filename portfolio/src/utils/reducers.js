import { useReducer } from "react";
import { SET_POST } from "./actions";

export const reducer = (state, action) => {
  switch (action.type) {
    case SET_POST:
      return {
        ...state,
        post: [...action.post],
      };
    default:
      return state;
  }
};

export function useProjectReducer(initialState) {
  return useReducer(reducer, initialState);
}
