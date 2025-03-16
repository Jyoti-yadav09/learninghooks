import {useRef} from 'react';

const ShowHideText = () => {
     const textRef=useRef(null);

     const toggletext=()=>
     {
         if(textRef.current.style.display==="none")
         {
             textRef.current.style.display="block";
         }
          else{
             textRef.current.style.display="none";
          }
     }

  return (
    <div>
      <p ref={textRef}>Hello dear, there is some hidden text over there.</p>
      <button onClick={toggletext}>Show/Hide</button>
    </div>
  )
};

export default ShowHideText;
