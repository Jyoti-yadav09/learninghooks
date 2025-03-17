import React from 'react';
import { useState, useMemo} from 'react';

const Squareexmpl = () => {
  const[count, setCount]=useState(0);
  const[number, setNumber]=useState(5);


  const squared=useMemo(()=>number*number,[number]);

  return (
    <div>
      <h2 className=' text-2xl text-red-600'>Squared:{squared}</h2>
      <button onClick={()=>setNumber(number+1)} className='text-xl pr-7'>Increase Number</button>
      <button onClick={()=>setCount(count+1)} className='text-xl'>Increase Count({count})</button>
    </div>
  );
}

export default Squareexmpl;
