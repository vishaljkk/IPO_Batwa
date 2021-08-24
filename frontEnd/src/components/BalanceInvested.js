import React, {useContext} from 'react'
import { GlobalContext } from '../context/GlobalState';

export const BalanceInvested = () => {
    const { bids, bankbalance } = useContext(GlobalContext);
  
    const amounts = bids.map(bid => bid.amount);

    const total = amounts.reduce((acc,item)=> (acc += item),0).toFixed(2);

    const remaining = bankbalance - total;
  
    const invested = Number(total);  

    return (
        <div>
            <div className="inc-exp-container">
                <div>
                    <h4>Balance</h4>
                    <p className="money plus">+Rs {remaining}</p>
                </div>
                <div>
                    <h4>Invested</h4>
                    <p className="money minus">-Rs {invested}</p>
                </div>
            </div>
        </div>
    )
}




    // const remaining = amounts
    //   .filter(item => item > 0)
    //   .reduce((acc, item) => (acc += item), 0);

    // const invested = (
    //   amounts.filter(item => item < 0).reduce((acc, item) => (acc += item), 0) *
    //   -1
    // );