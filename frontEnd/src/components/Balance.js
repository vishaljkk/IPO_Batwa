import React, {useContext} from 'react'
import { GlobalContext } from '../context/GlobalState';


export const Balance = () => {
    const { bankbalance } = useContext(GlobalContext);
    //console.log(bankbalance);
    return (
        <div>
            <h4>Your Account Balance</h4>
            <h1 id="balance">Rs {bankbalance}</h1>
        </div>
    )
}
