import React from 'react'

export const BalanceInvested = () => {
    return (
        <div>
            <div className="inc-exp-container">
                <div>
                    <h4>Balance</h4>
                    <p className="money plus">+Rs 0.00</p>
                </div>
                <div>
                    <h4>Invested</h4>
                    <p className="money minus">-Rs 0.00</p>
                </div>
            </div>
        </div>
    )
}
