import {useRef, useEffect, useState} from 'react'

const App = () => {
  const[count, setCount]=useState(0);
  const prevCount=useRef(null);
  useEffect(()=>
  {
     prevCount.current=count;
  }, [count])
  
  return (
    <div>
      <h1>Current Count:{count}</h1>
      <h2>Previous Count:{prevCount.current}</h2>
      <button onClick={()=>setCount(count+1)}>Increment</button>
    </div>
  )
}

export default App;
