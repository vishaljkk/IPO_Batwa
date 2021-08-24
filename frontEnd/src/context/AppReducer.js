export default (state, action) => {
  console.log(action);
    switch(action.type) {
      case 'GET_BIDS':
        return {
          ...state,
          loading: false,
          bids: action.payload
        }
      case 'DELETE_BID':
        return {
          ...state,
          bids: state.bids.filter(bid => bid._id !== action.payload)
        }
      case 'ADD_BID':
        return {
          ...state,
          bids: [...state.bids, action.payload]
        }
      case 'TRANSACTION_ERROR':
        return {
          ...state,
          error: action.payload
        }
      default:
        return state;
    }
  }

  
  // case 'DELETE_BID':
  //   return {
  //     ...state,
  //     bids: state.bids.filter(bid => bid.id !== action.payload)
  //   }
  // case 'ADD_BID':
  //   return {
  //     ...state,
  //     bids: [action.payload, ...state.bids]
  //   }
