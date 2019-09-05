import React, { useState } from 'react';

const useCount = (strikes=0,balls=0) => {
    let count=[strikes,balls]
    
    const setStrikes=()=>{
        count[0]=count[0]+1;
        console.log("Strike",count);
    }
    const setBalls=()=>{
        count[1]=count[1]+1;
        console.log("Ball!",count);
    }
    return [count,setStrikes,setBalls]  
}
 
export default useCount;