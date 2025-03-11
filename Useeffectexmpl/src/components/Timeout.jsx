import {useState, useEffect} from 'react';

const Timeout = () => {
     const[count, setCount]=useState(0);

     useEffect(()=>
    {
        setTimeout(()=>
        {
             console.log("hello");
        },[count]);
    })
  return (
    <div>
      <h1>Count:{count}</h1>
      <button onClick={()=>setCount(count+1)}>Increase</button>
    </div>
  )
}

export default Timeout;
