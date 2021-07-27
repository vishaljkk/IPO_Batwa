import React, {useState} from 'react'

export const AddBid = () => {
    const [text, setText] = useState('');
    const [amount, setAmount] = useState('');
    const [quantity, setQuantity] = useState(1);
    return (
        <div>
            <h3>Add Bid</h3>
            <form>
                <div className="form-control">
                <label htmlFor="text">Select IPO name</label>
                <input type="text" value={text}  onChange={(e) => setText(e.target.value)} placeholder="Enter IPO name..." />
                </div>
                <div className="form-control">
                <label htmlFor="amount">
                    Enter Number of Lots <br />
                </label>
                <input type="number" value={quantity} onChange={(e) => setQuantity(e.target.value)} placeholder="Enter number of lots..." />
                <label htmlFor="amount"
                    >Price Of one lot <br />
                </label>
                <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} placeholder="Enter amount..." />
                </div>
                <button className="btn">Bid</button>
            </form>
        </div>
    )
}
