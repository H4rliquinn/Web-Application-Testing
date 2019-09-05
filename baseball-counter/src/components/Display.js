import React from 'react';
import '../App.css';

const Display = (props) => {
    return ( 
        <div className="displayBoard">
            <div className="countBox">Strikes: {props.strike}</div>
            <div className="countBox">Balls: {props.ball}</div>
        </div>
     );
}
 
export default Display;
