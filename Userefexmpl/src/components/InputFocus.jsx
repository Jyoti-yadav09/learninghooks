import {useRef} from "react";

const Inputfocus=()=>
{
     const inputRef=useRef(null);


      const focusInput=()=>
      {
         inputRef.current.focus();
      };


 return(
    <div>
    <input ref={inputRef} type="text" placeholder="Type Something..."/>
     <button onClick={focusInput}>Focus Input</button>
    </div>
 );
};

 export default Inputfocus;
 
 