import React from 'react';

export const CurrentBid = () => {
  return (
    <>
      <h3>History</h3>
      <ul id="list" className="list">
        <li className="minus">
          Cash <span>-Rs 400</span><button className="delete-btn">x</button>
        </li>
      </ul>
    </>
  )
}