import React from 'react';
import '../App.css';

const Display = (props) => {

    return ( 
        <div className="buttonBox">
            <button type="button" onClick={()=>handleStrikes()}>Add Strike</button>
            <button type="button" onClick={()=>handleBalls()}>Add Ball</button>
        </div>
     );
}
 
export default Display