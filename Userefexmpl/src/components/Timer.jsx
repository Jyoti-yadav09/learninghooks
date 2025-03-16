import {useRef, useState} from 'react'

const Timer = () => {

    const timerRef=useRef(null);
    const[count, setCount]=useState(0);
    const startTimer=()=>
    {
         if(!timerRef.current)
         {
             timerRef.current=setInterval(()=>
            {
                 setCount((prev)=>prev+1);
            }, 1000);
         }
    };

      const stopTimer=()=>
      {
         clearInterval(timerRef.current);
         timerRef.current=null;
      };


  return (
    <div>
      <p>Count:{count}</p>
      <button onClick={startTimer}>Start</button>
      <button onClick={stopTimer}>Stop</button>
    </div>
  )
};

export default Timer;
