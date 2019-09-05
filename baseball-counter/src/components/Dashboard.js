import React from 'react';
import '../App.css';

const Display = (props) => {

    return ( 
        <div className="buttonBox">
            <button type="button" onClick={()=>props.setStrikes(1)}>Add Strike</button>
            <button type="button" onClick={()=>props.setBalls(1)}>Add Ball</button>
            <button type="button" onClick={()=>props.setStrikes(-1)}>Foul Ball</button>
            <button type="button" onClick={()=>{props.setBalls(-1);props.setStrikes(0)}}>Hit</button>
        </div>
     );
}
 
export default Display