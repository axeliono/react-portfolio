import React, { createContext, useContext } from "react";
import {  useProjectReducer } from "./reducers";

const storeContext = createContext();
const { Provider } = StoreContext();

const StoreProvider = ({ value = [], ...props }) => {
  const [state, dispatch] = useProjectReducer({
    //enter info when deciding what state info needed
    post: {},
  });

  return <Provider value={[state, dispatch]} {...props} />;
};

const useStoreContext = () => {
    return useContext(storeContext);
}

export {StoreProvider, useStoreContext};