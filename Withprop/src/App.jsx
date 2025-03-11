import React, { useState } from 'react'

const App = () => {
  const[message, setMessage]=useState("Hello, bestie");
  
  return <Parent message={message}/>;

};

 const Parent=({message})=>
 {
   return<Child message={message}/>;
 };

  const Child=({message})=>
  {
     return <GrandChild message={message}/>;
  };


 const GrandChild=({message})=>
 {
   return <p>{message}</p>;
 }





export default App;
