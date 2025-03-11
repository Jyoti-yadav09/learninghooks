import  {useState, useCallback} from 'react';

const App = () => {
  const[count, setCount]=useState(0);
  const handleClick=useCallback(()=>
  {
     alert("Button Clicked");
  }, []);
      
  return (
    <div>
      <h2>Count:{count}</h2>
      <button onClick={()=>setCount(count+1)}>Increase Button</button>
      <button onClick={handleClick}>Click Me</button>
      
    </div>
  );
}

export default App;