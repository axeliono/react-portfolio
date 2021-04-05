import { useReducer } from "react";
import {} from "./actions";

export const reducer = (state, action) => {
  switch (action.type) {
      default:
          return state;
  }
};

export function useProjectReducer(initialState) {
    return useReducer(reducer, initialState);
}