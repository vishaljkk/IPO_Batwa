import React, {useContext} from 'react'
import { GlobalContext } from '../context/GlobalState';

export const Bid = ({bid}) => {
    const {deleteTransaction} = useContext(GlobalContext);
    const sign = bid.amount < 0 ? '-' : '+';
    return (
        <div>
            <li className={bid.amount < 0 ? 'minus' : 'plus'}>
                {bid.text} <span>{sign}Rs {Math.abs(bid.amount)}</span>
                <button className="delete-btn" onClick={()=> deleteTransaction(bid._id)}>x</button>
            </li>       
        </div>
    )
}
