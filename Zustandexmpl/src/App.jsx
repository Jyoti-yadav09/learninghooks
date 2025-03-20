import React from 'react';
import useStore from './components/Store';
const App = () => {
  const {count, increase, decrease}=useStore();
  return (
    <div>
      <h2> Count:{count}</h2> 
      <button onClick={increase}>Increase</button>
      <button onClick={decrease}>Decrease</button>
    </div>
  );
};

export default App;
