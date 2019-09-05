import React from 'react';
import '../App.css';

const Display = (props) => {
    return ( 
        <div className="buttonBox">
            <button type="button" onClick={()=>props.strike()}>Add Strike</button>
            <button type="button" onClick={()=>props.ball()}>Add Ball</button>
        </div>
     );
}
 
export default Display