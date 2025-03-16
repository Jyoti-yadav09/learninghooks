import { useRef } from "react";

 const ChangeColor=()=>
 {
     const textRef=useRef(null);

     const changecolor=()=>
     {
      textRef.current.style.color="red";   
     };


     return(
        <>
         <h1 ref={textRef}>Hello, Jyoti</h1>
        <button onClick={changecolor}>Click</button>
        </>
     )
 };




 export default ChangeColor;