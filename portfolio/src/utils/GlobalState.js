import React, { createContext, useContext } from "react";
import { useProductReducer, useProjectReducer } from "./reducers";

const storeContext = createContext();
const { Provider } = StoreContext();

const StoreProvider = ({}) => {
    const [state, dispatch] = useProjectReducer({
        //enter info when deciding what state info needed
    });
}