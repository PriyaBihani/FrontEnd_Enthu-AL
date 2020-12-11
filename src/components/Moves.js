import React from 'react'
import star from '../assets/star.jpg'

const Moves = ({ moves }) => (
    <div className="moves">
        <img src={star}/>
        <div className="centered">{moves}</div>
    </div>
)
export default Moves
