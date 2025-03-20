import React from 'react';
import useAuthorStore from './components/Authstore';
const App = () => {
  const {isAuthenticated, login, logout}=useAuthorStore();
  return (
   
    <div>
      <h1>{isAuthenticated?"Welcome users":"Login Please"}</h1>
      {isAuthenticated?
      <button onClick={logout}>Logout</button>
       :<button onClick={login}>Login</button>
    
    }
    </div>
  );
};

export default App;
