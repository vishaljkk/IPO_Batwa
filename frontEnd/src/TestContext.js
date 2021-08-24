import React, { useContext } from "react";

const initialState = {
    bankbalance:100000,
    bids: [],
    error: null,
    loading: true
}  

const GlobalContext = React.createContext(initialState);
export default GlobalContext;
export const useMyContext = () => useContext(GlobalContext);
