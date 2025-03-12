import {useState,createContext, useContext} from 'react';

  const Messagecontext=createContext();
const App = () => {

   const[message, setMessage]=useState("Hello, Bestie");
  return (
    
      <Messagecontext.Provider value={message}>
        <Parent/>
      </Messagecontext.Provider>
  
  );
};
       const Parent=()=>
       {
         return <Child/>
       };

       const Child=()=>
       {
         return <GrandChild/>
       };


         const GrandChild=()=>
         {
          const message=useContext(Messagecontext);
          return <p>{message}</p>
         };


export default App;
