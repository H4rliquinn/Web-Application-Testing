import React, { useState } from 'react';

const useCount = (strikes=0,balls=0) => {
    let count=[strikes,balls]
    const setStrikes=(e)=>count[0]=count[0]=count[0]+1;
    const setBalls=(e)=>count[1]=count[1]++;
    return [count,setStrikes,setBalls]  
}
 
export default useCount;