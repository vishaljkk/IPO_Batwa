import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';
import { Bid } from './Bid'

export const CurrentBid = () => {
  const { bids } = useContext(GlobalContext);
  const min = 1;
  console.log(bids);
  return (
    <>
      <h3>Current Bid</h3>
      <ul id="list" className="list">
        { bids.length < min &&
          <p>No Bids Available. Lets Start Biding</p>
        }
        {bids.map(bid => (<Bid key={bid.id} bid={bid}/> ))}
        
      </ul>
    </>
  )
}

// {bids.map(bid => (<li className="minus">
//             bid.text <span>-Rs 400</span><button className="delete-btn">x</button>
//           </li>
//         ))}