import React from 'react';
import { useState, useMemo} from 'react';

const App = () => {
  const[count, setCount]=useState(0);
  const[number, setNumber]=useState(5);


  const squared=useMemo(()=>number*number,[number]);

  return (
    <div>
      <h2>Squared:{squared}</h2>
      <button onClick={()=>setNumber(number+1)}>Increase Number</button>
      <button onClick={()=>setCount(count+1)}>Increase Count({count})</button>
    </div>
  );
}

export default App;
