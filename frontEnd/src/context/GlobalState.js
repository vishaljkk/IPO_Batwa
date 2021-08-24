import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';
import axios from 'axios';

// Initial state
const initialState = {
  bankbalance:100000,
  bids: [],
  error: null,
  loading: true
}

// Create context
export const GlobalContext = createContext(initialState);

// Provider component
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

   // Actions
   async function getTransactions() {
    try {
      const res = await axios.get('http://geekinsidernodebackend-env.eba-yips4jkq.ap-south-1.elasticbeanstalk.com/api/v1/transactions');

      dispatch({
        type: 'GET_BIDS',
        payload: res.data.data
      });
    } catch (err) {
      dispatch({
        type: 'TRANSACTION_ERROR',
        payload: err.response.data.error
      });
    }
  }
  

  async function deleteTransaction(id) {
    try {
      await axios.delete(`http://geekinsidernodebackend-env.eba-yips4jkq.ap-south-1.elasticbeanstalk.com/api/v1/transactions/${id}`);

      dispatch({
        type: 'DELETE_BID',
        payload: id
      });
    } catch (err) {
      dispatch({
        type: 'TRANSACTION_ERROR',
        payload: err.response.data.error
      });
    }
  }

  
  async function addTransaction(bid) {
    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    }

    try {
      const res = await axios.post('http://geekinsidernodebackend-env.eba-yips4jkq.ap-south-1.elasticbeanstalk.com/api/v1/transactions', bid, config);
      dispatch({
        type: 'ADD_BID',
        payload: res.data.data
      });
    } catch (err) {
      dispatch({
        type: 'TRANSACTION_ERROR',
        payload: err.response.data.error
      });
    }
  }

  return (<GlobalContext.Provider value={{
    bankbalance: state.bankbalance,
    bids: state.bids,
    error: state.error,
    loading: state.loading,
    getTransactions,
    deleteTransaction,
    addTransaction
  }}>
    {children}
  </GlobalContext.Provider>);
}

// sample text case :
// {id:1, text:"ShyMetal", amount: 10000},
// {id:2, text:"ShyMetal", amount: -10000},
// {id:3, text:"ShyMetal", amount: 10000},
// {id:4, text:"ShyMetal", amount: 10000}


// Actions without API
// function deleteTransaction(id) {
//   console.log("removing a bid");
//   dispatch({
//     type: 'DELETE_BID',
//     payload: id
//   });
// }

// function addTransaction(bid) {
//   dispatch({
//     type: 'ADD_BID',
//     payload: bid
//   });
// }
//