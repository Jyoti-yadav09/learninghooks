import {useState, useContext, createContext} from 'react';

const MessageContext=createContext(); 
const App = () => {
  const[message, setMessage]=useState("Hello, Bestie");
  return (
    <MessageContext.Provider value={message}>
      <Parent/>
    </MessageContext.Provider>
  );
};
  
 const Parent=()=>
 {
   return <Child/>;
 };
 
   const Child=()=>
   {
     return <Grandchild/>;
   };

    const Grandchild=()=>
    {
      const message=useContext(MessageContext); 
       return <h1>{message}</h1>;
    };


export default App;
