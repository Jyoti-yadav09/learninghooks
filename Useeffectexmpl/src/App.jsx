
import { useState, useEffect } from "react";
import Timeout from "./components/Timeout";

const App = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log(`Count updated: ${count}`);
  }, [count]); // Runs only when `count` changes

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increase</button>
      <Timeout/>
    </div>
   
  );
};

export default App;
